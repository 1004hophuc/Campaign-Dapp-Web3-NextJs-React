import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  // Chúng ta đang ở trong browser và metamask running
  web3 = new Web3(window.web3.currentProvider);
} else {
  // Chúng ta đang ở trên server và user không sài metamask
  const provider = new Web3.providers.HttpProvider(
    'https://rinkeby.infura.io/v3/351afd2b0649462a93a5d4505a8a0ce1'
  )
  web3 = new Web3(provider);
}

export default web3;
