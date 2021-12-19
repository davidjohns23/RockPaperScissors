import React from "react"



import RockPaperScissorGame from './rock-paper-scissor-game'

import "../index.css"

const RockPaperScissorPage = () => {

    return (
      
        <main className="rockpaperscissor-wrapper">
          <div id="intro" className="into content">
          <h2>AI Rock Paper Scissors Game</h2>
          <RockPaperScissorGame />
             <p><strong>Rock, paper, scissors</strong> is a legendary hand game that many of us played with friends in childhood.</p>
             <p>
                Rules are simple. You and your opponent choose one of three shapes (<span aria-label="rock figure" role="img">✊</span>, <span aria-label="paper figure" role="img">✋</span>, <span aria-label="scissors figure" role="img">✌️</span>), which you both form simultaneously.
                Your goal is to guess a shape that beats your opponent's choice:
              </p>
              <ul>
                <li>Rock beats Scissors (<span aria-label="rock figure" role="img">✊</span> → <span aria-label="beats scissors figure" role="img">✌️</span>)</li>
                <li>Paper covers Rock (<span aria-label="paper figure" role="img">✋</span> → <span aria-label="beats rock figure" role="img">✊</span>)</li>
                <li>Scissors cuts Paper (<span aria-label="scissors figure" role="img">✌️</span> → <span aria-label="beats paper figure" role="img">✋</span>)</li>
              </ul> 
              <p>
                Now you have a chance to try to play rock, paper, scissors in an AI-powered game online.
              </p>
              <h2>How Does it Work?</h2>
              <p>
                The game requests your web camera access and loads a computer vision model directly into your browser (the game is completely serverless). 
              </p>
              <p>
                When you press the play button, you have 3 seconds to form one of three choices and to show it on camera. 
                The model will try to predict what form you showed and compare it with another choice which computer simultaneously made with you.
                The game compares both choices and updates your scores.
              </p>


              <h2>Model Training</h2>
              <p>
                In order to get the game to work we needed to train a neural network to 
                recognize hand gestures. Initially we found a dataset from the tensorflow 
                library and trained a MobileNet model. However, we were not getting the desired 
                accuracy. This could be attributed to the original dataset only containing 3d rendered 
                images of hands with no background. By following a youtube tutorial, we were able 
                to run a simple python script to capture webcam images to better our dataset. 
                Additionally, we transitioned to using a SqueezeNet model and we obtained better results.
              </p>

              <div id="images">
                <img src="../images/rock_paper_scissors-3.0.0.png"></img>
                <img src="../images/test2.jpg"></img>
                <img src="../images/test3.jpg"></img>
              </div>

              <h2>Implementation</h2>
              <p>
                Initially we planned on using simple html, and css in conjunction with a flask application
                to implement our game. However we had issues with flask due to inexperience with the 
                technology. Instead we opted to use TensorFlow.js which allowed us to implement the model 
                directly to our webpage using javascript. In addition we built our webpage as a React app 
                in order to utilize preexisting libraries to build our game. 
              </p>

              <h2>Deployment</h2>
              <p>
                
              </p>

          </div>
          <div id="content-end" />
        </main>
    )
}

export default RockPaperScissorPage