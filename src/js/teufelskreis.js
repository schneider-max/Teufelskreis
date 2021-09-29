function fisherYates(pictures) {
    for (let i = 0; i < pictures.length - 1; i++){
        let tmpcard = pictures[i];
        let tmpRandom = Math.floor(Math.random() * (pictures.length - i)) + i;
        let help = tmpcard;

        tmpcard = pictures[tmpRandom];
        pictures[tmpRandom] = help; 
        return pictures;
    }
}
let index = 0;

document.addEventListener("DOMContentLoaded", function () {
    let allImg = document.getElementsByClassName("image");
    let tmpNext = document.getElementById("card");
    let btnStart = document.getElementById("start");

    btnStart.addEventListener("click", function() {
        allImg[index].style.display = "";
        btnStart.style.display = "none";
        fisherYates(allImg);
    })

    tmpNext.addEventListener("click", function(){

        // Value vom Sourcen Ordner zurgreifen
        allImg[index].style.display = "none";
        index = index + 1;
        allImg[index].style.display = "";
    });
});
