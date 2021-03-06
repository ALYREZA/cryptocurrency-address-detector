# cryptocurrency-address-detector [![Build Status](https://travis-ci.org/k4m4/cryptocurrency-address-detector.svg?branch=master)](https://travis-ci.org/k4m4/cryptocurrency-address-detector)

> Detect which cryptocurrency an address corresponds to.

## Install

```
~ ❯❯❯ npm install cryptocurrency-address-detector
```

## Usage

```js
const addressDetect = require("cryptocurrency-address-detector");

addressDetect("0x281055afc982d96fab65b3a49cac8b878184cb16").then(
  (cryptocurrency) => {
    console.log(cryptocurrency);
    //=> 'Ethereum'
  }
);

addressDetect("1dice8EMZmqKvrGE4Qc9bUFf9PX3xaYDp").then((cryptocurrency) => {
  console.log(cryptocurrency);
  //=> 'Bitcoin'
});

addressDetect("LQL9pVH1LsMfKwt82Y2wGhNGkrjF8vwUst").then((cryptocurrency) => {
  console.log(cryptocurrency);
  //=> 'LiteCoin'
});

addressDetect("0xsfdlffsjksldfj[IPv6:2001:db8::2]").then((cryptocurrency) => {
  console.log(cryptocurrency);
  //=> 'Cryptocurrency could not be detected'
});
```

## API

### addressDetect(address, [options])

Returns the cryptocurrency that an address corresponds to.

#### address

Type: `string`

Address to check for popular cryptocurrencies.

#### options

##### timeout

Type: `number`

Timeout in milliseconds after which a request is considered failed. Default: `5000`.

## Supported Cryptocurrencies

- [`Bitcoin/BTC`](https://github.com/kevva/bitcoin-regex)
- [`Bitcoin Cash/BCH`](https://github.com/k4m4/bitcoincash-regex)
- [`Ethereum/ETH`](https://github.com/k4m4/ethereum-regex)
- [`Litecoin/LTC`](https://github.com/k4m4/litecoin-regex)
- [`Dash/DASH`](https://github.com/k4m4/dash-regex)
- [`Dogecoin/DOGE`](https://github.com/k4m4/dogecoin-regex)

## Related

- [cryptaddress.now](https://github.com/k4m4/cryptaddress.now) - Minimal service to detect what cryptocurrency an address corresponds to.

## License

MIT © [Nikolaos Kamarinakis](https://nikolaskama.me)
