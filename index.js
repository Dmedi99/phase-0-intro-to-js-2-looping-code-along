const names = []

function writeCards(names, event){
    const messages = []
    for (let i = 0; i < names.length;i++){
        const message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`
        messages.push(message)
    }
    return messages
}

writeCards(["Nat", "Eric", "Sebastian"], "birthday")

function countDown(){
    let number = 10
    while (number >= 0){
        console.log(number--)
    }
}