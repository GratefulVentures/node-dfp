import ApiClient from './ApiClient';

import Statement from './common/Statement';
import { AdUnit } from './inventory';

export default {
  createClient(...args) {
    return new ApiClient(...args);
  },

  AdUnit,

  Statement,

  get adunit() {
    return new AdUnit();
  }
};
