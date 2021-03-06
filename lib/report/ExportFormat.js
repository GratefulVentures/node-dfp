/**
 * The file formats available for creating the report.
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var ExportFormat = {
  /**
   * The report file is generated as a list of Tab Separated Values.
   */
  TSV: 'TSV',

  /**
   * The report file is generated as a list of Comma Separated Values for Excel.
   */
  CSV_EXCEL: 'CSV_EXCEL',

  /**
   * The report file is generated as a list of Comma Separated Values,
   * to be used with automated machine processing.
   * <p>
   * <ul>
   * <li>There is no pretty printing for the output, and no total row.</li>
   * <li>Column headers are the qualified name e.g. "Dimension.ORDER_NAME".</li>
   * <li>Monetary amounts are represented as micros in the
   * {@link Network#currencyCode currency of the network}.</li>
   * <li>Dates are formatted according to the ISO 8601 standard YYYY-MM-DD</li>
   * <li>DateTimes are formatted according to the ISO 8601 standard
   * YYYY-MM-DDThh:mm:ss[+-]hh:mm</li>
   * </ul>
   */
  CSV_DUMP: 'CSV_DUMP',

  /**
   * The report file is generated as XML.
   */
  XML: 'XML',

  /**
   * The report file is generated as an Office Open XML spreadsheet
   * designed for Excel 2007+.
   */
  XLSX: 'XLSX'
};

exports['default'] = ExportFormat;
module.exports = exports['default'];