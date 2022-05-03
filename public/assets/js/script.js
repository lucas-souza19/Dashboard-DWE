const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const aleteraTema = document.querySelector(".alterar-tema");

// EXIBIR MENU
menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
});

// OCULTAR MENU
closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
});

// ALTERAR TEMA
aleteraTema.addEventListener('click', () => {
    document.body.classList.toggle('modo-escuro-variaveis');
    aleteraTema.querySelector('span:nth-child(1)').classList.toggle('active');
    aleteraTema.querySelector('span:nth-child(2)').classList.toggle('active');
});

// ATUALIZAR LUCRO
document.addEventListener('DOMContentLoaded', function (evento) {
    if (document.getElementById('vendas')) {
        var vendas = document.getElementById('vendas').textContent.replace("R$", "");
        var compras = document.getElementById('compras').textContent.replace("R$", "");
        var calculo = vendas.replace(',', '.') + ' - ' + compras.replace(',', '.');
        var porcent = eval('((' + vendas.replace(',', '.') + '/' + compras.replace(',', '.') + ') * 100) - 100').toFixed(0).replace(".", ",");

        document.getElementById('retorno_lucro').textContent = "R$" + eval(calculo).toFixed(2).replace(".", ",");
        document.getElementById('porcentagem_lucro').textContent = porcent + "%";
    }
});

// INSERIR PEDIDOS NA TABELA
(function pedidosJson() {
    let url = "https://dashboard-dwe2-default-rtdb.firebaseio.com/Pedidos.json";

    fetch(url).then(response => response.json())
        .then(pedidos => {
            createTable(pedidos);
        });
})();

function createTable(pedidos) {
    
    pedidos.forEach(pedidos => {
        let tr = document.createElement('tr');

        let td1 = document.createElement('td');
        td1.textContent = pedidos.nomeProduto;

        tr.append(td1);

        let td2 = document.createElement('td');
        td2.textContent = pedidos.statusPagamento;

        tr.append(td2);

        let td3 = document.createElement('td');
        td3.textContent = pedidos.envio;
        td3.classList = pedidos.envio === 'Devolvido' ? 'erro' : pedidos.envio === 'Pendente' ? 'alerta' : pedidos.envio === 'Enviado' ? 'sucesso' : 'primaria'

        tr.append(td3);

        let td4 = document.createElement('td');
        td4.textContent = "Detalhes";
        td4.classList = "primaria"

        tr.append(td4);

        document.querySelector('table tbody').appendChild(tr);
    });
}

pedidosJson();