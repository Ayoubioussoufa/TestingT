// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

contract TournamentManager {
    event scoresUpdated(uint8 tournamentId, address player, uint wins, uint losses);

    struct PlayerScores {
        uint8 wins;
        uint8 losses;
    }

    struct Tournament {
        uint8 id;
        string name;
        bool isOpen;
    }

    mapping(uint tournamentId => mapping(address => PlayerScores)) playerScores;

    Tournament[] public tournament;

    function createTournament(uint8 _tournamentId, string memory _name) public {
        tournament.push(Tournament(_tournamentId, _name, true));
    }

    function registerForTournament(uint8 _tournamentId, string memory _name, address player) public {
        require(tournament[_tournamentId].isOpen == true, "Tournament is not Open yet to register");
        
    }

    function playerWon(uint8 _tournamentId, address player) public {
        playerScores[_tournamentId][player].wins++;
        emit scoresUpdated(_tournamentId, player, playerScores[_tournamentId][player].wins, playerScores[_tournamentId][player].losses);
    }

    function playerLoss(uint8 _tournamentId, address player) public {
        playerScores[_tournamentId][player].losses++;
        emit scoresUpdated(_tournamentId, player, playerScores[_tournamentId][player].wins, playerScores[_tournamentId][player].losses);
    }
}