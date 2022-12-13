import React from 'react';

// Import the geolocation utility
import { getGeolocation } from './geolocation';

// Import the LocationCheck contract
import LocationCheck from './contracts/LocationCheck.sol';

// Set the provider for web3
const web3 = new Web3(window.web3.currentProvider);

// Get the contract instance
const locationCheck = new web3.eth.Contract(LocationCheck.abi, LocationCheck.address);

// ConnectButton component
const connectButton = () => {
  const handleConnectClick = async () => {
    // Check if the user is connected to MetaMask
    if (!web3.currentProvider.isConnected()) {
      alert('Please connect to MetaMask and try again.');
      return;
    }

    // Get the user's geolocation
    const geolocation = await getGeolocation();
    const { latitude, longitude } = geolocation;

    // Call the LocationCheck contract to check the user's location
    const isValidLocation = await locationCheck.methods
      .checkLocation(latitude, longitude)
      .call();

    // Display a message based on the result of the location check
    const geolocationMessage = document.getElementById('geolocation-message');
    if (isValidLocation) {
      geolocationMessage.innerHTML = 'Your location is valid.';
    } else {
      geolocationMessage.innerHTML = 'Sorry, your location is not valid.';
    }
  };

  return (
    <button id="connect-button" onClick={handleConnectClick}>
      Connect
    </button>
  );
};

export default connectButton;
