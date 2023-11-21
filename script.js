var paper="./assets/paper-hand.png"
var rock='./assets/rock-hand.png'
var scissor='./assets/scissors-hand.png'

var x=document.getElementById('rock')
var y=document.getElementById('paper')
var z=document.getElementById('scissor')

var a=document.querySelector('.humanhand1')
var b=document.querySelector('.humanhand2')

x.addEventListener('click', () => {
    a.innerHTML=`<img src= "${rock}" alt="" height="200px">`
    myscore='rock'
    virtual()
})

y.addEventListener('click', () =>{
    a.innerHTML=`<img src= "${paper}" alt="" height="200px">`
    myscore='paper'
    virtual()
})

z.addEventListener('click', () =>{
    a.innerHTML=`<img src= "${scissor}" alt="" height="200px">`
    myscore='scissor'
    virtual()
})

function virtual (){
    var random=Math.ceil((Math.random()*3))
    if(random==1){
        b.innerHTML=`<img src= "${rock}" alt="" height="200px">`
        compscore='rock'
        virtualscore()
    }

    else if(random==2){
        b.innerHTML=`<img src= "${paper}" alt="" height="200px">`
        compscore='paper'
        virtualscore()
    }

    else if(random==3){
        b.innerHTML=`<img src= "${scissor}" alt="" height="200px">`
        compscore='scissor'
        virtualscore()
    }
}

var score1=0;
var score2=0;
var myscore=""
var compscore=""

function virtualscore(){
    if(myscore===compscore){
        myscore=myscore
    }
    else if(myscore=='rock' && compscore=='paper'){
        score2+=1
    }
    else if(myscore=='paper' && compscore=='rock'){
        score1+=1
    }
    else if(myscore=='rock' && compscore=='scissor'){
        score1+=1
    }
    else if(myscore=='scissor' && compscore=='rock'){
        score2+=1
    }
    else if(myscore=='paper' && compscore=='scissor'){
        score2+=1
    }
    else if(myscore=='scissor' && compscore=='paper'){
        score1+=1
    }
    final()
}

var head=document.querySelector('.score')
var result=document.querySelector('.result')
var playbutton=document.querySelector('.playbutton')
var replay=document.querySelector('.replay')
var logo=document.querySelector('.logo')

function final(){
    head.textContent=`${score1} - ${score2}`
    if(score1>=5 || score2>=5){
        replay.style.visibility="visible"
        logo.style.visibility="hidden"
    }
    if(score1>=5){
        result.textContent="You won the game"
    }else{
        result.textContent="Computer won the game"
    }


}
playbutton.addEventListener('click',() =>{
    location.reload()
})
