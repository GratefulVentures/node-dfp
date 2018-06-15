import SoapClient from './SoapClient';

import InventoryService from './inventory/Service';
import OrderService from './order/Service';
import LineItemService from './lineitem/Service';
import NetworkService from './network/Service';
import CompanyService from './company/Service';
import UserService from './user/Service';
import CreativeService from './creative/Service';
import CustomTargetingService from './customTargeting/Service';
import CreativeWrapperService from './creativeWrapper/Service';
import LineItemCreativeAssociationService from './lineItemCreativeAssociation/Service';
import ReportService from './report/Service';
import PlacementService from './placement/Service';
import LabelService from './label/Service';

const ServiceMap = {
  inventory: InventoryService,
  order: OrderService,
  lineitem: LineItemService,
  network: NetworkService,
  company: CompanyService,
  users: UserService,
  creative: CreativeService,
  customTargeting: CustomTargetingService,
  creativeWrapper: CreativeWrapperService,
  lineItemCreativeAssociation: LineItemCreativeAssociationService,
  report: ReportService,
  placement: PlacementService,
  label: LabelService
};

function createAliases() {
  var aliases = {};
  Object.keys(ServiceMap).forEach(alias => {
    let service = ServiceMap[alias];

    aliases[service.name] = alias;
  });

  return aliases;
}

const ServiceAliases = createAliases();

class ApiClient {
  constructor(networkCode, displayName, version) {
    this.soap = new SoapClient(networkCode, displayName, version);

    this.services = {};
  }

  load(...serviceNames) {
    return this.getServices(...serviceNames).then(
      this.exposeServices.bind(this)
    );
  }

  exposeServices(services) {
    Object.keys(services).forEach(serviceName => {
      this.exposeService(serviceName, services[serviceName]);
    });

    return services;
  }

  exposeService(serviceName, service) {
    if (serviceName in ServiceAliases) {
      let alias = ServiceAliases[serviceName];
      let ServiceWrapper = ServiceMap[alias];

      this[alias] = new ServiceWrapper(service);
    }
  }

  setAuthClient(authClient) {
    this.authClient = authClient;

    return this;
  }

  authenticate() {
    if (!this.authClient) {
      throw new Error('Attempted to load a service before authenticating');
    }

    return new Promise((resolve, reject) => {
      this.authClient.authorize((err, token) => {
        if (err) {
          reject(err);
        } else {
          this.isAuthenticated = true;
          this.soap.setCredentials(`${token.token_type} ${token.access_token}`);
          resolve();
        }
      });
    });
  }

  getServices(...serviceNames) {
    let services = {};

    if (!this.isAuthenticated) {
      return this.authenticate().then(() => this.getServices(...serviceNames));
    }

    serviceNames = serviceNames.map(this.resolveServiceName);

    return Promise.all(serviceNames.map(this.getService.bind(this))).then(
      results => {
        serviceNames.forEach((name, i) => (services[name] = results[i]));

        return services;
      }
    );
  }

  getService(serviceName) {
    serviceName = this.resolveServiceName(serviceName);

    if (serviceName in this.services) {
      return Promise.resolve(this.services[serviceName]);
    }

    return this.soap.getService(serviceName).then(service => {
      this.services[serviceName] = service;

      return service;
    });
  }

  resolveServiceName(serviceName) {
    if (serviceName in ServiceMap) {
      serviceName = ServiceMap[serviceName].name;
    }

    return serviceName;
  }

  fromDfpDate(dfpDate) {
    return new Date(
      dfpDate.date.year,
      dfpDate.date.month,
      dfpDate.date.day,
      dfpDate.hour,
      dfpDate.minute,
      dfpDate.second
    );
  }

  toDfpDate(date, timeZoneID) {
    return {
      date: {
        year: date.getFullYear(),
        month: date.getMonth() + 1,
        day: date.getDate()
      },
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds(),
      timeZoneID: timeZoneID
    };
  }
}

export default ApiClient;
