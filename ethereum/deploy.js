const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');

const provider = new HDWalletProvider(
  'stamp dream better drastic churn grass trash monkey quality mixed satisfy horn',
  'https://rinkeby.infura.io/v3/351afd2b0649462a93a5d4505a8a0ce1'
)

const web3 = new Web3(provider);

let result;

const deploy = async () => {
  const accounts = await new web3.eth.getAccounts();

  console.log("Deploy from: ", accounts[0])

    result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
      .deploy({ data: '0x' + compiledFactory.bytecode })
      .send({ from: accounts[0] });

    console.log('Contract deploy to: ', result.options.address);
};

deploy();
