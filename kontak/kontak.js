//Funtion untuk validasi form kontak
function sendContact(){
    let name = document.getElementById('name'); //untuk menangkap element di html berdasarkan ID
    let email = document.getElementById('email');
    let phone = document.getElementById('phone');
    let subject = document.getElementById('subject');
    let message = document.getElementById('message');

    const emailReceiver = 'imronman1998@gmail.com'; //Email penerima
    const a = document.createElement('a'); //membuat element baru

    a.href = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailReceiver}&su=${subject.value}&body=hai perkenalkan nama saya ${name.value}, ${message.value}, berikut nomor yang bisa anda hubungi ${phone.value} atau email lain nya ${email.value}`; //send email dengan value/nilai yang didapatkan pada variabel tertentu
    
    a.target = '_blank'; //membuka tab baru pada browser secara otomatis
    a.click(); //metode digunakan untuk mengeksekusi klik pada elemen, yang seolah-olah user mengkliknya secara manual.
    
    //agar membuat semua inputan menjadi kosong kembali
    name.value = '' 
    email.value = ''
    phone.value = ''
    subject.value = ''
    message.value = ''
}

const buttonSend = document.getElementById('button-send'); //menangkap element button yang memiliki id button-send

    //eventListener berfungsi untuk melakukan action/aksi pada button-send ketika di klik
    buttonSend.addEventListener('click',function(e){
        e.preventDefault() //metode agar browser tidak refresh pada saat button di klik 
        sendContact() //function sendContact() akan di panggil dan dijalankan pada saat button-send diklik oleh user
    })