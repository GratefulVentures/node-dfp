import ReportJobStatus from './ReportJobStatus'

export default class ReportJob {

    constructor(jobId, reportQuery, status = ReportJobStatus.IN_PROGRESS) {
        this.id = jobId
    }

    get isComplete() {
        return this.status === ReportJobStatus.COMPLETED ||
            this.status === ReportJobStatus.FAILED
    }


}
