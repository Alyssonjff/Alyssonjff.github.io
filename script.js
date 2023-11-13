function submitForm(){
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var Mensage = document.getElementById('Mensage').value;
    if (name == ''){
        alert('O nome não pode estar vazio');
    }else if(email == ''){
        alert('O email não pode estar vazio');

    }else if(Mensage == ''){
        alert('A mensagem não pode estar vazio');
    }else{
        alert(name + ' ' + email + ' ' + Mensage);
    }

}