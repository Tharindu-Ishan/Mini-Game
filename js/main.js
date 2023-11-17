const divElm=document.querySelector('div');
divElm.style.top=`${innerHeight-divElm.offsetHeight-100}px`;
divElm.style.backgroundSize='cover';

let run=false;
let jump=false;
let dx=0;
let dy=0;
addEventListener('keydown',(e)=>{
    if(e.key==='ArrowRight'){
        run=true;
        dx=10;
    }
   
});
addEventListener('keydown',(e)=>{
    if(e.key==='ArrowUp'){
        jump=true;
        dy=100;
    }
});
addEventListener('keyup',(e)=>{
    if(e.key==='ArrowRight'||e.key=='ArrowUp'){
        run=false;
        jump=false;
        dx=0;
    }
});
let index=0;
function renderDino(){
    if(run){
        if(index>8) index=1;
        divElm.style.backgroundImage=`url('dino/Walk (${index++}).png')`;

    }
    else if(jump){
        if(index>12) index=1;
        divElm.style.backgroundImage=`url('dino/Jump (${index++}).png')`;

    }
    else{
        if(index>10) index=1;
        divElm.style.backgroundImage=`url('dino/Idle (${index++}).png')`;
    }

}
function handleJump(){
    if(jump){
        divElm.style.top=`${divElm.offsetTop-dy}px`
    }
}
function handleJump2(){
    if(jump){
        divElm.style.top=`${divElm.offsetTop+dy}px`
    }
}
setInterval(renderDino,1000/21);
setInterval(handleJump,50);
setInterval(handleJump2,50);

let backgroundImagePositionX=0;

function moveBackground(){

    if(run){

        backgroundImagePositionX-=20;
        document.querySelector('body').style.backgroundPositionX=backgroundImagePositionX+'px'
    }
    }
setInterval(moveBackground,50);