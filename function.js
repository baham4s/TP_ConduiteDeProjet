// Compteur de bonne réponse
let cpt_player=0;
// Compteur du nombre de question effectué
let cpt_tot=0;
// Question de manière aléatoire
let val = 0;
let img;

// Affiche si la réponse donné est bonne ou fausse
function printResponse(mode) {
    let rep = document.getElementById("reponseInput").value;
    if (mode === "Facile"){
        return strResponse(rep.localeCompare(data.Facile[val].reponse), mode);
    }
    else if (mode === "Normal"){
        return strResponse(rep.localeCompare(data.Moyen[val].reponse), mode);
    }
    else {
        return strResponse(rep.localeCompare(data.Difficile[val].reponse), mode);
    }
}


function strResponse(value, mode){
    document.getElementById("reponseInput").value = ""
    if(value){
        document.getElementById("printRes").innerHTML = "Réponse fausse";
        if (mode === "Facile"){
            document.getElementById("res").innerHTML = "La réponse à "+ data.Facile[val].question + data.Facile[val].reponse;
        }
        else if (mode === "Normal"){
            document.getElementById("res").innerHTML = "La réponse à "+ data.Moyen[val].question + data.Moyen[val].reponse;
        }
        else {
            document.getElementById("res").innerHTML = "La réponse à "+ data.Difficile[val].question + data.Difficile[val].reponse;
        }
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
    else if (mode === "Normal"){
        document.getElementById("question").innerHTML = data.Moyen[val].question;
    }
    else {
        document.getElementById("question").innerHTML = data.Difficile[val].question;
    }
}

// Affichage des aides
function printaideEcriture(mode){
    if (mode === "Facile"){
        document.getElementById("possibilite").innerHTML = data.Facile[val].aide;
    }
    else if (mode === "Normal"){
        document.getElementById("possibilite").innerHTML = data.Moyen[val].aide;
    }
    else {
        document.getElementById("possibilite").innerHTML = data.Difficile[val].aide;
    }
}

// Mise a jour de la page après clic sur button validé
function update(mode){
    stopGame(10);
    printResponse(mode);
    val = Math.floor(Math.random() * 10);
    printQuestion(mode);
    deleteImage();
    printImage();
}
// Mise a jour de la page après clic sur button validé

function updateEcriture(mode){
    stopGame(10);
    printResponse(mode);
    printaideEcriture(mode);
    val+=1;
    printQuestion(mode);
    printaideEcriture(mode);


}
// Mise a jour de la page de lecture après clic sur button valider
function updateLecture(mode){
    stopGame(5);
    printResponse(mode);
    val+=1;
    printQuestion(mode);
}

// Affichage d'une image
function printImage(){
    img = document.createElement("img");
    img.src = data.Facile[val].image;

    let div = document.getElementById("image");
    div.appendChild(img);
    img.setAttribute("style", "width: 120px;");
}

// Affichage d'un texte
function printTexte(mode){
    if (mode === "Facile"){
        document.getElementById("texte").innerHTML = data.Facile[val].texte;
    }
    else if (mode === "Normal"){
        document.getElementById("texte").innerHTML = data.Moyen[val].texte;
    }
    else {
        document.getElementById("texte").innerHTML = data.Difficile[val].texte;
    }
}

// Suppression de l'image
function deleteImage(){
    let div = document.getElementById("image");
    div.removeChild(img);
}

// Arrete le jeu lorsque un nombre de question est atteint et revient au menu principale
function stopGame(limite){
    if(limite === cpt_tot){
        alert("Votre score : " + cpt_player + "/" + cpt_tot);
        window.location.href = "index.html"
    }
}
