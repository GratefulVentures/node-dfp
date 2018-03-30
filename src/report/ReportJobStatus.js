/**
 * Represents the status of a {@link ReportJob} running on the server.
 */
const ReportJobStatus = {
  /**
   * The {@link ReportJob} has completed successfully and is ready to download.
   */
  COMPLETED: 'COMPLETED',

  /**
   * The {@link ReportJob} is still being executed.
   */
  IN_PROGRESS: 'IN_PROGRESS',

  /**
   * The {@link ReportJob} has failed to run to completion.
   */
  FAILED: 'FAILED'
};

export default ReportJobStatus;
