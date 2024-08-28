function forValidation(){
    let name = document.getElementById('name').value;
    if(name ==''){
        alert('formnya kosong');
    } else{
        alert('form berhasil disubmit');
    }
    console.log(name);
}

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


function validateForm() {
    const name = document.forms['message-form']['full-name'].value;
    const birthDate = document.forms['message-form']['birth-date'].value;
    const gender = document.forms['message-form']['gender'].value;
    const messages = document.forms['message-form']['messages'].value;
  
    if (name == '' || birthDate == '' || gender == '' || messages == '') {
      alert('Tidak boleh kosong');
      return false;
    }
  
    setSenderUI(name, birthDate, gender, messages);
  
    return false;
}