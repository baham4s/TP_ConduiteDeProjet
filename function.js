window.addEventListener("load", function() {
    console.log(data)

});

var cpt=0;

function compareAnswer() {
    var rep = document.getElementById("name").value;
    return valAnswer(rep.localeCompare(data.Facile[0][0].reponse));
}

function valAnswer(value){
    if(value){
        document.writeln("Réponse fausse");
    }
    else{
        document.writeln("Réponse Valide");
        cpt++;
    }
    document.write("Nombre de bonne réponses pour le moment", cpt);
}

