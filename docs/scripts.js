const rndm = (n) => {
    let a = Math.trunc((Math.random()*n)+1);
    return a;
}

let d2 = document.getElementById("d2");
let d4 = document.getElementById("d4");
let d6 = document.getElementById("d6");
let d10 = document.getElementById("d10");
let d20 = document.getElementById("d20");
let d100 = document.getElementById("d100");
let bt = [document.getElementById("bd2"), document.getElementById("bd4"),document.getElementById("bd6"),document.getElementById("bd10"),document.getElementById("bd20"),document.getElementById("bd100")];
bt[0].onclick = function(){
  let tipo = (rndm(2)%2)? "Verdadero":"Falso";
  d2.innerHTML = tipo;
}
bt[1].onclick = function(){
   d4.innerHTML = rndm(4);
}
bt[2].onclick = function(){
   d6.innerHTML = rndm(6);
}
bt[3].onclick = function(){
   d10.innerHTML = rndm(10);
}
bt[4].onclick = function(){
   d20.innerHTML = rndm(20);
}
bt[5].onclick = function(){
   d100.innerHTML = rndm(100);
}