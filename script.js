function playGame(){
    //prompts the player to make a choice 
    let mySelection=prompt("Choose between rock ,paper and scissors ")
    let choices=["Rock","Paper","Scissors"]
    let index=Math.floor(Math.random()*choices.length)//Randomly chooses a number between 0 and 2(This numbers representing the index of the items in the choices array)

    let compSelection=choices[index]//chooses one of the elements in the choices array randomly

    function findWinner(){
        

        //Below statements check for whether any value has been entered
        if(mySelection==""){
            console.log("Please choose something")
        }
        
        else if((mySelection != "")){


            //Below statements check for any entry outside of Rock ,Paper and Scissors
            if(mySelection != "Rock" && mySelection!= "Paper" && mySelection!= "Scissors"){
            console.log("Please enter a valid choice")
            }

            else{

                //Below statements consist of individual checks for  each choice made by the player
                if(mySelection=="Rock"){


                    //Below statements are comparisons for Rock against computer choices
                    if(compSelection=="Paper"){
                        console.log(`You chose ${mySelection} and computer chose ${compSelection}`)
                        console.log("Paper eats rock for breakfast.Computer wins!")
                    }
                    else if(compSelection=="Rock"){
                        console.log(`You chose ${mySelection} and computer chose ${compSelection}`)
                        console.log("Rock cant hurt Rock.Nobody wins!")
                    }
                    else if(compSelection=="Scissors"){
                        console.log(`You chose ${mySelection} and computer chose ${compSelection}`)
                        console.log("Rock crushes scissors.Player wins!")
                    }
                }
                else if(mySelection=="Paper"){


                    //Below statements are comparisons for Paper against computer choices
                    if(compSelection=="Rock"){
                        console.log(`You chose ${mySelection} and computer chose ${compSelection}`)
                        console.log("Paper eats rock for breakfast.Player wins!")
                    }
                    else if(compSelection=="Paper"){
                        console.log(`You chose ${mySelection} and computer chose ${compSelection}`)
                        console.log("Paper cant hurt paper.Nobody wins!")
                    }
                    else if(compSelection=="Scissors"){
                        console.log(`You chose ${mySelection} and computer chose ${compSelection}`)
                        console.log("Scissors slices and dices paper.Computer wins!")
                    }
                }
                else if(mySelection=="Scissors"){


                    //Below statements are comparisons for Scissors against computer choices
                     if(compSelection=="Rock"){
                        console.log(`You chose ${mySelection} and computer chose ${compSelection}`)
                        console.log("Rock crushes scissors.Computer wins!")
                    }
                    else if(compSelection=="Paper"){
                        console.log(`You chose ${mySelection} and computer chose ${compSelection}`)
                        console.log("Scissors slices and dices paper.Player wins!")
                    }
                    else if(compSelection=="Scissors"){
                        console.log(`You chose ${mySelection} and computer chose ${compSelection}`)
                        console.log("Scissors cant hurt their own kind.Nobody wins!")
                    }
                }
            }
            
        }
        
    

    
    
}

findWinner()
}    
playGame()
