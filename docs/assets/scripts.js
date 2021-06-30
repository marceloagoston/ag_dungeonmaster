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
let getpjlife = document.getElementById("getpj1life");
let npclifediv = document.getElementById("pj1lifediv");
let npcheal = document.getElementById("pj1heal");
let npcdamage = document.getElementById("pj1damage");

let getpjlife2 = document.getElementById("getpj2life");
let npclifediv2 = document.getElementById("pj2lifediv");
let npcheal2 = document.getElementById("pj2heal");
let npcdamage2 = document.getElementById("pj2damage");

let getpjlife3 = document.getElementById("getpj3life");
let npclifediv3 = document.getElementById("pj3lifediv");
let npcheal3 = document.getElementById("pj3heal");
let npcdamage3 = document.getElementById("pj3damage");

let getpjlife4 = document.getElementById("getpj4life");
let npclifediv4 = document.getElementById("pj4lifediv");
let npcheal4 = document.getElementById("pj4heal");
let npcdamage4 = document.getElementById("pj4damage");

let bt = [document.getElementById("bd2"), document.getElementById("bd4"),document.getElementById("bd6"),document.getElementById("bd10"),document.getElementById("bd20"),document.getElementById("bd100")];

if(bt[0]){
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
}

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
      return --this.health;
   }
   heal(){
      return ++this.health;
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

const npc2 = new Pjnpc(1,20);
getpjlife2.onclick = function(){ 
   npc2.setHealth(20);
   npclifediv2.innerHTML = npc1.getHealth();
}
npcheal2.onclick = function(){
   npclifediv2.innerHTML = npc1.heal();
}
npcdamage2.onclick = function(){
   npclifediv2.innerHTML = npc1.damage();
}

const npc3 = new Pjnpc(1,20);
getpjlife3.onclick = function(){ 
   npc3.setHealth(20);
   npclifediv3.innerHTML = npc3.getHealth();
}
npcheal3.onclick = function(){
   npclifediv3.innerHTML = npc3.heal();
}
npcdamage3.onclick = function(){
   npclifediv3.innerHTML = npc3.damage();
}

const npc4 = new Pjnpc(1,20);
getpjlife4.onclick = function(){ 
   npc4.setHealth(20);
   npclifediv4.innerHTML = npc4.getHealth();
}
npcheal4.onclick = function(){
   npclifediv4.innerHTML = npc4.heal();
}
npcdamage4.onclick = function(){
   npclifediv4.innerHTML = npc4.damage();
}