var btnResetPassword = document.getElementById('btnResetPassword');
var btnLogin = document.getElementById('btnLogin');
var btnCreateAccount = document.getElementById('btnCreateAccount');

btnResetPassword.addEventListener('click', function () {
    const email = document.getElementById('email');

    firebase.auth().sendPasswordResetEmail(email.value).then(function() {
      alert("Verifique seu e-mail");
      window.location.href = "index.html";
    }).catch(function(error) {
      alert("Erro: ", error);
    });
});

btnLogin.addEventListener('click', function () {
    window.location.href = "index.html";
});

btnCreateAccount.addEventListener('click', function () {
    window.location.href = "register.html";
});

