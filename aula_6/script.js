var colors = [ "black", "white" , "yellow" , "green" , "blue"];

for ( var i = 0; i < colors.length ; i++ ){
    console.log(colors[i]);
}

for (var i = 1; i <= 10; i++){
    console.log(i);
}

var i = colors.length - 1;
while (i >= 0){
    console.log(colors[i]);
    i--;
}


var i = 1;
do{
    console.log(i);
    i++;
}while (i < 10);