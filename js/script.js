
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


function showInformation(){

    const name1 = document.getElementByID('name');
    const birthdate1 = document.getelementbyID("birthdate");
    const gender1 = document.getelementbyID("male") || document.getelementbyID("female");
    const message1 = document.getelementbyID("message");
    const nameInformation = document.getelementbyID("name-information");
    const birthdateInformation = document.getelementbyID("birthdate");
    const genderInformation = document.getElementsByClassName("radio-group");
    const messageInformation = document.getelementbyID("message");

    function fun1(){
        nameInformation.innerHTML = name1.value;
        birthdateInformation.innerHTML = birthdate1.value;
        genderInformation.innerHTML = gender1.value;
        messageInformation.innerHTML = message1.value;
    }

}

   


// function informationForm(){
//     var nameinformation = document.getElementById("name-information");
//     var birthDateInformation = document.getElementById("birthdate-information");
//     var genderInformation = document.getElementByClass("radio-group-information");
//     var messagesInformation = document.getElementById("message-information");

//     nameInformation.innerHTML = "<span>Nama anda adalah<span/>" + name;
// }