const form = document.getElementById('form-contato');
const contatos = [];

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputTelefoneContato = document.getElementById('telefone-contato');

    if (contatos.some(contato => contato.nome === inputNomeContato.value)) {
        alert(`O contato ${inputNomeContato.value} já foi inserido`);
    } else if (contatos.some(contato => contato.telefone === inputTelefoneContato.value)) {
        alert(`O número de telefone: ${inputTelefoneContato.value} já foi cadastrado`);
    } else {
        contatos.push({ nome: inputNomeContato.value, telefone: inputTelefoneContato.value.toString() });
    }

    inputNomeContato.value = '';
    inputTelefoneContato.value = '';
}

function atualizaTabela() {
    const tbody = document.getElementById('tabela-contatos');
    tbody.innerHTML = contatos.map(contato => `
        <tr>
            <td>${contato.nome}</td>
            <td>${contato.telefone}</td>
        </tr>
    `).join('');
}
