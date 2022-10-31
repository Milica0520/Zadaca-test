var niz = [152, 4564, 21, 8, 66, 0, 15, 99, 22, 77, 132, 916, 155, 667, 101];

function ispisiNiz(){
    var div1 = document.getElementById("prviDiv");
    div1.innerText = "Pocetni niz je: ";
    for(var i = 0; i < niz.length; i++){
        div1.innerText += niz[i] + ', ';
    }
}
ispisiNiz();

function dvocifreniBrojevi(){
    var div2 = document.getElementById("drugiDiv");
    div2.innerText = "Dvocifrenibrojevi su: ";
    for(var i = 0; i < niz.length; i++){
        var x = niz[i];

        if(x > 9 && x < 100){
            div2.innerHTML += '<b>' + x + '</b>, ';
        }
    }
}
dvocifreniBrojevi();

function aritmetickaSredina(){
    var suma = 0;
    for(var i = 0; i < niz.length; i++){
        suma = suma + niz[i];
    }

    var arSredina = suma / niz.length;

    var div3 = document.getElementById("treciDiv");
    div3.innerText = "Srednja vrijednost je: " + arSredina;
}
aritmetickaSredina();

function parniIndeksi(){
    var div5 = document.getElementById("petiDiv");
    div5.innerText = "Brojevi na parnim indeksima su: ";
    for(var i = 0; i < niz.length; i += 2){
        div5.innerText += niz[i] + ', ';
    }
}
parniIndeksi();