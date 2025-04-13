# 🌿 Projeto Verdinho - SGO (Sistema de Gerenciamento de Ocorrências)

Este é um aplicativo de desktop desenvolvido com **Electron + React + TypeScript**, que permite o gerenciamento de ocorrências em uma interface intuitiva e leve.

## 🛠️ Tecnologias Utilizadas

- [Electron](https://www.electronjs.org/)
- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Electron Builder](https://www.electron.build/)

---

## 📦 Instalação

### 1. Clone o repositório

```bash
git clone https://github.com/arleinascimento13/ProjetoVerdinho-Desktop.git
cd ProjetoVerdinho-Desktop
```

### 2. Instale as dependências

```bash
npm install
```

> Isso instalará automaticamente as dependências do projeto principal e do frontend (React), desde que você tenha o script adequado configurado.

---

## 🔄 Atualização de Módulos

Se você deseja atualizar todas as dependências para suas últimas versões compatíveis:

```bash
npm update
```

Ou, se quiser forçar atualização para as **últimas versões disponíveis** (mesmo com quebra de compatibilidade):

```bash
npx npm-check-updates -u
npm install
```

---

## 🚀 Execução em Ambiente de Desenvolvimento

```bash
npm run dev
```

Esse comando faz:

- Build em tempo real dos arquivos Electron (`main.ts`)
- Executa o frontend com Vite (`localhost:5173`)
- Abre o app no Electron conectado ao frontend em tempo real

---

## 🏗️ Build para Produção

### 1. Gerar os arquivos prontos

```bash
npm run build
```

### 2. Empacotar o aplicativo

```bash
npm run package
```

> Isso gera uma versão instalável do aplicativo para Windows dentro da pasta `/dist`.

---

## 📁 Estrutura do Projeto

```
projeto-verdinho/
├── frontend/            # Código do React + Vite
├── electron-src/        # Código do Electron em TypeScript
├── dist-electron/       # Arquivos gerados pelo TypeScript do Electron
├── dist/                # Versão final do app empacotado
├── tsconfig.*.json      # Configurações do TypeScript
├── package.json         # Gerenciador de pacotes central
└── README.md
```

---

## 🤝 Contribuindo

1. Fork este repositório
2. Crie sua branch: `git checkout -b minha-feature`
3. Commit suas mudanças: `git commit -m 'feat: adiciona nova feature'`
4. Push para a branch: `git push origin minha-feature`
5. Abra um Pull Request

---

## 📄 Licença

Este projeto está sob a licença [MIT](LICENSE).

---

## 📬 Contato

Dúvidas, sugestões ou ideias? Me chama! 😄\
Email: `seuemail@exemplo.com`\
GitHub: [@seu-usuario](https://github.com/seu-usuario)

