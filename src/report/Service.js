import Service from '../Service';

import ReportQuery from './ReportQuery';
import ReportJob from './ReportJob';
import ExportFormat from './ExportFormat';
import https from 'https';

export default class ReportService extends Service {
  /**
   * Returns the URL at which the report file can be downloaded.
   * The report will be generated as a gzip archive, containing
   * the report file itself.
   *
   * @param reportJobId the ID of the {@link ReportJob}
   * @param exportFormat the {@link ExportFormat} for the report file
   *
   * @return the URL for report file download
   */
  getDownloadURL(reportId, exportFormat = ExportFormat.CSV_DUMP) {
    let reportJobId = reportId;
    if (reportId.id) {
      reportJobId = +reportId.id;
    }
    return this.callAsync('getReportDownloadURL', {
      reportJobId,
      exportFormat
    });
  }

  /**
   * Initiates the execution of a {@link ReportQuery} on the server.
   *
   * The following fields are required:
   * <ul>
   *   <li>{@link ReportJob#reportQuery}</li>
   * </ul>
   *
   * @param reportJob the report job to run
   *
   * @return the report job with its ID filled in
   */
  runReportJob(reportJob) {
    if (reportJob.toObject) {
      reportJob = reportJob.toObject();
    }
    return this.callAsync('runReportJob', { reportJob }).then(
      resp => new ReportJob(resp.id, resp.reportQuery, resp.reportJobStatus)
    );
  }

  create() {
    return new ReportQuery();
  }

  checkStatus(reportJob) {
    return this.callAsync('getReportJobStatus', { reportJobId: +reportJob.id });
  }

  waitForJob(reportJob, pollInterval = 2000) {
    let service = this;

    return this.checkStatus(reportJob)
      .then(status => {
        reportJob.status = status;
      })
      .then(() => {
        if (reportJob.isComplete) {
          return reportJob;
        }

        return new Promise(function(resolve, reject) {
          setTimeout(function() {
            service.waitForJob(reportJob, pollInterval).then(resolve, reject);
          }, pollInterval);
        });
      });
  }

  /**
   * Resolves to a response stream
   *
   * @param report the ID of the {@link ReportJob}
   * @param exportFormat the {@link ExportFormat} for the report file
   *
   * @return the URL for report file download
   */
  download(report, exportFormat = ExportFormat.CSV_DUMP) {
    return this.getDownloadURL(report, exportFormat).then(url => {
      return https.get(url);
    });
  }
}
