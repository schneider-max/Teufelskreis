function fisherYates(pictures) {
    for (let i = 0; i < array.length - 1; i++){
        let tmpcard = pictures[i];
        let tmpRandom = Math.floor(Math.random() * (pictures.length - i)) + i;
        let help = tmpcard;

        tmpcard = pictures[tmpRandom];
        pictures[tmpRandom] = help; 
    }
}

document.addEventListener("DOMContentLoaded", function () {
    let card = document.getElementById("Karten");
    let pictures;

    fisherYates(pictures);  

    card.addEventListener("click", function(){

        // Value vom Sourcen Ordner zurgreifen

        
    });
});