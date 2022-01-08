// Compteur de bonne réponse
let cpt_player=0;
// Compteur du nombre de question effectué
let cpt_tot=0;
// Question de manière aléatoire
let val = Math.floor(Math.random() * 10);
let img;

// Affiche si la réponse donné est bonne ou fausse
function printResponse() {
    let rep = document.getElementById("reponseInput").value;
    return strResponse(rep.localeCompare(data.Facile[val].reponse));
}


function strResponse(value){
    document.getElementById("reponseInput").value = ""
    if(value){
        document.getElementById("printRes").innerHTML = "Réponse fausse";
        document.getElementById("res").innerHTML = "La réponse à "+ data.Facile[val].question + data.Facile[val].reponse;
    }
    else{
        document.getElementById("printRes").innerHTML = "Réponse bonne";
        document.getElementById("res").innerHTML = "";
        cpt_player++;
    }
    printScore(cpt_tot++);
}

// Affichage du score du joueur
function printScore(){
    document.getElementById("cpt").innerHTML = cpt_player + "/" + cpt_tot;
}

// Affichage des questions
function printQuestion(mode){
    if (mode === "Facile"){
        document.getElementById("question").innerHTML = data.Facile[val].question;
    }
    else if (mode === "Moyen"){
        document.getElementById("question").innerHTML = data.Moyen[val].question;
    }
    else {
        document.getElementById("question").innerHTML = data.Difficile[val].question;
    }
}

// Mise a jour de la page après clic sur button validé
function update(mode){
    printResponse();
    val = Math.floor(Math.random() * 10);
    printQuestion(mode);
    deleteImage();
    printImage();
}

// Affichage d'une image
function printImage(){
    img = document.createElement("img");
    img.src = data.Facile[val].image;

    let div = document.getElementById("image");
    div.appendChild(img);
    img.setAttribute("style", "width: 120px;");
}

// Suppression de l'image
function deleteImage(){
    let div = document.getElementById("image");
    div.removeChild(img);
}
