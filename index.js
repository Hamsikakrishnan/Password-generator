const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S",
"T","U","V","W","X","Y","Z","a","b","c","d","e","f",
"g","h","i","j","k","l","m","n","o","p","q","r","s",
"t","u","v","w","x","y","z", "0", "1", "2", "3", "4", 
"5", "6", "7", "8", "9","~","`","!","@","#","$","%","^",
"&","*","(",")","_","-","+","=","{","[","}","]",",","|",
":",";","<",">",".","?",
"/"];
   
let firstEl = document.getElementById("first");
let secondEl = document.getElementById("second");
let first1El = document.getElementById("first1");
let second1El = document.getElementById("second1");

// firstEl.textContent= "let me play my";
let a;
let b;
let c;
let d;

function increment(){
    a = " ";
    b = " ";
    c = " ";
    d = " ";

        for(let i = 0; i < 15; i++){
            let y = Math.floor(Math.random()*characters.length);
            a += characters[y];    
        }
        firstEl.textContent = a;
        for(let j = 0; j < 15; j++){
            let z = Math.floor(Math.random()*characters.length);
            b += characters[z];  
        }
        secondEl.textContent = b;
        for(let i = 0; i < 10; i++){
            let y = Math.floor(Math.random()*characters.length);
            c += characters[y];    
        }
        first1El.textContent = c;
        for(let j = 0; j < 10; j++){
            let z = Math.floor(Math.random()*characters.length);
            d += characters[z];    
        }
        second1El.textContent = d;
        
        
    
    
}


