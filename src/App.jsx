// Full React DApp: Blockchain Voting System
// Uses ethers.js + MetaMask

import { useEffect, useState } from "react";
import { ethers } from "ethers";

const contractAddress = "YOUR_CONTRACT_ADDRESS";

const abi = [
  "function vote(uint candidateIndex)",
  "function getCandidates() view returns (tuple(string name, uint voteCount)[])",
  "function hasVoted(address) view returns (bool)"
];

export default function App() {
  const [account, setAccount] = useState(null);
  const [candidates, setCandidates] = useState([]);
  const [hasVoted, setHasVoted] = useState(false);

  useEffect(() => {
    connectWallet();
  }, []);

  async function connectWallet() {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccount(accounts[0]);
      loadData(accounts[0]);
    } else {
      alert("Please install MetaMask");
    }
  }

  async function loadData(userAddress) {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const contract = new ethers.Contract(contractAddress, abi, provider);

    const data = await contract.getCandidates();
    setCandidates(data);

    const voted = await contract.hasVoted(userAddress);
    setHasVoted(voted);
  }

  async function vote(index) {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, abi, signer);

    const tx = await contract.vote(index);
    await tx.wait();

    alert("Vote Successful!");
    loadData(account);
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold mb-6">Blockchain Voting System</h1>

      <div className="mb-4">
        <p className="text-sm">Connected Account:</p>
        <p className="text-green-400">{account}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
        {candidates.map((c, index) => (
          <div
            key={index}
            className="bg-gray-800 p-4 rounded-2xl shadow-lg flex flex-col items-center"
          >
            <h2 className="text-xl font-semibold mb-2">{c.name}</h2>
            <p className="mb-4">Votes: {c.voteCount.toString()}</p>

            <button
              onClick={() => vote(index)}
              disabled={hasVoted}
              className={`px-4 py-2 rounded-xl ${
                hasVoted
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-blue-500 hover:bg-blue-600"
              }`}
            >
              {hasVoted ? "Already Voted" : "Vote"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

