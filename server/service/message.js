

module.exports = {
    armazenaMsg: function (ultimas_mensagens, mensagem) {
        ultimas_mensagens.push(mensagem);
        return ultimas_mensagens;
    }
};