let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");


setInterval(()=>{
   let currentTiome = new Date();

hrs.innerHTML = (currentTiome.getHours()<10?"0":"") + currentTiome.getHours();
min.innerHTML = (currentTiome.getMinutes()<10?"0":"") + currentTiome.getMinutes();
sec.innerHTML = (currentTiome.getSeconds()<10?"0":"") + currentTiome.getSeconds();
},1000)