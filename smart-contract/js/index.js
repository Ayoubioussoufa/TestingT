// import { abi, contractAddress } from "./constants.js"
import Web3 from 'web3';

// connectButton.onclick = connect

// Create a new Web3 instance with the provider of your choice
// const web3 = new Web3('https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID');
//Replace 'https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID' with the URL of your preferred Ethereum node provider, such as Infura, Alchemy, or your own local no

// async function connect() {
//     const provider = new Web3.providers.HttpProvider("HTTP://127.0.0.1:8545"); // connected to our blockchain
//     const web3 = new Web3(provider);
//     console.log(web3);

//     // to fetch the account addresses
//     const accounts = await web3.eth.getAccounts();
//     console.log(accounts[0]);

//     // to fetch the account address balance
//     const balance = await web3.eth.getBalance(accounts[0]);
//     console.log(balance);

//     // to convert our balance to ether
//     const balanceEther = web3.utils.fromWei(balance, "ether");
//     console.log(balanceEther);


// }

// connect();

async function fromSmartContract() {
    const provider = new Web3.providers.HttpProvider("HTTP://127.0.0.1:8545"); // connected to our blockchain
    const web3 = new Web3(provider);
}