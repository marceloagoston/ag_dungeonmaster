const rndm = (n) => {
    let a = Math.trunc((Math.random()*n)+1);
    return a;
}
// dies var
let d2 = document.getElementById("d2");
let d4 = document.getElementById("d4");
let d6 = document.getElementById("d6");
let d10 = document.getElementById("d10");
let d20 = document.getElementById("d20");
let d100 = document.getElementById("d100");
// pj vars
let getpjlife = document.getElementById("getpjlife");
let npclifediv = document.getElementById("npclifediv");
let npcheal = document.getElementById("npcheal");
let npcdamage = document.getElementById("npcdamage");

// let bt = [document.getElementById("bd2"), document.getElementById("bd4"),document.getElementById("bd6"),document.getElementById("bd10"),document.getElementById("bd20"),document.getElementById("bd100")];
// bt[0].onclick = function(){
//   let tipo = (rndm(2)%2)? "Verdadero":"Falso";
//   d2.innerHTML = tipo;
// }
// bt[1].onclick = function(){
//    d4.innerHTML = rndm(4);
// }
// bt[2].onclick = function(){
//    d6.innerHTML = rndm(6);
// }
// bt[3].onclick = function(){
//    d10.innerHTML = rndm(10);
// }
// bt[4].onclick = function(){
//    d20.innerHTML = rndm(20);
// }
// bt[5].onclick = function(){
//    d100.innerHTML = rndm(100);
// }

class Pjnpc{
   
   constructor(i,h){
      this.health=h;
      this.id=i;
   }
   // arreglar esto salud tiene que resetear a la ingreso el usuario
   setHealth(he){
      this.health=he;
   }
   getHealth(){
      return this.health;
   }
   damage(){
      return this.health--;
   }
   heal(){
      return this.health++;
   }
}

const npc1 = new Pjnpc(1,20);
getpjlife.onclick = function(){ 
   npc1.setHealth(20);
   npclifediv.innerHTML = npc1.getHealth();
}
npcheal.onclick = function(){
   npclifediv.innerHTML = npc1.heal();
}
npcdamage.onclick = function(){
   npclifediv.innerHTML = npc1.damage();
}