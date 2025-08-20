import { useState } from 'react';
import { ethers } from 'ethers';

const EthereumWallet = () => {
  const [wallet, setWallet] = useState(null);

  // Create a new wallet
  const createWallet = () => {
    const newWallet = ethers.Wallet.createRandom();
    setWallet(newWallet);
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Ethereum Wallet Generator</h1>
      <button onClick={createWallet} style={{ marginBottom: '10px' }}>
        Create New Wallet
      </button>

      {wallet && (
        <div>
          <h3>Mnemonic: {wallet.mnemonic.phrase}</h3>
          <h3>Private Key: {wallet.privateKey}</h3>
          <h3>Address: {wallet.address}</h3>
        </div>
      )}
    </div>
  );
};

export default EthereumWallet;
