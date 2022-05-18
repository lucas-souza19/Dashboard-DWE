var registerButton = document.getElementById('registerButton');

registerButton.addEventListener('click', function () {
    const email = document.getElementById('user_r');
    const password = document.getElementById('senha_r');
    const confirmePassword = document.getElementById('senha_rc');

    if(email.value != '' && password.value != '' && confirmePassword.value != '') {
        if(password.value === confirmePassword.value) {
            firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
            .then((userCredential) => {
                var user = userCredential.user;
                alert('Usuário criado com sucesso!');
                window.location.href = "../views/dashboard.html";
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
