const divElm=document.getElementById('dino');
divElm.style.top=`${innerHeight-divElm.offsetHeight-100}px`;
divElm.style.backgroundSize='cover';
(document.getElementsByClassName('container1')[0]).style.display='none';

let run=true;
let jump=false;
let dx=0;
let dy=0;
let dead=false;
let score=0;
addEventListener('keydown',(e)=>{
    // if(e.key==='ArrowRight'){
    //     run=true;
    //     dx=10;
    // }
   
});
addEventListener('keydown',(e)=>{
    if(e.key==='ArrowUp' && !dead){
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
        score++;
        document.querySelector('h2').innerText='Score: '+score;
        document.querySelector('h3').innerText=('Score: '+score);


        console.log(score)
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
            if(dinoTop===561) {
                jump=false;
                i=true;
            }
        }
    }
}

setInterval(renderDino,100);
setInterval(runDino,100);
setInterval(moveBackground,50);
setInterval(jumpRino,30);

// Adding objects

for (let index = 0; index < 5; index++) {
    const objectDiv=document.createElement('div');
    objectDiv.className="box";
    objectDiv.id="box"+index;
    document.querySelector('body').append(objectDiv); 
    let dragon=document.getElementById("box"+`${index}`)
    // objectDiv.style.backgroundColor='red';
    console.log(dragon);
    dragon.style.width='300px';
    dragon.style.position='absolute'
    dragon.style.height='300px';
    dragon.style.top='620px';
    dragon.style.backgroundSize='contain'
    dragon.style.backgroundRepeat='no-repeat'
    dragon.style.backgroundImage=`url('dragon/dragon.gif')`;
    

    dragon.style.marginLeft=(5-index)*(index)*100+2200+'px';


}
let boxAnimationId=0;
function boxAnimation(){
    for (let index = 0; index < 5; index++) {
        let box=document.getElementById('box'+index);
        let currentMarginLeft=getComputedStyle(box).marginLeft;
        let newMarginLeft=parseInt(currentMarginLeft)-100;
        box.style.marginLeft=newMarginLeft+'px'; 
        if(newMarginLeft<300 ){
            console.log(dinoTop)
            if(dinoTop>500){
                console.log("3hrhrherh")
                run=false;
                dead=true;
                (document.getElementsByClassName('container1')[0]).style.display='flex';
            }
        }
    }
    console.log(getComputedStyle(document.getElementById('box4')).marginLeft);
    if(getComputedStyle(document.getElementById('box4')).marginLeft==='0px'){
        for (let index = 0; index < 5; index++) {
            document.getElementById('box'+index).style.marginLeft=(10-index)*(index)*100+2200+'px';   
        }
    }
}
let d=1;
function deadRino(){
    if(dead){
        let x=d++;
        if(d>8) {
            clearInterval(deadRino);
            x=8;
        
        };
        divElm.style.backgroundImage=`url('dino/Dead (${x}).png')`;
    }
                    

}
setInterval(boxAnimation,200);
setInterval(deadRino,100);
document.querySelector('button').addEventListener('click',()=>{
    run=true;
    dead=false
    // divElm.style.backgroundImage='null';
    
})
