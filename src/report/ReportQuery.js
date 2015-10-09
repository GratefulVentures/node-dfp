import * as DateUtils from '../common/DateUtils'

var requiredProps = [
    'dimensions',
    'columns',
    'startDate',
    'endDate'
]

/**
 * A {@code ReportQuery} object allows you to specify
 * the selection criteria for generating a report.
 */
export default class ReportQuery extends Object {
    /**
     * The list of break-down types being requested in the report.
     * The generated report will contain the dimensions in the
     * same order as requested.
     *
     * @property {Dimension[]} dimensions
     */
    // dimensions: Array<string>;

    /**
     * The ad unit view for the report.
     * Defaults to {@link AdUnitView#TOP_LEVEL}.
     *
     * @property {AdUnitView} adUnitView
     */

    /**
     * The list of trafficking statistics and revenue information being requested in the report. The
     * generated report will contain the columns in the same order as requested.
     *
     * @property {Column[]} columns
     */

    /**
     * The list of break-down attributes being requested in this report. Some
     * {@link DimensionAttribute} values can only be used with certain {@link Dimension} values that
     * must be included in the {@link #dimensions} attribute. The generated report will contain the
     * attributes in the same order as requested.
     *
     * @property {DimensionAttribute[]} dimensionAttributes
     */

    /**
     * The list of {@link CustomField#id} being requested in this report. To add a
     * {@link CustomField} to the report, you must include its corresponding {@link Dimension},
     * determined by the {@link CustomField#entityType}, as a {@link #dimensions dimension}.
     * <table>
     *   <tr>
     *     <th scope="col">{@link CustomFieldEntityType#entityType}</th>
     *     <th scope="col">{@link Dimension}</th>
     *   </tr>
     *   <tr>
     *     <td>{@link CustomFieldEntityType#LINE_ITEM}</td>
     *     <td>{@link Dimension#LINE_ITEM_NAME}</td>
     *   </tr>
     *   <tr>
     *     <td>{@link CustomFieldEntityType#ORDER}</td>
     *     <td>{@link Dimension#ORDER_NAME}</td>
     *   </tr>
     *   <tr>
     *     <td>{@link CustomFieldEntityType#CREATIVE}</td>
     *     <td>{@link Dimension#CREATIVE_NAME}</td>
     *   </tr>
     * </table>
     *
     * @property {Number[]} customFieldIds
     */



    run(waitToComplete = false) {

        return new Promise((resolve, reject) => {
            this.service
        })
    }

    toObject() {
        let missingProps = []
        requiredProps.forEach(propName => {
            if (! this[propName]) {
                missingProps.push(propName)
            }
        })

        if (missingProps.length) {
            throw new Error('Missing required properties: ' + JSON.stringify(missingProps))
        }

        let obj = {}

        Object.getOwnPropertyNames(this).forEach(field => {
            if (this[field] !== null) {
                obj[field] = this[field]
            }
            if (field === 'startDate' || field === 'endDate') {
                obj[field] = {
                    year: this[field].getFullYear(),
                    month: this[field].getMonth() + 1,
                    day: this[field].getDate()
                }
            }
        })

        return obj
    }


}
