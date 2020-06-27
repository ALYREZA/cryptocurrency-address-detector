"use strict";
const arrify = require("arrify");
const pAny = require("p-any");
const pTimeout = require("p-timeout");
const bitcoinRegex = require("bitcoin-regex");
const ethereumRegex = require("ethereum-regex");
const litecoinRegex = require("litecoin-regex");
const dogecoinRegex = require("dogecoin-regex");
const bitcoincashRegex = require("bitcoincash-regex");
const dashRegex = require("dash-regex");

function detectCrypto(address) {
  if (bitcoinRegex({ exact: true }).test(address)) return "Bitcoin";
  else if (ethereumRegex({ exact: true }).test(address)) return "Ethereum";
  else if (litecoinRegex({ exact: true }).test(address)) return "LiteCoin";
  else if (dogecoinRegex({ exact: true }).test(address)) return "DogeCoin";
  else if (dashRegex({ exact: true }).test(address)) return "Dash";
  else if (bitcoincashRegex.format("cashaddr", { exact: true }).test(address))
    return "BitcoinCash";
  else return false;
}

module.exports = (dests, opts) => {
  opts = opts || {};
  opts.timeout = typeof opts.timeout === "number" ? opts.timeout : 5000;

  const p = pAny(arrify(dests).map(detectCrypto));
  return pTimeout(p, opts.timeout).catch(
    () => "Cryptocurrency could not be detected"
  );
};
