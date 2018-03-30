import Service from '../Service';

import Order from './Order';

class OrderService extends Service {
  list(query = '') {
    let filterStatement = this.createStatement(query).filterStatement;

    return this.callAsync('getOrdersByStatement', { filterStatement });
  }

  create(...orders) {
    if (!orders.length) {
      return this.createObject(OrderService.create(), this.create.bind(this));
    }

    orders = orders.map(order => {
      if (order.toObject) {
        return order.toObject();
      }
      return order;
    });

    return this.createOrders({ orders });
  }

  approve(order) {
    let action = {
      orderAction: {
        attributes: { 'xsi:type': 'ApproveAndOverbookOrders' },
        skipInventoryCheck: true
      },
      filterStatement: {
        query: 'WHERE id = ' + order.id
      }
    };

    return this.performOrderAction(action);
  }
}

OrderService.create = function(...args) {
  return new Order(...args);
};

export default OrderService;
