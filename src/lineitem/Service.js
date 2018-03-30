import Service from '../Service';

import LineItem from './LineItem';

class LineItemService extends Service {
  list(query) {
    return this.getLineItemsByStatement(this.createStatement(query));
  }

  findOrCreate(lineItem) {
    return this.list(`WHERE name = '${lineItem.name}'`).then(res => {
      if (res && res.results) {
        return res.results[0];
      }

      return this.create(lineItem);
    });
  }

  create(...lineItems) {
    if (!lineItems.length) {
      return this.createObject(new LineItem(), this.create.bind(this));
    }

    lineItems = lineItems.map(order => {
      if (order.toObject) {
        return order.toObject();
      }
      return order;
    });

    return this.createLineItems({ lineItems });
  }

  update(...lineItems) {
    if (lineItems.length === 1 && Array.isArray(lineItems[0])) {
      lineItems = lineItems[0];
    }
    return this.callAsync('updateLineItems', { lineItems });
  }
}

export default LineItemService;
