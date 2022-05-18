const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const aleteraTema = document.querySelector(".alterar-tema");
var arr_pedidos = [];

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

        var x =  (315 * porcent) / 100;
        x = 315 - parseInt(x);
        $('circle').attr('stroke-dashoffset', x);
    }
});

document.addEventListener("DOMContentLoaded", function(event) {

    // INSERIR PEDIDOS NA TABELA
    (function pedidosJson() {
        let url = "https://dashboard-dwe2-default-rtdb.firebaseio.com/Pedidos.json";

        fetch(url).then(response => response.json())
            .then(pedidos => {
                createTable(pedidos);
            });
    })();

    // INSERIR PESSOAS NA TABELA
    (function pessoasJson() {
        let url2 = "https://dashboard-dwe2-default-rtdb.firebaseio.com/Pessoas.json";

        fetch(url2).then(response => response.json())
            .then(pessoas => {
                createAtt(pessoas, arr_pedidos);
            });

    })();
})

function createTable(pedidos) {

    for (let i = 0; i < pedidos.length; i++) {
        let tr = document.createElement('tr');

        let td1 = document.createElement('td');
        td1.textContent = pedidos[i].nomeProduto;
        arr_pedidos[i] = pedidos[i].nomeProduto;

        tr.append(td1);

        let td2 = document.createElement('td');
        td2.textContent = pedidos[i].numeroProduto;

        tr.append(td2);

        let td3 = document.createElement('td');
        td3.textContent = pedidos[i].statusPagamento;

        tr.append(td3);

        let td4 = document.createElement('td');
        td4.textContent = pedidos[i].envio;
        td4.classList = pedidos[i].envio === 'Devolvido' ? 'erro' : pedidos[i].envio === 'Pendente' ? 'alerta' : pedidos[i].envio === 'Enviado' ? 'sucesso' : 'primaria'

        tr.append(td4);

        let td5 = document.createElement('td');
        td5.textContent = "Detalhes";
        td5.classList = "primaria"

        tr.append(td5);

        document.querySelector('table tbody').appendChild(tr);
    };
}

function createAtt(pessoas, pedidos) {

    for (let i = 0; i < pessoas.length; i++) {
        let div1 = document.createElement('div');
        div1.classList.add("atualizacao");

        let div2 = document.createElement('div');
        div2.classList.add("foto-perfil");

        let img = document.createElement('img');
        img.setAttribute('src', '../images/if_icon.png');
        div2.append(img);

        div1.append(div2);

        let div3 = document.createElement('div');

        let p = document.createElement('p');
        p.textContent = pessoas[i].nome + " recebeu o pedido de " + pedidos[i];
        div3.append(p);

        let small = document.createElement('small');
        small.classList.add('legenda');
        small.textContent = (i + 2*i) + " Minutos Atrás;"
        div3.append(small);

        div1.append(div3);

        document.getElementById('att').appendChild(div1);

        if (i > 2) {    
            break;
        }
    }
}

function botoesHeader(action) {
    switch (action) {
        case 'perfil':

            var box_aberta = false;
            exibir = true;

            if (document.getElementById('opcoes_perfil').style.display === 'block') {
                box_aberta = true;
                exibir = false;
            }

            document.getElementById('opcoes_perfil').style.display = 'block'

            if (box_aberta === true) {
                document.getElementById('opcoes_perfil').style.display = 'none';
            }

            break;

        default:
            break;
    }
}