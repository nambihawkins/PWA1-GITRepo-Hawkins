/**
 * Nambi Hawkins
 * Duel Fight Game - FINISHED
 * Date: 11/04/15

 Assignment 1
 Part 1/3 of series
*/

// self-executing function
(function(){

    //initiate the fight
    console.log("FIGHT!!!");

    //set player names Scorpion and Kane
    //set player damage at 20 each
    //set start player health with 100 each
    var playerOne = ['Scorpion', 20, 100],
        playerTwo = ['Kane', 20, 100];

    //initiate round, starting at round 0
    var round=0;

    //use a function to reduce health
    function fight(){

        //display player names along with initial health using the global variables playerOneName, playerTwoname, playerOneHealth, playerTwoHealth
        alert(playerOne[0]+":"+playerOne[2]+"  *START*  "+playerTwo[0]+":"+playerTwo[2]);

        //run this program as long as i is less than 10
        //i++ advances to the next round
        //once 10 is reached code ends, game is over
        for (var i = 0; i < 10; i++)
        {
            //random formula is - Math.floor(Math.random() * (max - min) + min);
            //using a random number generator, calculate the damage each player will take
            //round the number down
            var minDamage1 = playerOne[1] * .5;
            var minDamage2 = playerTwo[1] * .5;
            //using a random number generator, calculate the damage each player will take
            //round the number down
            var f1 = Math.floor(Math.random()*(playerOne[1]-minDamage1)+minDamage1);
            var f2 = Math.floor(Math.random()*(playerTwo[1]-minDamage2)+minDamage2);

            //inflict damage
            //subtract the damage from the player's original health to create new health
            //each time the function runs it will use the new health that has been created
            playerOne[2]-=f1;
            playerTwo[2]-=f2;

            //displays new health of each player in the console
            console.log(playerOne[0]+": "+playerOne[2] + " " + playerTwo[0]+":"+playerTwo[2]);

            //check for victor
            //setting a variable for result to use in the winnrCheck fucntion
            var result = winnerCheck();

            //if there is no winner, advance to next round
            console.log(result);
            if (result==="no winner")
            {
                round++;

                //display that the completed round is over along with player's names and their healths
                alert(playerOne[0]+":"+playerOne[2]+"  *ROUND "+round+" OVER"+"*  "+playerTwo[0]+":"+playerTwo[2]);

            //if there is a winner display the winner results
            } else{
                alert(result);

                //exit out of loop before 10 rounds is completed if there is no winner declared
                break;
            };

          };
    };

    //use function to assess points and determine winner
    //if player 1's health and player 2's health is less than 1 then there is no winner, both players die and the program stops
    //if player 1's health is less than 1, player 2 wins
    //if player 2's health is less than 1, player 1 wins
    function winnerCheck(){
        var result="no winner";
        if (playerOne[2]<1 && playerTwo[2]<1)
        {
            result = "You Both Die";
        } else if(playerOne[2]<1){
            result =playerTwo[0]+" WINS!!!"
        } else if (playerTwo[2]<1)
        {
            result = playerOne[1]+" WINS!!!"
        };
       return result;
    };

    /*******  The program gets started below *******/
    //call the fight funtion to play the game
    fight();

})();