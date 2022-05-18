let btnCharge = document.getElementById('btnCharge');
let btnLogout = document.getElementById('btnLogout');
let btnDeleteAccount = document.getElementById('btnDeleteAccount');

setTimeout(chargeUser, 3000);

btnLogout.addEventListener('click', function () {
    firebase.auth().signOut()
    .then(() => {
        alert("Usuário deslogado!");
        window.location.href = "index.html";
    })
    .catch((error) => {
        console.log(error);
    });
});

btnDeleteAccount.addEventListener('click', function () {
    const user = firebase.auth().currentUser;
    console.log(user.email);

    firebase.firestore().collection("users").doc(user.email).delete().then(() => {
        console.log("Deletado do BD");
        
        firebase.auth().currentUser.delete().then(function() {
            alert("Usuário deletado!");
            window.location.href = "index.html";
        }).catch(function(error) {
            alert(error);
        });
        
    }).catch((error) => {
        console.error("Erro BD: ", error);
    });


});

btnCharge.addEventListener('click', function () {
    chargeUser();
});

function chargeUser() {
    const user = firebase.auth().currentUser;
    console.log(user.email);

    firebase.firestore().collection("users").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            if(doc.id == user.email) {
                let divUser = document.getElementById('userData');
                divUser.innerText = '';

                let h1 = document.createElement('h1');
                let h2 = document.createElement('h2');
    
                h1.innerHTML = doc.data().name;
                h2.innerHTML = doc.data().age;
    
                divUser.appendChild(h1);
                divUser.appendChild(h2)
            }
        });
    });
}