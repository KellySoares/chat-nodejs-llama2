const { chatBot } = require("./chatbot");
const { armazenaMsg } = require("./message")
var ultimas_mensagens = [];
var usuario = [];
var chat = [];

module.exports = {
    msgSocket: (http) => {
        const io = require('socket.io')(http);
        io.on('connection', (socket) => {

            socket.on("entrar", function (apelido) {

                socket.apelido = apelido;
                usuario[apelido] = socket;

                var mensagem = socket.apelido + " acabou de entrar na sala";
                var obj_mensagem = { msg: mensagem, tipo: 'sistema' };

                io.sockets.emit("atualizar mensagens", obj_mensagem);
                armazenaMsg(ultimas_mensagens, obj_mensagem);


            });

            socket.on("disconnect", function () {
                delete usuario[socket.apelido];
                var mensagem = `${socket.apelido} saiu da sala`;
                var obj_mensagem = { msg: mensagem, tipo: 'sistema' };

                io.sockets.emit("atualizar mensagens", obj_mensagem);
                armazenaMsg(ultimas_mensagens, obj_mensagem);
            });


            socket.on('mensagem', async (mensagem) => {
                const response = `<strong>${socket.apelido} diz:</strong> ${mensagem}`;
                var obj_mensagem = { msg: response, tipo: 'user' };

                socket.emit('enviar mensagem', obj_mensagem);
                armazenaMsg(ultimas_mensagens, obj_mensagem);

                armazenaMsg(chat, {
                    "role": "user",
                    "content": mensagem
                })
                await chatBot(chat, ultimas_mensagens)
                socket.emit('enviar mensagem', ultimas_mensagens[ultimas_mensagens.length - 1]);

            });
        });
    }
}