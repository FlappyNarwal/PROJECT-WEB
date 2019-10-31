/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

//bij onderstaande code heb ik hulp gehad van Ramon Meijers - student
//Boek Javascript & Jquery - Jon Duckett

var filter = document.getElementById("filterknop");
var filtermenu = document.getElementById("filterMenu");
var downloadButton = document.getElementsByClassName("DownloadKnop");
var notification = document.getElementById("notification");
var downloadNumber = 0;
var popUp = document.getElementById("popUp");
var preview = false; //zet de preview eerst op false


for (var i = 0; i < downloadButton.length; i++) {
    downloadButton[i].addEventListener("click", download); //download button wacht op "click"


}
if (popUp !== null) { //dit is als de popup bestaat

    popUp.addEventListener("click", function () {
        if (preview === false) {
            document.getElementById("verhaalPreview").style.display = "initial"; //eigenlijk moet je in css deze class aanroepen, dit is eigenlijk css in js
            preview = true; //als preview false is en dus niet zichtbaar -> wordt zichtbaar = true
        } else {
            document.getElementById("verhaalPreview").style.display = "none";
            preview = false; //als preview niet true is, is display none en is de popup false
        }
    });

    document.getElementById("verhaalPreview").addEventListener("click", function () {
        document.getElementById("verhaalPreview").style.display = "none";

    })

}
filter.addEventListener("click", function () {
    filter.classList.toggle("active");
    if (filtermenu.style.display === "block") {
        filtermenu.style.display = "none";
    } else {
        filtermenu.style.display = "block";
    } //als er een "klik plaatsvindt runt de functie. als filtermenu display block is (zichrbaar) wordt deze none (onzichtbaar.) hetzelfde geldt andersom.

});

function download() {

    if (this.classList.contains('downloaded')) {
        this.classList.remove('downloaded');
        this.style.backgroundImage = "url(../images/download.svg)";
        downloadNumber -= 1;
    } else {
        this.classList.add('downloaded');
        this.style.backgroundImage = "url(../images/gedownload.svg)";
        downloadNumber += 1;

    }
    if (downloadNumber === 0) {
        notification.style.display = "none"; //geen downloads = geen zichtbare notificatie
    } else {
        notification.style.display = "initial"; // als er wel een aantal downloads zijn zie je de notificatie wel
    }
    notification.innerHTML = downloadNumber; //hoeveelheid downloads
}
