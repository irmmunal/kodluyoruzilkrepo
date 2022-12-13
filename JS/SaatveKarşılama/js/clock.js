let fullName = prompt("Lütfen Adınızı Giriniz: ")
let info = document.querySelector("#myName")

info.innerHTML = `${fullName}`



function tarihSaat() {
    var date = new Date().toLocaleString('tr-TR');
    document.getElementById("myClock").innerHTML = date;
}
// her 1 saniyede tarihSaat fonksiyonunu yeniden çalıştır
setInterval(tarihSaat, 1000); 
