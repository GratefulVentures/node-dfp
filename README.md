# Doubleclick for Publishers API Wrapper

This is an extremely new API wrapper for the DFP API.  The entire API is subject to change and is definitely not recommended for production use. **Please, be very very cautious.**

# 💀

### Install

```shell
npm install dfp
```

### Usage

```js
var dfp = require('dfp');
```

### Exports

```
dfp.adunit()
dfp.createClient()
dfp.AdUnit
dfp.Statement
```

#### createClient

```js
// Create a DFP Client
var dfp = require('dfp');
var {google} = require('googleapis');

var dfpClient = dfp.createClient(
  networkId, // 123456789
  accountName, // 'Sinks, Basins & More'
  apiVersion // 'v201702'
);

var jwtClient = google.auth.JWT(/* your creds */);

dfpClient.setAuthClient(jwtClient);
```
