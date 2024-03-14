# Chat conversacional integrado com o LLAMA2
É um sistema simples de chat conversacional integrado com o modelo de linguagem **LLAMA 2** para
processar e responder entradas de texto. 

## ✨ Tecnologias utilizadas

* Node.js v20.10.0
* NPM 10.5.0
* Visual Studio code
* Postman for Windows
* Docker 

## ✨ REST Endpoint da Microsoft Azure
Com o Microsoft Azure, você pode acessar o [Llama 2](https://llama.meta.com/get-started#hosting) através dos catálogos de Modelos do Azure que é um centro para explorar coleções de modelos básicos. Neste link [Introdução do llama 2 no Azure](https://techcommunity.microsoft.com/t5/ai-machine-learning-blog/introducing-llama-2-on-azure/ba-p/3881233) é possível verificar mais detalhes a respeito da REST Endpoint utilizada 

## ✨ Utilização do Socket.IO 
Socket.IO é uma biblioteca JavaScript para comunicação bidirecional em tempo real entre clientes web e servidores. Tem duas partes: uma biblioteca do lado do cliente para navegadores e outra do lado do servidor para Node.js, possibilitando comunicação baseada em eventos em tempo real.

## ✨ Executando o sistema de chat conversacional 

#### Clone este repositório em uma pasta de sua preferência
```bash
$ git clone https://github.com/KellySoares/chat-nodejs-llama2.git
```

#### Acesse a pasta
```bash
$ cd chat-nodejs-llama2
```

#### Para acesso a REST Endpoint

Renomeie o arquivo _env.exemple para .env e edite as configurações necessárias como:
- REST_ENDPOINT (A entrada de inferência padrão do Azure ML. Este caminho é usado pela UI do AzureML.)
- CHAVE (Chave fornecida para utilização das REST Endpoint)

**Existe duas formas de execução deste sistema**
- Utilizando Docker (Recomendado)
- Direto na máquina local

#### 🎲 Executar utilizando Docker
- Porque o Docker? 
    O Docker é uma ferramenta que cria containers para separar configurações e lógica de aplicações, evitando conflitos entre elas e garantindo consistência nos ambientes de desenvolvimento, teste e produção. Ajudando a resolver o famoso problema: "Ah, na minha máquina funciona", uma vez que o ambiente de desenvolvimento será o mesmo de teste e também de produção.

- Acesse o [link](https://www.docker.com/get-started) e baixe o executável de acordo com seu Sistema Operacional.

- Para começar, registre-se no [Docker Hub](https://hub.docker.com/signup), essencial para baixar imagens e autenticar-se no Docker CLI. Em seguida, acesse o Docker instalado e faça login inserindo suas credenciais.

**Execute o codigo a seguir** 

- Criando a imagem do projeto
```bash
$ docker build -t nodejs/chatbot .
```

- Criando o container do projeto
```bash
$ docker run -p 3000:3000 -d nodejs/chatbot
```

- Pare o container do projeto (Substitua o **ID** pelo id do container criado)
```bash
$ docker stop ID
```

- Inicia o container do projeto (Substitua o **ID** pelo id do container criado)
```bash
$ docker start ID
```

#### 🎲 Executar direto na Máquina local

#### Instale as dependencias
```bash
$ npm i

```
#### Execute o projeto
```bash
$ npm start
```

 <details><summary> Detalhe do Layout </summary>
<p>

  #### Tela de Criação do Apelido do Usuário do Chat
  ![image](https://github.com/KellySoares/chat-nodejs-llama2/assets/56278384/bc598921-1c1b-47f8-99cf-d3fedea666e6)

  #### Tela do Chat
  ![image](https://github.com/KellySoares/chat-nodejs-llama2/assets/56278384/2ed61309-48b8-46ea-8c7f-2e10c6d16ced)

</details> </p>
