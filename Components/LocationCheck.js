import React from "react";
import { useGeolocation } from "react-use";
import LocationCheckContract from "./LocationCheck.sol";

const LocationCheck = () => {
  const { latitude, longitude } = useGeolocation();
  const locationArgs = [latitude, longitude];

  return (
    <div>
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

export default LocationCheck;
