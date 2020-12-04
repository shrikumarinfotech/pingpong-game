/**
 * Name: PingPong Game
 * Description: Ping Pong game buit in JavaScript
 * Author: Shrikumar Infotech
 * License: GPLv2.0 or later
 * License Url: http://www.gnu.org/licenses/old-licenses/gpl-2.0.html
 */

'use strict';

// Define PingPong Functions
function pingPongGame(){
    // Define game elements
    const gameWrapper = document.getElementById('ping-pong-canvas');
    const plateUser = document.getElementById('plate-user');
    const plateAi = document.getElementById('plate-ai');
    const ball = document.getElementById('ping-pong-ball');

    // Define cuntion to determine left/right position
    function getPosition(){

        let parentElementPos = gameWrapper.getBoundingClientRect();
        console.log(parentElementPos);
        let plateUserPos = plateUser.getBoundingClientRect();
        let plateAiPos = plateAi.getBoundingClientRect();
        console.log(plateUserPos);
        // console.log(parentElementPos.right - plateUserPos.right + 67 - 640); // width of plate(65px) + 2px border - 640px parent width

        return {
            plateUserLeftPos: function(){
                return (plateUserPos.left);
            },
            plateUserRightPos: function(){
                return (plateUserPos.right);
            },
            plateAiLeftPos: function(){
                return (plateAiPos.left);
            },
            plateAiRightPos: function(){
                return (plateAiPos.right);
            }
        };
    };

    // Define function to move plateUser
    function movePlateUser(){
        // check current position
        // if left position is not 0 or right position is not 0
        // on left/right key press move left/right
        // console.log(getPosition().plateUserLeftPos());

        let moveLeft = (640 / 2) - (65 / 2);
        let moveRight = (640 / 2) - (65 / 2);
        
        document.addEventListener('keydown', function(event){
            console.log(event.code);
            // check for left/right arrow keydown
            // Left Arrow
            
            if(event.code === 'ArrowLeft'){

                // getPosition();

                console.log(getPosition().plateUserLeftPos());
                moveLeft--;
                plateUser.setAttribute('style', `left: ${moveLeft}px`);
                // if left position of plate is not 0 then stop move left
                if(getPosition().plateUserLeftPos() !== 0){
                    
                    // console.log(moveLeft);
                    //plateUser.setAttribute('style', `left: -${moveLeft}px`);
                }
            }
            // Right Arrow
            
            if(event.code === 'ArrowRight'){

                // getPosition();

                console.log(getPosition().plateUserLeftPos());
                moveRight++;
                plateUser.setAttribute('style', `left: ${moveRight}px`);
                // if right position is 0 them stop move right
                if(getPosition().plateUserRightPos() === 0){
                    
                    // console.log(moveRight);
                    //plateUser.setAttribute('style', `left: ${moveRight}px`);
                }
            }
        });
    }
    movePlateUser();
    
    // test log
    // console.log('this is from pingpong-v1.0.0.js');
};
pingPongGame();