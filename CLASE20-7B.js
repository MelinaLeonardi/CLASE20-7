let peso=prompt('Ingresa tu peso ');
let altura=prompt('Ingresa tu  altura');
 IMC= peso/(altura*altura);
console.log(peso)
console.log(altura)
console.log(IMC)
document.write("Su imc es:" + IMC)


 if(IMC <18.5){
    alert("Su IMC esta por debajo de lo normal");
}
else if(IMC >=18.5 & IMC <=25){
    alert ("Su IMC es normal");
}
else if (IMC>25 & IMC<30){
    alert ("Su IMC indica sobrepeso");
}
else if( IMC>30){
    alert ("Usted tiene obesidad");
}
//por descarte esta opcion toma los campos vacios por lo que devolveria error//
else {
    alert ("UNO O VARIOS CAMPOS NO HAN SIDO COMPLETADOS ")
}

