/**
 * Duel Fight Game - FINISHED
 * Date: 4/09/13

 Assignment 1
 Part 1/3 of series
*/

// self-executing function
(function(){

    //initiate the fight
    console.log("FIGHT!!!");

    //set player names Scorpion and Kane
    var playerOneName = "Scorpion";
    var playerTwoName = "Kane";

    //set player damage at 20 each
    var player1Damage = 20;
    var player2Damage = 20;

    //set start player health with 100 each
    var playerOneHealth = 100;
    var playerTwoHealth = 100;

    //initiate round, starting at round 0
    var round=0;

    //use a function to reduce health
    function fight(){

        //display player names along with initial health using the global variables playerOneName, playerTwoname, playerOneHealth, playerTwoHealth
        alert(playerOneName+":"+playerOneHealth+"  *START*  "+playerTwoName+":"+playerTwoHealth);

        //run this program as long as i is less than 10
        //i++ advances to the next round
        //once 10 is reached code ends, game is over
        for (var i = 0; i < 10; i++)
        {
            //random formula is - Math.floor(Math.random() * (max - min) + min);
            //using a random number generator, calculate the damage each player will take
            //round the number down
            var minDamage1 = player1Damage * .5;
            var minDamage2 = player2Damage * .5;
            //using a random number generator, calculate the damage each player will take
            //round the number down
            var f1 = Math.floor(Math.random()*(player1Damage-minDamage1)+minDamage1);
            var f2 = Math.floor(Math.random()*(player2Damage-minDamage2)+minDamage2);

            //inflict damage
            //subtract the damage from the player's original health to create new health
            //each time the function runs it will use the new health that has been created
            playerOneHealth-=f1;
            playerTwoHealth-=f2;

            //displays new health of each player in the console
            console.log(playerOneName+": "+playerOneHealth + " " + playerTwoName+":"+playerTwoHealth);

            //check for victor
            //setting a variable for result to use in the winnrCheck fucntion
            var result = winnerCheck();

            //if there is no winner, advance to next round
            console.log(result);
            if (result==="no winner")
            {
                round++;

                //display that the completed round is over along with player's names and their healths
                alert(playerOneName+":"+playerOneHealth+"  *ROUND "+round+" OVER"+"*  "+playerTwoName+":"+playerTwoHealth);

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
        if (playerOneHealth<1 && playerTwoHealth<1)
        {
            result = "You Both Die";
        } else if(playerOneHealth<1){
            result =playerTwoName+" WINS!!!"
        } else if (playerTwoHealth<1)
        {
            result = playerOneName+" WINS!!!"
        };
       return result;
    };

    /*******  The program gets started below *******/
    //call the fight funtion to play the game
    fight();

})();