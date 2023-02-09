window.addEventListener('DOMContentLoaded', () => {
let win;
let played=0
let turn="0"
let active=0
let k1;
let r1;
let p;
let tiles = Array.from(document.querySelectorAll('.square'));
const trn=(tile,i)=>
{
  if(active===0)
  {

  tile.classList.add(`player${turn}`);
  tile.innerHTML = turn; 
   win[i] = turn;
  
  turn = turn === "0" ? "X" : "0";
  checkwin();
  }
}
const pop=()=>
{
  active=1;
  played=1;
  p = document.querySelector('.end')
  p.classList.add('endgame');
  p.innerHTML=`Match tied!`
}
const popup=(k,r) =>
{
  active=1;
  played=1;
  k1=k;
  r1=r;
  l = document.getElementById('hye');
  l.classList.add(r);
  
  p = document.querySelector('.end')
  p.classList.add('endgame');
  p.innerHTML=`Player ${k} won!`
  // document.getElementById('btn').addEventListener("click",startgame)
}
const checkwin=()=>
{
  console.log(win[6],win[7],win[8])
  if(win[0]===win[4] && win[4]===win[8])
{
  if(win[0]==="0" || win[0]==="X")
  {
    popup(win[0],`line0`)
  }
return;
}
else
if(win[2]===win[4] && win[4]===win[6])
{
  if(win[2]==="0" || win[2]==="X")
  {
    popup(win[2],`line1`)
  }
return;
}
else
if(win[0]===win[1] && win[1]===win[2])
{
  if(win[0]==="0" || win[0]==="X")
  {
   popup(win[0], `line2`)
  }
 return;
}
else
if(win[6]===win[7] && win[6]===win[8])
{
  console.log("hye")
  if(win[6]==="0" || win[6]==="X")
  {
    
    popup(win[6], `line3`)
  }
  return;
 
}
else
if(win[3]===win[4] && win[4]===win[5])
{
  if(win[3]==="0"|| win[3]==="X")
  {
    popup(win[3], `line4`)
  }
 return; 
}
else 
if(win[1]===win[5] && win[7]===win[5])
{
  if(win[1]==="0" || win[1]==="X")
  {
    popup(win[1], `line5`)
  }
 return;
}

else if(win[0]==win[3] && win[3]==win[6])
{
  if(win[0]==="0"||  win[0]==="X")
  {
    popup(win[0], `line6`)
  }
 return;
}

else if(win[2]==win[5] && win[5]==win[8])
{
  
  if(win[2]==="0"||  win[2]==="X")
  {
    popup(win[2], `line7`)
  }
 return; 
}
else if (!win.includes(' '))
{
  pop();
  return
}

}
const startgame=()=>
{
  active =0;
  if(played===1)
  {
  p = document.querySelector('.end')
  l = document.getElementById('hye');
  l.classList.remove(r1);
  p.innerHTML=''
  p.classList.remove('endgame');
  }
  win = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
  played=1;
 
  tiles.forEach(tile => {
  tile.innerText = ' ';
  
    tile.classList.remove('playerO');
     tile.classList.remove('playerX');
    turn="0";

})
};

tiles.forEach( (tile, index) => {
  
tile.addEventListener('click', () => trn(tile,index));
});
 



document.getElementById('btn').addEventListener("click",startgame)})