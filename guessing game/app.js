const max=prompt("enter max number");
let random=Math.floor(Math.random()*max)+1;
let guess=prompt("enter the number:")
while(true){
    if(guess=="quit"){
        console.log("user quit");
        break;
    }
    if(guess==random){
        console.log("congrats!!you are right.")
        break;
    }
    else if(guess<random){
       guess=prompt("your guess is too small.please try again")
    }
    else{
        guess=prompt("your guess is too large.please try again")
    }
    }
