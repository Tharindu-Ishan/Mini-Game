const divElm=document.querySelector('div');
divElm.style.top=`${innerHeight-divElm.offsetHeight-100}px`;
divElm.style.backgroundSize='cover';

let run=true;
let jump=false;
let dx=0;
let dy=0;
addEventListener('keydown',(e)=>{
    // if(e.key==='ArrowRight'){
    //     run=true;
    //     dx=10;
    // }
   
});
addEventListener('keydown',(e)=>{
    if(e.key==='ArrowUp'){
        jump=true;
        dy=100;
    }
});
addEventListener('keyup',(e)=>{
    if(e.key==='ArrowRight'||e.key=='ArrowUp'){
        // run=false;
        // jump=false;
        dx=0;
    }
});
let index=1;
function renderDino(){
    if(run){
        if(index>8) index=1;
        divElm.style.backgroundImage=`url('dino/Walk (${index++}).png')`;

    }
    // else if(jump){

    //     if(index>12) index=1;
    //     divElm.style.backgroundImage=`url('dino/Jump (${index++}).png')`;

    // }
    // else{
    //     if(index>10) index=1;
    //     divElm.style.backgroundImage=`url('dino/Idle (${index++}).png')`;
    // }

}
function runDino(){
     if(jump){
        clearInterval(renderDino);
        if(index>12) index=1;
        divElm.style.backgroundImage=`url('dino/Jump (${index++}).png')`;


    }
}


let backgroundImagePositionX=0;
let dinoTop=`${innerHeight-divElm.offsetHeight-100}`;
console.log(dinoTop);

function moveBackground(){
    
    if(run){
        
        backgroundImagePositionX-=20;
        document.querySelector('body').style.backgroundPositionX=backgroundImagePositionX+'px'
    }
}
let i=true;
function jumpRino(){
    if(jump){
        

        if(dinoTop>0 && i){

            dinoTop-=20;
            console.log(dinoTop);
            divElm.style.top=dinoTop+'px';
        }else{
            i=false;
            dinoTop+=20;
            divElm.style.top=dinoTop+'px';
            if(dinoTop===369) {
                jump=false;
                i=true;
            }
        }
    }
}

setInterval(renderDino,100);
setInterval(runDino,100);
setInterval(moveBackground,50);
setInterval(jumpRino,10);