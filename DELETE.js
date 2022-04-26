var un_objet = {"name":"mimi","Adress":Rue_hamroun_30,"Tell":04521365}

for (i in un_objet) {
  console.log(i)
}

console.log("---------------------")

delete un_objet.age;

for (i in un_objet) {
  console.log(i)
}