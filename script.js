let rock=document.querySelector('#rock')
let paper=document.querySelector('#paper')
let scissors=document.querySelector('#scissors')
let player=document.querySelector('#player')
let computer=document.querySelector('#computer')



let buttons=document.querySelectorAll('button')

function playGame(){

    
    // let myScore=player.textContent
    // let aiScore=computer.textContent
    
    let myScore=0
    let aiScore=0
    rock.addEventListener('click',()=>{
        let choices=["Rock","Paper","Scissors"]
        let index=Math.floor(Math.random()*choices.length)
        let compSelection=choices[index]
        
        if(myScore<5 && aiScore<5){
            if(compSelection=="Paper"){
                aiScore+=1
                }else if(compSelection=="Scissors"){
                    myScore+=1
                }else{
                    myScore+=0
                    aiScore+=0
                    
                    
                }
                
        
                player.textContent=myScore
                computer.textContent=aiScore
                
                console.log(`Opponent: ${compSelection}`)

        }
        else{
            if(aiScore==5){
                alert("Game over.Computer has won!!")
            }else if(myScore==5){
                alert("Game over.You have won!!")
            }
        }
         
    })

    paper.addEventListener('click',()=>{
        let choices=["Rock","Paper","Scissors"]
        let index=Math.floor(Math.random()*choices.length)
        let compSelection=choices[index]
        
        if(myScore<5 && aiScore<5){
            if(compSelection=="Paper"){
                myScore+=0
                aiScore+=0
                }else if(compSelection=="Scissors"){
                    aiScore+=1
                }else{
                    myScore+=1
                    
                    
                }
                
        
                player.textContent=myScore
                computer.textContent=aiScore

                console.log(`Opponent: ${compSelection}`)

        
        }
        else{
            if(aiScore==5){
                alert("Computer has won!!")
            }else if(myScore==5){
                alert("You have won!!")
            }
        }
         
    })

    scissors.addEventListener('click',()=>{
        let choices=["Rock","Paper","Scissors"]
        let index=Math.floor(Math.random()*choices.length)
        let compSelection=choices[index]
        
        if(myScore<5 && aiScore<5){
            if(compSelection=="Paper"){
                myScore+=1
                }else if(compSelection=="Scissors"){
                    myScore+=0
                    aiScore+=0
                }else{
                    aiScore+=1  
                }
                player.textContent=myScore
                computer.textContent=aiScore
                console.log(`Opponent: ${compSelection}`)
        }
        else{
            if(aiScore==5){
                alert("Game over.Computer has won!!")
            }else if(myScore==5){
                alert("Game over.You have won!!")
            }
        }
         
    })
}
playGame()
// const restart=document.querySelector('#restart')
// restart.addEventListener('click',playGame)