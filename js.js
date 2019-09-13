
var scores,roundScore,activePlayer,gamePlaying,get; 

init();




document.querySelector('.btn-roll').addEventListener('click',function(){
     if(gamePlaying)
     {
           var dice=Math.floor(Math.random()*6)+1;

     var diceDOM= document.querySelector('.dice');
     diceDOM.style.display='block';
     diceDOM.src='dice-'+ dice + '.png';
     document.querySelector('#current-'+ activePlayer).textContent=dice;
     if(dice!==1){
       
         roundScore+=dice;
         document.querySelector('#current-'+ activePlayer).textContent=roundScore;


     }
     else{
     	// ternary operator....instead of if else .....
       //activePlayer===0 ?activePlayer=1 : activePlayer=0;
      // roundScore=0;
      nextPlayer();

      }

     }else{
     	
     }
     
});

document.querySelector('.btn-hold').addEventListener('click',function(){
    if(gamePlaying)
    {   
    	scores[activePlayer] +=roundScore;
    document.querySelector('#score-'+ activePlayer).textContent=scores[activePlayer];
    // winner function

    if(scores[activePlayer]>=get){
    	document.querySelector('#name-'+ activePlayer).textContent='Winner !!';
    	document.querySelector('.dice').style.display='none';
    	document.querySelector('.player-'+ activePlayer +'-panel').classList.add('Winner');
    	document.querySelector('.player-'+ activePlayer +'-panel').classList.remove('active');
    	gamePlaying=false;
    }else{
       nextPlayer();
    }

    }
    
    


    


});

function nextPlayer(){
       if(activePlayer===0){
            activePlayer=1;

      }else{
      	activePlayer=0
      };
      
      roundScore=0;  
      document.getElementById('current-0').textContent='0';
      document.getElementById('current-1').textContent='0';
      
      document.querySelector('.player-0-panel').classList.toggle('active');
      document.querySelector('.player-1-panel').classList.toggle('active');

     // document.querySelector('.player-0-panel').classList.remove('active');
      //document.querySelector('.player-1-panel').classList.add('active');
      document.querySelector('.dice').style.display='none'; 

}

document.querySelector('.btn-new').addEventListener('click',function(){

      init();


});

function  init(){
    scores=[0,0];
    roundScore=0;
    activePlayer=0;
    gamePlaying=true;
    get=prompt(" Set Targetting Score --- ");

    document.querySelector('.dice').style.display='none';

     document.getElementById('score-0').textContent='0';
    document.getElementById('score-1').textContent='0';
    document.getElementById('current-0').textContent='0';
      document.getElementById('current-1').textContent='0';
      document.querySelector('#name-0').textContent='Player 1';
      document.querySelector('#name-1').textContent='Player 2';
      document.querySelector('.player-0-panel').classList.remove('Winner');
      document.querySelector('.player-1-panel').classList.remove('Winner');
      document.querySelector('.player-0-panel').classList.remove('active');
      document.querySelector('.player-1-panel').classList.remove('active');
      document.querySelector('.player-0-panel').classList.add('active');
  
}