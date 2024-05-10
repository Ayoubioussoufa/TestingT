import { abi, contractAddress } from "./constants.js";
// import { Alchemy, Network, Wallet, Utils } from "alchemy-sdk";
import Web3 from 'web3';

// import ganache from 'ganache';
// const Web3 = require("web3");
// const ganache = require("ganache");

let connectButton = document.getElementById('btn');
let createTournament = document.getElementById('createTournament');
let register = document.getElementById('register');
// const alchemyWeb3 = createAlchemyWeb3("https://eth-sepolia.alchemyapi.io/v2/oox3rnLcR1MwEjduwOmOsXVGb2pawXso");

const provider = "https://sepolia.infura.io/v3/6483579a38ee4626b9a67d15ca7fef2d";
const web3Provider = new Web3.providers.HttpProvider(provider);
const web3 = new Web3(web3Provider);
const contract = new web3.eth.Contract(abi, contractAddress);
let accounts;
const accountFrom = {
  privateKey: '0x08fdb79d0797a2f3be23e65c04b7ea373873132a8b0c1952298ebd103dafa656',
  address: '0xc70Cd98fcB36cCfE70a571bB9A646FBF479e177A',
};
connectButton.onclick = connect
createTournament.onclick = createTournaments

async function createTournaments() {
  let creationTx = await contract.methods.createTournament();
  console.log(
    `Calling the function by ${accounts[0]} function in contract at address: ${contractAddress}`
  );
  console.log(creationTx);
  const createTransaction = await web3.eth.accounts.signTransaction(
    {
      to: contractAddress,
      data: creationTx.encodeABI(),
      gas: await creationTx.estimateGas(),
      gasPrice: await web3.eth.getGasPrice(),
      nonce: await web3.eth.getTransactionCount(accountFrom.address),
    },
    accountFrom.privateKey
  );
  const createReceipt = await web3.eth.sendSignedTransaction(
    createTransaction.rawTransaction
  );
  console.log(`Tx successful with hash: ${createReceipt.transactionHash}`);
}
// register.onclick = register
// Create a new Web3 instance with the provider of your choice
// const web3 = new Web3('https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID');
//Replace 'https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID' with the URL of your preferred Ethereum node provider, such as Infura, Alchemy, or your own local no

async function connect() {
    if (typeof window.ethereum !== "undefined") {
      try {
        await ethereum.request({ method: "eth_requestAccounts" })
      } catch (error) {
        console.log(error)
      }
      connectButton.innerHTML = "Connected"
      accounts = await ethereum.request({ method: "eth_accounts" })
      console.log(accounts[0])
    } else {
      connectButton.innerHTML = "Please install MetaMask"
    }
}

// async function createTournaments() {
//     await contract.methods.createTournament().send({from: accounts[0]})
//       .then((data) => {
//         console.log("Success:", data);
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//       });
    // contract.methods.tournamentId().call().then(console.log);
    // .on('transactionHash', function(hash){
    //   console.log('Transaction Hash:', hash);
    // })
    // .on('receipt', function(receipt){
    //   console.log('Receipt:', receipt);
    // })
    // .on('error', function(error){
    //   console.error('Error calling createTournament:', error);
    // });
    // .then(data => {
    //     console.log("Tournament Created");
    //     createTournament.innerHTML = "Tournament Created";
    // })
    // .catch(error => {
    //     console.log("Tournament was not created");
    // });
// }

// async function createTournaments() {
//   const functionName = 'createTournament';
//   const encodedData = contract.methods[functionName].encodeABI;
//   try {
//       const response = await fetch('https://eth-sepolia.g.alchemy.com/v2/oox3rnLcR1MwEjduwOmOsXVGb2pawXso');

//       if (!response.ok) {
//           throw new Error('Failed to send transaction');
//       }

//       const data = await response.json();
//       console.log("Success:", data);
//   } catch (error) {
//       console.error("Error:", error);
//   }
// }

// async function register() {
    
// }

// connect();

// async function fromSmartContract() {
//     // const provider = new Web3.providers.HttpProvider("HTTP://127.0.0.1:8545"); // connected to our blockchain
//     // const web3 = new Web3(provider);
//     // or
//     // const web3 = new Web3("wss://eth-sepolia.g.alchemy.com/v2/oox3rnLcR1MwEjduwOmOsXVGb2pawXso");
//     // const contract = new web3.eth.Contract(abi, contractAddress);
//     // const account = web3.eth.accounts.wallet.add('0x08fdb79d0797a2f3be23e65c04b7ea373873132a8b0c1952298ebd103dafa656');
//     // console.log(account[0].address);
//     // console.log(account[0].privateKey);
//     // const walletAddress = account[0].address;
//     // web3.eth.getBalance(walletAddress)
//     //     .then(balance => {
//     //       console.log('Wallet Address:', walletAddress);
//     //       console.log('Balance:', web3.utils.fromWei(balance, 'ether'), 'ETH');
//     //     })
//     //     .catch(error => {
//     //       console.error('Error:', error);
//     //     });
//     await contract.methods.createTournament().send({ from: '0xc70Cd98fcB36cCfE70a571bB9A646FBF479e177A' })
//         .on('transactionHash', function(hash){
//           console.log('Transaction Hash:', hash);
//         })
//         .on('receipt', function(receipt){
//           console.log('Receipt:', receipt);
//         })
//         .on('error', function(error){
//           console.error('Error calling createTournament:', error);
//         });
//     console.log(contract);
//     contract.methods.tournamentId().call().then(console.log);
//     // const tournId = await contract.methods.tournamentId().call();
//     // console.log("Tournament Id: ", tournId);
//     // await contract.methods.registerForTournament('0xF140580EABcDc1599c3200b4D6Bf85cB43fBaD3E').send({from: '0xc70Cd98fcB36cCfE70a571bB9A646FBF479e177A'})
//     //     .on('transactionHash', function(hash){
//     //           console.log('Transaction Hash:', hash);
//     //         })
//     //         .on('receipt', function(receipt){
//     //           console.log('Receipt:', receipt);
//     //         })
//     //         .on('error', function(error){
//     //           console.error('Error calling createTournament:', error);
//     //         });
//     // const playersRegistred = await contract.methods.getNumberOfPlayersRegistred(tournId).call();
//     // console.log("Players Registred: ", playersRegistred);
//     // const sub = contract.events.methods.createTournament()
//     // sub.on("data", console.log);
//     // contract.methods.createTournament().call((error, result) => {
//     //     if (error) {
//     //         console.error('Error calling myFunction:', error);
//     //       } else {
//     //         console.log('Result of myFunction:', result);
//     //       }
//     // });
//     // console.log(data);
//     // console.log(contract.methods.tournamentId());
//     // console.log(tournamentId);
//     //create random wallet with 1 account
// }

// fromSmartContract()