import Service from '../Service';

class CreativeService extends Service {
  create(...creatives) {
    // if (! creatives.length) {
    //     return this.createObject(
    //         new LineItem(),
    //         this.create.bind(this)
    //     )
    // }

    if (creatives.length === 1 && Array.isArray(creatives[0])) {
      creatives = creatives[0];
    }

    creatives = creatives.map(obj => {
      if (obj.toObject) {
        return obj.toObject();
      }
      return obj;
    });

    return this.createCreatives({ creatives });
  }

  update(...creatives) {
    if (creatives.length === 1 && Array.isArray(creatives[0])) {
      creatives = creatives[0];
    }

    return this.callAsync('updateCreatives', { creatives });
  }
}

export default CreativeService;
