while (confirm("Vous voulez jouez??")){

    var nbFois = 0 ;
    const nbGen = Math.round(Math.random()*10) ;
    alert("nombre=="+nbGen) ;
    var ok =0 ;
    while (nbFois < 3 && ok ==0){
       let x =  prompt("Entrer un nombre") ;
        if (x == nbGen){
            ok =1 ;
            alert("Vous avez gagné!!");
            break ;
        }
        nbFois ++ ;
    }
    if (ok == 0 && nbFois == 3){
        alert("vous avez Perdu!")
    }


}