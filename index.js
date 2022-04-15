let messages = [];
function writeCards(name, event){
    for(let i=0; i<name.length; i++){
       messages[i] = `Thank you, ${name[i]}, for the wonderful ${event} gift!`
    }
    return messages;
}

function countDown(integer){
    for(let i=integer; i>=0; i--){
        console.log(i);
    }
}