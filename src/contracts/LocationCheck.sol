// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract LocationCheck {
    // latitude and longitude of the target location
    int256 targetLat;
    int256 targetLng;
    
    // range in meters that the user's location must be within
    int256 range;

    // set the target location and range
    function setTargetLocation(int256 _targetLat, int256 _targetLng, int256 _range) public {
        targetLat = _targetLat;
        targetLng = _targetLng;
        range = _range;
    }

    // check if a user's location is within the specified range of the target location
    function checkLocation(int256 _userLat, int256 _userLng) public view returns (bool) {
        // calculate the distance between the user's location and the target location
        int256 latDiff = _userLat - targetLat;
        int256 lngDiff = _userLng - targetLng;
        int256 distance = ((latDiff * latDiff + lngDiff * lngDiff)*(latDiff * latDiff + lngDiff * lngDiff));

        // return whether the distance is within the specified range
        return distance <= range;
    }
}
