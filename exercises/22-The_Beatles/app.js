function sing(){
    let result = "";
    for(let i = 0; i < 9; i++){
        result += "let it be, ";
        if(i == 3){
            result += "there will be an answer, ";
        }
        if(i == 8){
            result += "whisper words of wisdom, let it be";
        }
    }
    return result;
}

//Your code above ^^^

console.log(sing());
