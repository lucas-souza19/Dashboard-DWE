var btnCreate = document.getElementById('btnCreate');
var btnLogin = document.getElementById('btnLogin');

btnCreate.addEventListener('click', function () {
    const email = document.getElementById('inputEmail');
    const password = document.getElementById('inputPassword');
    const confirmePassword = document.getElementById('inputConmfirmePassword');
    const inputName = document.getElementById('inputName');
    const inputAge = document.getElementById('inputAge');

    if(email.value != '' && password.value != '' && confirmePassword.value != '' && inputName.value != '' && inputAge.value != '') {
        if(password.value === confirmePassword.value) {
            firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
            .then((userCredential) => {
                var user = userCredential.user;
                saveDataUser(email.value, inputName.value, inputAge.value);
                alert('Usuário criado com sucesso!');
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                alert(errorMessage);
            });
        }
        else {
            alert('Senhas são diferentes!');
        }
    }
    else {
        alert('Preencha todos os campos!');
    }
});

btnLogin.addEventListener('click', function () {
    window.location.href = "index.html";
});

function saveDataUser(emailValue, nameValue, ageValue) {
    var data = {
        name: nameValue,
        age: ageValue
    }

    firebase.firestore().collection("users").doc(emailValue).set(data)
    .then(() => {
        window.location.href = "logged.html";
    });
}