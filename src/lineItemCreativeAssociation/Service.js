import Service from '../Service';

class LineItemCreativeAssociationService extends Service {
  create(...args) {
    // if (! args.length) {
    //     return this.createObject(
    //         new LineItem(),
    //         this.create.bind(this)
    //     )
    // }

    if (args.length === 1 && Array.isArray(args[0])) {
      args = args[0];
    }

    args = args.map(obj => {
      if (obj.toObject) {
        return obj.toObject();
      }
      return obj;
    });

    return this.createLineItemCreativeAssociations({
      lineItemCreativeAssociations: args
    });
  }
}

export default LineItemCreativeAssociationService;
