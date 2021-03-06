const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const { ethers } = require('ethers');

// Change the path to your API && bytecode
const { ABI, bytecode } = require('../dummyABI'); 

const provider = new ethers.providers.JsonRpcProvider(process.env.NODE_ENDPOINT);
const wallet = new ethers.Wallet(process.env.PRIV_KEY, provider);

const contractFactory = new ethers.ContractFactory(ABI, bytecode, wallet);
contractFactory.deploy()
  .then((res) => console.log(res.address))
  .catch((err) => console.error(err));
