const p1 = {
  display: document.querySelector("#p1display"),
  score: 0,
  button: document.querySelector("#p1button")
}
const p2 = {
  display: document.querySelector("#p2display"),
  score: 0,
  button: document.querySelector("#p2button")
}
const resetbutton = document.querySelector("#reset");
const playTo = document.querySelector('#playto');
let winningScore = 3;
let isGameOver = false;
function startGame(player,opponent)
{
  if(!isGameOver)
  {
      player.score+=1;
      player.display.innerText = player.score;
      if(player.score >= winningScore && player.score-opponent.score > 1)
      {
        isGameOver = true;
        player.display.classList.add('winner');
        opponent.display.classList.add('loser');
        player.button.disabled = true;
        opponent.button.disabled = true;
      }
  }
}
p1.button.addEventListener('click',function(e){
  startGame(p1,p2);
});
p2.button.addEventListener('click',function(e){
  startGame(p2,p1);
});
playTo.addEventListener('change',function(e){
  winningScore = parseInt(this.value);
  reset();
});
resetbutton.addEventListener('click',reset);
function reset()
{
  isGameOver = false;
  for(let p of [p1,p2])
  {
    p.score = 0;
    p.display.innerText = 0;
    p.button.disabled = false;
    p.display.classList.remove('winner','loser');
  }
}