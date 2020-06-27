import test from "ava";
import m from "./";

const fixturesBTC = [
  "1dice8EMZmqKvrGE4Qc9bUFf9PX3xaYDp",
  "1JeTiYgfVtpA3ygQTYFswkaoiH2VnFZJf9",
  "1Ak6rNZYm5tNtDVJRt93Cax17TBih6pM7Y",
  "1dice6YgEVBf88erBFra9BHf6ZMoyvG88",
  "1FFirnLctcZxVx5otnLNZ4dDGUkMBM4vNr",
];
const fixturesBCH = [
  "19hZx234vNtLazfx5J2bxHsiWEmeYE8a7k",
  "1F4MH7XeQypXZTjFgCj8ZSd63NX8ywTEbG",
  "1JCe8z4jJVNXSjohjM4i9Hh813dLCNx2Sy",
  "3B8vnfVt8UhHtYW7ib5BA7ZiVKDXY9UkRS",
  "1EeBbBiJGvVzemoLodsrZxv9sEKq1dz1KT",
];
test("Bitcoin/Bitcoin Cash", async (t) => {
  for (const x of fixturesBTC) {
    t.is(await m(x), "Bitcoin");
  }
  for (const x of fixturesBCH) {
    t.is(await m(x), "Bitcoin");
  }
});
test("Bitcoin/Bitcoin Cash with timeout", async (t) => {
  for (const x of fixturesBTC) {
    t.is(await m(x, { timeout: 3000 }), "Bitcoin");
  }
  for (const x of fixturesBCH) {
    t.is(await m(x, { timeout: 3000 }), "Bitcoin");
  }
});

const fixturesBCHCashAddr = [
  "bitcoincash:qpm2qsznhks23z7629mms6s4cwef74vcwvy22gdx6a",
  "bitcoincash:qr95sy3j9xwd2ap32xkykttr4cvcu7as4y0qverfuy",
  "bitcoincash:ppm2qsznhks23z7629mms6s4cwef74vcwvn0h829pq",
  "bitcoincash:pr95sy3j9xwd2ap32xkykttr4cvcu7as4yc93ky28e",
  "bitcoincash:pqq3728yw0y47sqn6l2na30mcw6zm78dzq5ucqzc37",
];
test("Bitcoin Cash (CashAddr)", async (t) => {
  for (const x of fixturesBCHCashAddr) {
    t.is(await m(x), "BitcoinCash");
  }
});
test("Bitcoin Cash (CashAddr) with timeout", async (t) => {
  for (const x of fixturesBCHCashAddr) {
    t.is(await m(x, { timeout: 3000 }), "BitcoinCash");
  }
});

const fixturesETH = [
  "0x281055afc982d96fab65b3a49cac8b878184cb16",
  "0x6f46cf5569aefa1acc1009290c8e043747172d89",
  "0x90e63c3d53e0ea496845b7a03ec7548b70014a91",
  "0xab7c74abc0c4d48d1bdad5dcb26153fc8780f83e",
  "0x53d284357ec70ce289d6d64134dfac8e511c8a3d",
];
test("Ethereum", async (t) => {
  for (const x of fixturesETH) {
    t.is(await m(x), "Ethereum");
  }
});
test("Ethereum with timeout", async (t) => {
  for (const x of fixturesETH) {
    t.is(await m(x, { timeout: 3000 }), "Ethereum");
  }
});

const fixturesLTC = [
  "LQL9pVH1LsMfKwt82Y2wGhNGkrjF8vwUst",
  "LPpHectVSbk7YHa5X89Cm3FoFBfzkJBJc9",
  "LRcYfbDMhwvXaGPFccaKuc3fZD1Nb55aGn",
  "LY5fxZS74Ewuj1TTHwat23eUmZwimsksrU",
  "Laub752qu81oWwkNKEyawyKruUC6cEyD2x",
];
test("Litecoin", async (t) => {
  for (const x of fixturesLTC) {
    t.is(await m(x), "LiteCoin");
  }
});
test("Litecoin with timeout", async (t) => {
  for (const x of fixturesLTC) {
    t.is(await m(x, { timeout: 3000 }), "LiteCoin");
  }
});

const fixturesDOGE = [
  "DANHz6EQVoWyZ9rER56DwTXHWUxfkv9k2o",
  "DDTtqnuZ5kfRT5qh2c7sNtqrJmV3iXYdGG",
  "DP5mjk9SEYtzhnhkkC24PEjxNtDN7JGRx3",
  "D8EyEfuNsfQ3root9R3ac54mMcLmoNBW6q",
  "DFN5b3Usara4aZAvhT6muXd3hR49d5zxio",
];
test("Dogecoin", async (t) => {
  for (const x of fixturesDOGE) {
    t.is(await m(x), "DogeCoin");
  }
});
test("Dogecoin with timeout", async (t) => {
  for (const x of fixturesDOGE) {
    t.is(await m(x, { timeout: 3000 }), "DogeCoin");
  }
});

const fixturesDASH = [
  "XbtvGzi2JgjYTbTqabUjSREWeovDxznoyh",
  "Xm9TJiJ7nWjme8K7iEPUGsC5JjYGzPk2QU",
  "Xe4q4hA2bXWuZHHDRPb3R72cpauDYEk8CP",
  "XvwKzdsn46psqy6WhZ2wfhRPyRkD6GL2BG",
  "XcKvX5SeAwPSfyiKBw6QKt6EnA9FtWvk1r",
];
test("Dash", async (t) => {
  for (const x of fixturesDASH) {
    t.is(await m(x), "Dash");
  }
});
test("Dash with timeout", async (t) => {
  for (const x of fixturesDASH) {
    t.is(await m(x, { timeout: 3000 }), "Dash");
  }
});

const fixturesNot = [
  "192.168.1.1,192.168.1.2,192.168.1.3",
  "k4m4/ethereum-regex",
  "0xsfdlffsjksldfj[IPv6:2001:db8::2]",
  "nikolaskam{at}gmail{dot}com",
];
test("Non-crypto", async (t) => {
  for (const x of fixturesNot) {
    t.is(await m(x), false);
  }
});
