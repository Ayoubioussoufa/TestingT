// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

contract TournamentManager {
    // events
    event scoresUpdated(int8 tournamentId, address player, uint wins, uint losses);
    event tournamentCreated();
    event playerRegistred(int8 indexed _tournamentId, address indexed player);

    // player Struct
    struct PlayerScores {
        uint8 wins;
        uint8 losses;
    }

    // tournament Struct
    struct Tournament {
        int8 id;
        bool isOpen;
    }

    // mapping TournamentId and the addresses of players registred
    mapping(int8 tournamentId => address[]) public playersRegistred;

    // mapping tournament id and the player's scores in that specific tournament
    mapping(int8 tournamentId => mapping(address => PlayerScores)) playerScores;

    // array of tournaments
    Tournament[] public tournament;

    int8 public tournamentId = -1;

    // create tournament
    function createTournament() public {
        tournamentId++;
        tournament.push(Tournament(tournamentId, true));
        emit tournamentCreated();
    }

    // addp players to the tournament
    function registerForTournament(address player) public {
        require(tournament[uint8(tournamentId)].isOpen == true, "Tournament is not open yet");
        playersRegistred[tournamentId].push(msg.sender);
        emit playerRegistred(tournamentId, player);
    }

    // when player won a match
    function playerWon(address player) public {
        playerScores[tournamentId][player].wins++;
        emit scoresUpdated(tournamentId, player, playerScores[tournamentId][player].wins, playerScores[tournamentId][player].losses);
    }

    // when player loses a match
    function playerLoss(address player) public {
        playerScores[tournamentId][player].losses++;
        emit scoresUpdated(tournamentId, player, playerScores[tournamentId][player].wins, playerScores[tournamentId][player].losses);
    }

    // player's score in a certain tournament
    function getPlayerScore(int8 _tournamentId, address player) public view returns (uint8 wins, uint8 losses){
        return (playerScores[_tournamentId][player].wins, playerScores[_tournamentId][player].losses);
    }

    // all players registred in a tournament
    function getNumberOfPlayersRegistred(int8 _tournamentId) public view returns (uint) {
        return playersRegistred[_tournamentId].length;
    }

    // get all player addresses, their wins and losses in that specific tournament
    function getTournamentAllData(int8 _tournamentId) public view returns (address[] memory players, uint256[] memory wins, uint256[] memory losses) {
        mapping(address => PlayerScores) storage scores = playerScores[_tournamentId];

        uint length = getNumberOfPlayersRegistred(_tournamentId);

        players = new address[](length);
        wins = new uint[](length);
        losses = new uint[](length);

        uint8 index = 0;
        for (index; index < length;) {
            address playerAddr = playersRegistred[_tournamentId][index];
            players[index] = playerAddr;
            wins[index] = scores[playerAddr].wins;
            losses[index] = scores[playerAddr].losses;
            index++;
        }

        return (players, wins, losses);
    }

    // getting all the player's wins
    function getPlayerAllWinsCumulated(address player) public view returns(uint256 wins) {
        for (int8 index = 0; index <= tournamentId; index++) {
            wins += playerScores[index][player].wins;
        }
    }

    // getting all the player's losses
    function getPlayerAllLossesCumulated(address player) public view returns(uint256 losses) {
        for (int8 index = 0; index <= tournamentId; index++) {
            losses += playerScores[index][player].losses;
        }
    }
}