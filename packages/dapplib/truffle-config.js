require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good enter bottom solution finger deliver remain comic gloom clinic brown spread'; 
let testAccounts = [
"0xe1d82dca662537ea68a8d28d31407d4f524adc41981b69bec15f8dee3ca2ff58",
"0x9638ba74041a5c0a74d529f02365fc1b60a4050deee8b2c00b1c113f29bfb792",
"0xd97fc426bac31a4ac1926049e4ccdce082712ee104866df43e5d167b4b4a3e81",
"0xceb9a08e8ce96b759137b6da51d9769d8f79e15ccf129d6862ee6fd942916b24",
"0x81b20fe3e27bf3d0ef46afb913ddb534faa6f0be34adb948c8817aa6e245ef9a",
"0xb0ba42a0f940b3eb9e1688971041ef2a703e249c39e3a9ac2d7dc961507f947e",
"0x377b59f75f93c2b3349b0be26c1c9665a869cba22ca37d15a9dd2a265fcacab9",
"0x198bfd93c817f8538e47166f66f24e9145b0aa0be29bea1a7f3f78e1c329a15e",
"0xd34663ecfeb1b5efbf3814291b0a0a818518179826dee67bea834b84909fd55d",
"0x09954a3838793b94768aca7e7f903235b3c2d71dcae04ec08f8601be1ea35284"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
