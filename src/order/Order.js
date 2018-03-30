const requiredProps = ['name', 'advertiserId', 'traffickerId'];

class Order extends Object {
  /**
   * @property {String} name
   * @property {String} advertiserId
   * @property {String} salespersonId
   * @property {String} traffickerId
   */

  toObject() {
    let missingProps = [];
    requiredProps.forEach(propName => {
      if (!this[propName]) {
        missingProps.push(propName);
      }
    });

    if (missingProps.length) {
      throw new Error(
        'Missing required properties: ' + JSON.stringify(missingProps)
      );
    }

    let obj = {};

    requiredProps.forEach(field => {
      if (this[field] !== null) {
        obj[field] = this[field];
      }
    });

    return obj;
  }
}

export default Order;
