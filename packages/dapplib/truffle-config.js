require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict enter occur slab chaos note situate coin harvest derive tail strong'; 
let testAccounts = [
"0x5e3c91bf73a9d7056f9ecbd668cf7c2d935d1b91790925530bad05a8f9107973",
"0xbd5663407a1288d69382ea907eb7db9c0f91e05f85cd7450274b4ce8ac86b8a0",
"0xdad9e5092f3049f18914026afc6157b1700928ea2d54b4bf87e9e89f985934ff",
"0x27dfe456efa478d3014b148f00805a2b4be7f7d3ef833ef0112949c308246a64",
"0x4032cb5a513961ec9ae888b592cea586613ee09b0b300da374c1c0d303490812",
"0xaee0161078c6690e12619e23e167ccf36659efa961fb73a0ac193c4c20c7547e",
"0x4735b942f2c6375f86abc8c6314d2b3741fb0acc44d59d17c8522a7441b6a959",
"0x581c75ac93a0a6c21cd50abf0d280051f8bd1d9f90f9e081b0adedb4ef8e895a",
"0xc1d6102d5740b1cec18381603e76883adadf5bda551e508f3a22857267c5a06f",
"0x6cab48197665da888761ad26ac586ff28ba38a3b4649cc3d8be64075a31447e2"
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
