import styles from '../styles/Web3.module.css';
import { useState } from "react";
import { ethers } from 'ethers';



const ContactCode = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [signer, setSigner] = useState();

  async function ConnectToWeb3() {
    if (typeof window.ethereum !== "undefined") {
      try {
        await ethereum.request({ method: "eth_requestAccounts" });
        setIsConnected(true);
        let connectedProvider = new ethers.providers.Web3Provider(
          window.ethereum
        )
        setSigner(connectedProvider.getSigner())
      } catch (e) {
        console.log(e);
      }
    } else {
      setIsConnected(false)
    }
  }

  async function execute() {
    if (typeof window.ethereum !== "undefined") {

      const contractAddress = "0x8d40136Ca3bF55C79d20CEA0D1ACA2F2a584E567"
      const abi = [{ "inputs": [{ "internalType": "address", "name": "_priceFeed", "type": "address" }], "stateMutability": "nonpayable", "type": "constructor" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "addressToAmountFunded", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "fund", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "funders", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "ethAmount", "type": "uint256" }], "name": "getConversionRate", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getEntranceFee", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getPrice", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getVersion", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "priceFeed", "outputs": [{ "internalType": "contract AggregatorV3Interface", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "withdraw", "outputs": [], "stateMutability": "payable", "type": "function" }]
      const contract = new ethers.Contract(contractAddress, abi, signer)

      try {
        await contract.fund()
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>// SPDX-License-Identifier: MIT</span> &#123;
      </p>
      {isConnected ? (<>"Connected!" <button onClick={() => execute()}>Execute</button></>) : <p onClick={(() => ConnectToWeb3())} >Connect to Web3!</p>}

      <p className={styles.line}>&#125;</p>

    </div >
  );
};





export async function getStaticProps() {
  return {
    props: { title: 'Contact' },
  };
}

export default ContactCode;
