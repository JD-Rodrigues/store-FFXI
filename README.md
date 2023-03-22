<p align="center">
  <img width=150 src="https://raw.githubusercontent.com/JD-Rodrigues/store-FFXI/main/Front-end/public/logo-readme.png" />
</p>

## 📋 Descrição:
<p>Kampler Store é um e-commerce de itens e serviços in-game do jogo Final Fantasy XI Online.</p>
<p> 🟢 Live do projeto: <a href="https://store-ffxi.vercel.app">clique aqui.</a></p><br>
<div align="center"><img  src="https://github.com/JD-Rodrigues/store-FFXI/blob/main/Front-end/public/screenshots/kampler-store-demo-desktop.gif?raw=true" /></div><br>
<section style="display:flex;justify-content:center; column-gap:20px;">
  <img style="max-width:300px" src="https://raw.githubusercontent.com/JD-Rodrigues/store-FFXI/main/Front-end/public/screenshots/kampler-store-mobile-home.png" >
  <img style="max-width:300px" src="https://raw.githubusercontent.com/JD-Rodrigues/store-FFXI/main/Front-end/public/screenshots/kampler-store-mobile-menu.png" >
  <img style="max-width:300px" src="https://raw.githubusercontent.com/JD-Rodrigues/store-FFXI/main/Front-end/public/screenshots/kampler-store-mobile-item-description.png" >
</section>

## 🎯 Motivação:
A aplicação atenderá à demanda de um cliente.

## 🛠️ Funcionalidades já desenvolvidas:
- Painel de gerenciamento de conteúdo onde o administrador pode cadastrar novos produtos, alterar informações dos itens ou removê-los.
- Login de usuário utilizando a conta Google.
- Adicionar e remover itens do carrinho, bem como alterar a quantidade.
- Itens adicionados ao carrinho permanecem salvos para as futuras sessões, até a compra ser efetivada ou serem removidos pelo usuário.
- As páginas dos produtos e categorias são estáticas, geradas a cada nova atualização do conteúdo, o que proporciona ao usuário uma rápida navegação.

## ⛏️ Funcionalidades em desenvolvimento:
- Checkout via Paypal.
- Envio de e-mail de notificação para o administrador após a realização de cada transação.
- Histórico de compras mostrado na área do usuário.
- Modais de confirmação para adicionar e remover itens do carrinho.
- Histórico de todas as transações para acesso do administrador.
- Indicador da quantidade de itens adicionados ao carrinho posicionado sobre o ícone do cart.
- Links das redes sociais nos ícones do rodapé.
- Migração do back-end para hospedagem paga, a fim de manter a disponibilidade da aplicação, sem hibernação.
  
## 🔭 Tecnologias utilizadas até o presente momento:
__React__ - biblioteca Javascript utilizada na componentização da interface.

__NextJs__ - framework do React utilizado na geração de páginas estáticas para o conteúdo.

**Typescript** - utilizado na tipagem de dados, visando melhora a experiência de desenvolvimento por reduzir os erros no processo de codificação.

**Sass** - pré-processador utilizado para otimizar a escrita de CSS tornando o código mais reutilizável, bem como e organizar as folhas de estilo. 

**Prismic CMS** - usado para armazenar os dados dos produtos (incluindo mídias) e disponibilizá-los através de uma API RESTful, para serem exibidos pela interface. Também permite ao administrador gerenciar todo o conteúdo da aplicação. 

**Node JS** - ambiente de desenvolvimento utilizado para rodar Javascript do lado do servidor.

**Express JS** - framework do Node JS utilizado na construção da API Rest, que permite a comunicação entre a interface e o banco de dados, para troca de informações sobre usuários, carrinhos de compra e transações.

**MongoDB Atlas** - serviço de banco de  baserado em nuvem, utilizado para armazenar as informações sobre os usuários e seus respectivos carrinhos de compra, bem como as transações realizadas.

**React OAuth Google** - biblioteca que permite fornecer ao usuário a autenticação utilizando sua conta Google.

**uuid** - biblioteca utilizada na geração de ids randômicos para as transações.

**Styled Icons** - biblioteca de ícones

**JWT Decode** - biblioteca utilizada na decodificação do token JWT obtido do Google com as informações do usuário para cadastro e login.


## 🟡 Status do projeto:
Em desenvolvimento - Atualmente, estou trabalhando na implementação do checkout.


## ⚠️ Observação importante:
O parte back-end relacionada ao login de usuários está hospedada em um serviço gratuito, que hiberna após certo tempo sem uso. Por isso, ao realizar o login pela primeira vez, pode acontecer de demorar até 15 segundos.


    