var btnLogin = document.getElementById('btnLogin');
var btnCreateAccount = document.getElementById('btnCreateAccount');

btnLogin.addEventListener('click', function () {
    var email = document.getElementById('email');
    var password = document.getElementById('password');

    firebase.auth().signInWithEmailAndPassword(email.value, password.value)
    .then((userCredential) => {
        // var user = userCredential.user;
        alert("Login efetuado");
        window.location.href = "logged.html";
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;

        console.log("Código de erro", errorCode);
        alert(errorMessage);
    });
});

btnCreateAccount.addEventListener('click', function () {
    window.location.href = "register.html";
});