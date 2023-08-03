function getVaqt() { 
    let selectElement = document.getElementById("regions");
    let selectedCity = selectElement.value;
    let link = 'https://islomapi.uz/api/present/day?region=' + selectedCity;

    fetch(link)
        .then(response => response.json())
        .then(data => {
            document.querySelector('.card1').innerHTML="Bomdod :" + data.times.tong_saharlik;
            
            document.querySelector('.card2').innerHTML="Quyosh : " + data.times.quyosh;
            document.querySelector('.card3').innerHTML="Peshin : " + data.times.peshin;
            document.querySelector('.card4').innerHTML="Asr : " + data.times.asr;
            document.querySelector('.card5').innerHTML="Shom : " + data.times.shom_iftor;
            document.querySelector('.card6').innerHTML= "Xufton : " + data.times.hufton;
            
        })
        .catch(error => console.error('Error', error));
}
let shaharselect = document.getElementById("regions");
shaharselect.onchange = getVaqt;


getVaqt();