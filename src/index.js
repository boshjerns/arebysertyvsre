// Import the Web3 library
import Web3 from "web3";

// Set the provider for web3
const web3 = new Web3(window.ethereum);

// Get the contract instance
const locationCheck = new web3.eth.Contract(
  process.env.LOCATION_CHECK_ABI,
  process.env.LOCATION_CHECK_ADDRESS
);


// Connect to MetaMask and check the user's geolocation
const connectButton = document.getElementById("connect-button");
connectButton.addEventListener("click", async () => {
  // Check if the user is connected to MetaMask
  if (!web3.currentProvider.isConnected()) {
    alert("Please connect to MetaMask and try again.");
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
  const geolocationMessage = document.getElementById("geolocation-message");
  if (isValidLocation) {
    geolocationMessage.innerHTML = "Your location is valid.";
  } else {
    geolocationMessage.innerHTML = "Sorry, your location is not valid.";
  }
});
