var axios = require('axios');
const { armazenaMsg } = require("./message")
const configEnv = require('../config/config')

module.exports = {
    chatBot: async (chat, ultimas_mensagens) => {
        let data = JSON.stringify({
            "input_data": {
                "input_string": chat,
                "parameters": {
                    "temperature": 0.9,
                    "top_p": 0.6,
                    "do_sample": true,
                    "max_new_tokens": 512
                }
            }
        });

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: configEnv.URL_ENDPOINT,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${configEnv.CHAVE}`
            },
            data: data
        };

        await axios.request(config)
            .then((response) => {
                armazenaMsg(chat, {
                    "role": "assistant",
                    "content": response.data.output
                })
                armazenaMsg(ultimas_mensagens, { msg: `<strong>Assistente Virtual diz: </strong>${response.data.output}`, tipo: 'assistant' })
            })
            .catch((error) => {
                var msg = `<strong>Assistente Virtual diz: </strong>`
                if (error.response.status == 424) msg += 'Verifique a REST Endpoint se está correta!'
                else if (error.response.status == 401) msg += 'Verifique a chave de acesso a REST Endpoint'
                else msg += JSON.stringify(error.response.data)

                armazenaMsg(ultimas_mensagens, { msg: msg, tipo: 'assistant' })
            });

    }
}
