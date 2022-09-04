
var textNama = document.getElementById('text-nama')
var textRole = document.getElementById('text-role')
var textAvailability = document.getElementById('text-availability')
var textUsia = document.getElementById('text-usia')
var textLokasi = document.getElementById('text-lokasi')
var textPengalaman = document.getElementById('text-pengalaman')
var textEmail = document.getElementById('text-email')
document.getElementById('input-nama').value = textNama.innerText
document.getElementById('input-role').value = textRole.innerText
document.getElementById('input-availability').value = textAvailability.innerText
document.getElementById('input-usia').value = textUsia.innerText
document.getElementById('input-lokasi').value = textLokasi.innerText
document.getElementById('input-pengalaman').value = textPengalaman.innerText
document.getElementById('input-email').value = textEmail.innerText

function handleSubmit(event) {
    var inputNama = document.getElementById('input-nama')
    var inputRole = document.getElementById('input-role')
    var inputAvailability = document.getElementById('input-availability')
    var inputUsia = document.getElementById('input-usia')
    var inputLokasi = document.getElementById('input-lokasi')
    var inputPengalaman = document.getElementById('input-pengalaman')
    var inputEmail = document.getElementById('input-email')
    document.getElementById('text-nama').innerText = inputNama.value
    document.getElementById('text-role').innerText = inputRole.value
    document.getElementById('text-availability').innerText = inputAvailability.value
    document.getElementById('text-usia').innerText = inputUsia.value
    document.getElementById('text-lokasi').innerText = inputLokasi.value
    document.getElementById('text-pengalaman').innerText = inputPengalaman.value
    document.getElementById('text-email').innerText = inputEmail.value
    const text1 = document.getElementById('form-nama')
    const display = text1.style.display
    if (display == 'block') {
        console.log(display)
        text1.style.display = 'none'
    } else {
        console.log(display)
        text1.style.display = 'block'
    }
    event.preventDefault()
}

const buttonTest = document.getElementById('button1')
buttonTest.addEventListener('click', function (){
    const text1 = document.getElementById('form-nama')
    const display = text1.style.display
    if (display == 'block') {
        console.log(display)
        text1.style.display = 'none'
    } else {
        console.log(display)
        text1.style.display = 'block'
    }
    console.log(display, 'display')
});

function validasi() {
    var textNama = document.getElementById("input-nama").value;
    var textEmail = document.getElementById("input-email").value;
    var textLokasi = document.getElementById("input-lokasi").value;
    if (textNama != "" && textEmail !="" && textLokasi !="") {
        return true;
    }else{
        alert('Anda harus mengisi data dengan lengkap !');
        
    }
}
