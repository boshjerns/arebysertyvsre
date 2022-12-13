import React from "react";
import { useGeolocation } from "react-use";
import LocationCheckContract from "./LocationCheck.sol";

const App = () => {
  // get the user's current location, or an error if it fails
  const { latitude, longitude, error } = useGeolocation();

  // parse the necessary arguments for the LocationCheck contract
  const locationArgs = [latitude, longitude];

  return (
    <div>
      /* render an error message if there is an error getting the user's location */
      {error && <p>Error: {error.message}</p>}

      /* render the user's current location */
      <p>Your current location: {latitude}, {longitude}</p>

      /* call the checkLocation function of the LocationCheck contract using the parsed arguments */
      {LocationCheckContract.checkLocation(...locationArgs)}
        {(result) => {
          return (
            <p>
              You are {result ? "" : "not "}within range of the target location.
            </p>
          );
        }}
      {LocationCheckContract.checkLocation}
    </div>
  );
};

export default App;
