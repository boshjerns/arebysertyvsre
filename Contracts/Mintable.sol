// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "https://github.com/OpenZeppelin/openzeppelin-solidity/contracts/token/ERC721/ERC721.sol";
import "./LocationCheck.sol";

contract Mintable is ERC721 {
    // contract for checking user's location
    LocationCheck locationCheck;

    // constructor for setting the location check contract
    constructor(address _locationCheckContract) public {
        locationCheck = LocationCheck(_locationCheckContract);
    }

    // mint a new NFT
    function mint(uint256 _tokenId, int256 _userLat, int256 _userLng) public {
        // check if the user's location is within the specified range
        if (locationCheck.checkLocation(_userLat, _userLng)) {
            // mint the NFT
            // ...
        } else {
            // throw an error if the user is not within the specified range
            revert("Sorry, you are not within range of the target location.");
        }
    }

    // other NFT functions (e.g. ownerOf, transfer)
    // ...
}
