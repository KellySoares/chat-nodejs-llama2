const socket = io();
const inputMsg = document.getElementById('inputMsg');
const enviaMsg = document.getElementById('enviaMsg');
const mensagens = document.getElementById('mensagens');
const login = document.getElementById('login');
const apelido = document.getElementById('apelido');
apelido.addEventListener('keypress', (e) => {
    if (e.keyCode == 13) {
        e.preventDefault();
        login.click();
    }
});

login.addEventListener('click', () => {
    const apelido = document.getElementById('apelido');
    socket.emit("entrar", apelido.value);

    $("#acesso_usuario").hide();
    $("#sala_chat").show();
});

inputMsg.addEventListener('keypress', (e) => {
    if (e.keyCode == 13) {
        e.preventDefault();
        enviaMsg.click();
    }
});

enviaMsg.addEventListener('click', () => {

    const message = inputMsg.value;
    socket.emit('mensagem', message);
    inputMsg.value = '';
});

socket.on('enviar mensagem', (dados) => {
    const messageElementDiv = document.createElement('div');
    messageElementDiv.className = dados.tipo;
    const messageElement = document.createElement('p');
    messageElement.innerHTML = dados.msg;

    const elementDivImg = document.createElement('div');
    elementDivImg.className = 'circle'

    const messageElementImg = document.createElement('img');
    var url = ''
    if (dados.tipo == 'assistant') url = '../img/chatbot.gif'
    else url = '../img/user.png'
    messageElementImg.src = url
    elementDivImg.appendChild(messageElementImg);

    messageElementDiv.appendChild(elementDivImg);
    messageElementDiv.appendChild(messageElement);

    mensagens.appendChild(messageElementDiv);

});

socket.on("atualizar mensagens", function (dados) {
    const messageElement = document.createElement('p');
    messageElement.innerText = dados.msg;
    messageElement.classList = dados.tipo
    mensagens.appendChild(messageElement);
});
