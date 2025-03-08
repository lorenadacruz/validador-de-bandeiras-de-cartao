# Validador de Bandeiras de Cartão

Este projeto permite identificar a bandeira de um cartão de crédito com base no número fornecido. Uma solução simples e eficiente para validação de bandeiras de cartões, ideal para integrar em sistemas de pagamento ou qualquer outro serviço que requeira essa funcionalidade.

---

## 🚀 Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript, utilizado para rodar o código do projeto.
- **npm**: Gerenciador de pacotes do Node.js, usado para instalar as dependências necessárias.
- **Jest**: Framework de testes utilizado para garantir que o código esteja funcionando corretamente.
- **Express**: Framework minimalista para a construção de APIs e servidores web.
- **Algoritmo de Luhn**: Implementado para validar o número do cartão, garantindo que o número fornecido seja válido.
- **HTML5, CSS3 e JavaScript**: Usados para a construção da interface web interativa.

---

## 🛠️ Funcionalidades

- **Identificação de Bandeiras**: O sistema identifica bandeiras populares de cartões de crédito, como Visa, MasterCard, American Express, entre outras, com base no número fornecido.
  
- **Validação do Número de Cartão**: Utiliza o **Algoritmo de Luhn** para validar o número do cartão e garantir que o número fornecido seja válido.
  
- **Validação de Formato de Cartão**: Verifica se o formato do número de cartão corresponde ao da bandeira identificada.

- **Interface Web**: A aplicação agora possui uma interface simples com input de número de cartão, um botão para validar e exibir o resultado da bandeira identificada.

- **Estilo Moderno**: A página é estilizada com um design limpo e moderno, com um fundo claro e formulário centralizado, tornando a interação mais agradável.

- **Rodando em Servidor Local**: A aplicação é executada em um servidor local na porta 3000, permitindo que você acesse a interface via navegador.

---

## 📋 Pré-requisitos

Para rodar o projeto, você precisará dos seguintes itens instalados:

- **Node.js** (versão 14 ou superior)
- **npm** (gerenciador de pacotes do Node.js)
- **Jest** (framework de testes, será instalado automaticamente ao rodar `npm install`)

---

## 🛠️ Instalação

Siga os passos abaixo para instalar e rodar o projeto localmente:

1. **Clone o repositório**

   ```bash
   git clone https://github.com/lorenadacruz/validador-de-bandeiras.git
   cd validador-de-bandeiras

2. **Instale as dependências**

    ```bash
    npm install

3. **Inicie o servidor**

    ```bash
    npm start

Isso irá iniciar o servidor na porta 3000. Acesse a aplicação em http://localhost:3000 no seu navegador.

---

## 📂 Estrutura do Projeto

A estrutura do projeto é a seguinte:

    
    validador-de-bandeiras/
    ├── src/
    │   ├── index.js        # Função principal de identificação da bandeira do cartão
    │   ├── script.js       # Código JavaScript para interatividade da página
    │   └── index.test.js   # Testes para garantir o funcionamento correto
    ├── public/
    │   ├── style.css       # Arquivo de estilos CSS
    │   └── index.html      # Arquivo HTML da página web
    ├── jest.config.js      # Configuração do Jest (framework de testes)
    └── package.json        # Informações do projeto e dependências


---

## 💡 Exemplo de Uso

No arquivo src/index.js, você encontrará a função identificarBandeiraCartao que pode ser utilizada para identificar a bandeira do cartão com base no número fornecido. Abaixo segue um exemplo básico de uso:

    const { identificarBandeiraCartao } = require('./src/index');

    // Exemplo de uso
    const numeroCartao = '4111111111111111';
    const bandeira = identificarBandeiraCartao(numeroCartao);
    console.log(`A bandeira do cartão é: ${bandeira}`);

---

## 📱 Acessando a Interface Web

Para acessar a interface, basta rodar o servidor localmente e abrir o navegador no endereço http://localhost:3000. A página apresenta um formulário simples onde você pode digitar o número do cartão e identificar a bandeira correspondente.

---

## 🎨 Estilo

O projeto conta com um design simples e moderno, utilizando um fundo azul escuro para a tela principal e um container branco para os campos de entrada, garantindo um contraste agradável para o usuário. A interface é centrada vertical e horizontalmente na página e os botões apresentam um efeito de hover para um feedback visual interativo.

## 🤝 Contribuição

Contribuições são bem-vindas! Se você tem alguma sugestão de melhoria ou encontrou algum erro, fique à vontade para abrir um issue ou enviar um pull request. Aqui estão algumas formas de contribuir:

- Relatar bugs ou problemas.

- Propor novas funcionalidades.

- Melhorar a documentação.

---

## 📜 Licença

Este projeto está licenciado sob a licença **MIT**. Veja o arquivo [LICENSE](./LICENSE) para mais detalhes.


    Esse código é o formato de um arquivo `README.md` que pode ser utilizado em um repositório GitHub ou qualquer outra plataforma de controle de versões. Ele descreve o projeto de forma clara, incluindo detalhes de instalação, uso, estrutura do projeto, e contribuição.
