for ( var i = 0 ; i < donne.length ; i++) {
   
    if (donne[i].population > 3000) {
 
  var nouvelleLigne = document.getElementById("rendu").insertRow(-1);
 
  var nouvelleCellule = nouvelleLigne.insertCell(-1);
 
  nouvelleCellule.textContent=donne[i].nom
 
  nouvelleCellule = nouvelleLigne.insertCell(-1);
 
  nouvelleCellule.textContent=i+1
 
  nouvelleCellule = nouvelleLigne.insertCell(-1);
 
  nouvelleCellule.textContent=donne[i].codesPostaux
 
  nouvelleCellule = nouvelleLigne.insertCell(-1);
 
  nouvelleCellule.textContent=donne[i].population
  }
 
  popu_globale+=donne[i].population
 
 }
 }