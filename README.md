# 🌟 Projeto Studio Ghibli

Bem-vindo ao **Projeto Studio Ghibli**! 🎥✨ Este projeto utiliza a [API pública do Studio Ghibli](https://ghibliapi.vercel.app/#) para trazer à vida os personagens e histórias mágicas do Studio Ghibli. Explore informações detalhadas sobre os personagens e mergulhe no universo encantador dos filmes!

---

## 🚀 Funcionalidades

- 📜 **Listagem de personagens**: Veja todos os personagens dos filmes do Studio Ghibli.
- 🔍 **Detalhes dos personagens**: Informações como nome, idade, gênero, cor dos olhos e cabelo.
- 📱 **Design responsivo**: Compatível com dispositivos móveis e desktops.
- ♻️ **Componentes reutilizáveis**: Estrutura modular para fácil manutenção.

---

#F294A5 – Rosa claro

#E36A97 – Rosa médio/vibrante

#D1F8E6 – Verde menta claro

#F9F3B7 – Amarelo pastel

#FFFDD6 – Creme clarinho / Amarelo muito suave

## 🛠️ Tecnologias Utilizadas

As principais tecnologias usadas neste projeto são:

- ![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white) **Next.js**: Framework React para desenvolvimento de aplicações web.
- ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white) **TailwindCSS**: Framework CSS para estilização.
- ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) **JavaScript**: Linguagem de programação principal.
- ![API](https://img.shields.io/badge/API-Studio%20Ghibli-FF5733?style=for-the-badge) **API do Studio Ghibli**: Fonte de dados para os personagens.

---

## 📦 Estrutura do Projeto

- **`src/app`**: Contém as páginas e estilos globais.
- **`src/components`**: Componentes reutilizáveis como Header, Footer e Card.
- **`public`**: Arquivos estáticos como imagens e fontes.
- **`styles`**: Arquivos CSS para estilização.

---

## 🖥️ Como Executar o Projeto

### Pré-requisitos

Certifique-se de ter o **Node.js** instalado em sua máquina. Você pode baixá-lo [aqui](https://nodejs.org/).

### Passos

1. Clone o repositório:

   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd Studio-Ghibli-1
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

4. Abra [http://localhost:3000](http://localhost:3000) no navegador para visualizar o projeto.

---

## 🌐 API Utilizada

Este projeto utiliza a [API pública do Studio Ghibli](https://ghibliapi.vercel.app/#) para obter informações sobre os personagens. A API fornece dados como nome, idade, gênero, cor dos olhos e cor do cabelo.

### Exemplo de Requisição

```javascript
fetch("https://ghibliapi.vercel.app/people")
  .then((response) => response.json())
  .then((data) => console.log(data));
```

---

## 🔮 Melhorias Futuras

- 🗺️ Adicionar páginas para exibir informações sobre filmes e locais.
- 📊 Implementar paginação na listagem de personagens.
- ♿ Melhorar a acessibilidade do site.
- 🌟 Adicionar animações para uma experiência mais imersiva.

---

## 📜 Licença

Este projeto é apenas para fins educacionais e não possui fins comerciais. Todos os direitos sobre os dados e imagens pertencem ao Studio Ghibli.

---

## 💻 Desenvolvido por

Feito por **Ana Beatriz de Souza de Oliveira**.

---
🎨 *"A arte de criar é tão mágica quanto os filmes do Studio Ghibli!"*