// Your code here:
function bottles(){
    for(let i = 99; i >= 0; i--){
        let value = i - 1;
        if(i > 2){
            console.log(i + ` bottles of milk on the wall, ` + i + ` bottles of milk. Take one down and pass it around, ` + value + ` bottles of milk on the wall.` );
        }else if (i == 2){
            console.log(i + ` bottles of milk on the wall, ` + i + ` bottles of milk. Take one down and pass it around, ` + value + ` bottle of milk on the wall.` );
        }else if (i == 1){
            console.log(i + ` bottle of milk on the wall, ` + i + ` bottle of milk. Take one down and pass it around, no more bottles of milk on the wall.`);
        }
        if(i == 0){
            console.log("`No more bottles of milk on the wall, no more bottles of milk. Go to the store and buy some more, 99 bottles of milk on the wall.");
        }
    }
}

bottles();