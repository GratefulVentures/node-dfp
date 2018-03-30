import ReportJobStatus from './ReportJobStatus';

export default class ReportJob {
  /**
   * @param jobId
   * @param reportQuery
   * @param status = ReportJobStatus.IN_PROGRESS
   */
  constructor(jobId) {
    this.id = jobId;
  }

  get isComplete() {
    return (
      this.status === ReportJobStatus.COMPLETED ||
      this.status === ReportJobStatus.FAILED
    );
  }
}
