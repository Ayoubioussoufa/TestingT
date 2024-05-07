// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

contract PlayerRecords {
    struct PlayerScores {
        uint8 wins;
        uint8 losses;
    }

    mapping(address => PlayerScores) records;

    function playerWin(address player) public {
        records[player].wins++;
    }

    function playerLoss(address player) public {
        records[player].losses++;
    }

    function getPlayerScores(address player) public view returns(uint8 wins, uint8 losses) {
        return (records[player].wins, records[player].losses);
    }
}
