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
let gPictures;

document.addEventListener("DOMContentLoaded", function () {
    let tmpNext = document.getElementById("card");
    let btnStart = document.getElementById("start");
    let allImg = document.getElementsByClassName("image");

    btnStart.addEventListener("click", function() {
        for (let i = 0; i < allImg.length - 1; i++){
            let tmpcard = allImg[i];
            let tmpRandom = Math.floor(Math.random() * (allImg.length - i)) + i;
    
            allImg[i] = allImg[tmpRandom];
            allImg[tmpRandom] = tmpcard; 
        }
        btnStart.style.display = "none";
        allImg[index].style.display = "";
    })

    tmpNext.addEventListener("click", function(){

        // Value vom Sourcen Ordner zurgreifen
        allImg[index].style.display = "none";
        index = index + 1;
        allImg[index].style.display = "";
    });
});
