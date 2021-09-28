function fisherYates(pictures) {
    for (let i = 0; i < pictures.length - 1; i++){
        let tmpcard = pictures[i];
        let tmpRandom = Math.floor(Math.random() * (pictures.length - i)) + i;
        let help = tmpcard;

        tmpcard = pictures[tmpRandom];
        pictures[tmpRandom] = help; 
    }
}

document.addEventListener("DOMContentLoaded", function () {
    let tmpNext = document.getElementById("card");
    let pictures;

    //fisherYates(pictures);  

    tmpNext.addEventListener("click", function(){

        let allImg = ;
        // Value vom Sourcen Ordner zurgreifen
        allImg[1];
        
    });
});
