/**
 * Represents a period of time.
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var DateRangeType = {
  /**
   * The current day.
   */
  TODAY: 'TODAY',

  /**
   * The previous day.
   */
  YESTERDAY: 'YESTERDAY',

  /**
   * The last week, from monday to sunday.
   */
  LAST_WEEK: 'LAST_WEEK',

  /**
   * The previous month.
   */
  LAST_MONTH: 'LAST_MONTH',

  /**
   * The last 5 months and the current month to date. This date range is only
   * usable for the columns {@link Column#REACH_FREQUENCY},
   * {@link Column#REACH_AVERAGE_REVENUE} and {@link Column#REACH}.
   */
  REACH_LIFETIME: 'REACH_LIFETIME',

  /**
   * Specifying this value will enable the user to specify
   * {@link ReportQuery#startDate} and {@link ReportQuery#endDate}.
   */
  CUSTOM_DATE: 'CUSTOM_DATE',

  /**
   * The next day.
   */
  NEXT_DAY: 'NEXT_DAY',

  /**
   * The next ninety days.
   */
  NEXT_90_DAYS: 'NEXT_90_DAYS',

  /**
   * The next week, from monday to sunday.
   */
  NEXT_WEEK: 'NEXT_WEEK',

  /**
   * The next month.
   */
  NEXT_MONTH: 'NEXT_MONTH',

  /**
   * Beginning of the next day until the end of the next month.
   */
  CURRENT_AND_NEXT_MONTH: 'CURRENT_AND_NEXT_MONTH',

  /**
   * The next quarter.
   */
  NEXT_QUARTER: 'NEXT_QUARTER',

  /**
   * The next three months.
   */
  NEXT_3_MONTHS: 'NEXT_3_MONTHS',

  /**
   * The next twelve months.
   */
  NEXT_12_MONTHS: 'NEXT_12_MONTHS'
};

exports['default'] = DateRangeType;
module.exports = exports['default'];