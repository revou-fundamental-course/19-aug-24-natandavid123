

// untuk slide banner, tapi gak jalan T_T
let indexSlide = 1;
showBanner(1);

function nextSlide(n){
    showBanner(indexSlide += n);
}

function showBanner(indexBanner){
    let listImage = document.getElementsByClassName('banner-img');

    
    let index = 0;
    while(index < listImage.length){
        listImage[index].style.display = 'none';
        index ++;
    }

    if(indexBanner > listImage.length){
        indexSlide = 1;
    }

    listImage[indexSlide - 1].style.display = 'block';
    console.log(listImage);
}


// ini adalah untuk validasi isi form
function validateForm() {
    const name = document.forms['message-form']['name'].value;
    const birthDate = document.forms['message-form']['birthdate'].value;
    const gender = document.forms['message-form']['gender'].value;
    const messages = document.forms['message-form']['message'].value;
  
    if(name == '' && birthDate == '' && gender == '' && messages == ''){
        alert('Form tidak boleh kosong');
        return false;
    }
    if (name == '') {
      alert('Nama tidak boleh kosong');
      return false;
    } else if(birthDate == ''){
        alert('Birth Date tidak boleh kosong');
        return false;
    } else if(gender == ''){
        alert('Gender tidak boleh kosong');
        return false;
    } else if(messages == ''){
        alert('Message tidak boleh kosong');
        return false;
    } else{
        alert('Form berhasil disubmit! Arigatokozaimas!!')
        return false;
        
    }
    
    
    nameInformation.innerHTML = "<span>Nama anda adalah<span/>" + name;
    
  
    setSenderUI(name, birthDate, gender, messages);
  
    return false;


    
}





// ini adalah untuk menampilkan inputan
function showInformation(){

    const name = document.getElementById('name').value;
    const birthDate = document.getElementById('birthDate').value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const message = document.getElementById('message').value;
    const result = document.getElementById('result');

    result.textContent = `Nama: ${name}, Tanggal Lahir: ${birthDate}, Jenis Kelamin: ${gender.value}, Pesan: ${message}`;

}




   

