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

// INSERIR PEDIDOS NA TABELA
$.getJSON('pedidos.json', function (pedido) {
    pedido.forEach(pedido => {
        const tr = document.createElement('tr');
        const trConteudo = `<td>${pedido.nomeProduto}</td>
                        <td>${pedido.numeroProduto}</td>
                        <td>${pedido.statusPagamento}</td>
                        <td class="${pedido.envio === 'Devolvido' ? 'erro' 
                        : pedido.envio === 'Pendente' ? 'alerta' 
                        : pedido.envio === 'Enviado' ? 'sucesso'
                        : 'primaria'}">${pedido.envio}</td>
                        <td class="primaria">Detalhes</td>`

        tr.innerHTML = trConteudo;
        document.querySelector('table tbody').appendChild(tr);
    });

});
