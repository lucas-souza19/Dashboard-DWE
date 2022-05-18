let logoutButton = document.getElementById('logoutButton');

logoutButton.addEventListener('click', function () {
    firebase.auth().signOut()
    .then(() => {
        alert("Usuário deslogado!");
        window.location.href = "/public/index.html";
    })
    .catch((error) => {
        console.log(error);
    });
});

function faleConosco() {
    var assunto = document.getElementById('assunto_c').value;
    var nome = document.getElementById('nome_c').value;
    var email_user = document.getElementById('email_c').value;
    var telefone = document.getElementById('tel_c').value;
    var cep = document.getElementById('cep_c').value;
    var tipo = document.getElementById('tipo_c').value;
    var comentario = document.getElementById('comentarios_c').value;

    var data = {
        assunto: assunto,
        nome: nome,
        email: email_user,
        telefone: telefone,
        cep: cep,
        tipo: tipo,
        comentario: comentario
    }

    firebase.firestore().collection("users").doc(email_user).set(data)
    .then(() => {
        alert('Contato registrado com sucesso!');
        window.location.href = "./dashboard.html";
    });
}