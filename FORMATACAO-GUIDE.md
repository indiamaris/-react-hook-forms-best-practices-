# Guia de Formatação e Lint

Este guia explica como o Prettier e ESLint estão configurados no projeto e como usá-los.

## 📋 O que foi configurado

### 1. **Prettier** - Formatador de Código
Arquivo `.prettierrc` com configurações:
- Aspas simples (`singleQuote: true`)
- Ponto e vírgula obrigatório (`semi: true`)
- Largura da linha: 80 caracteres
- Indentação: 2 espaços
- Trailing commas para melhor diff em git

### 2. **ESLint** - Analisador de Código
Integrado com Prettier para evitar conflitos de regras.

### 3. **Arquivos ignorados** (`.prettierignore`)
- `node_modules`
- Arquivos de build (`dist`, `build`)
- Arquivos do OS (`.DS_Store`)
- Lock files

## 🚀 Scripts disponíveis

### Verificar código sem corrigir
```bash
npm run lint          # Verifica erros de ESLint
npm run format:check  # Verifica formatação do Prettier
npm run check         # Verifica ambos (lint + format)
```

### Corrigir automaticamente
```bash
npm run lint:fix      # Corrige erros de ESLint automaticamente
npm run format        # Formata arquivos com Prettier
npm run fix           # Corrige ESLint e formata com Prettier
```

## 📝 Como usar

### 1. Durante o desenvolvimento
Os editores modernos (VSCode, WebStorm, etc.) podem formatar automaticamente ao salvar.

**✅ Já configurado!** Os arquivos `.vscode/settings.json` e `.vscode/extensions.json` foram criados.

**Para ativar no VS Code:**
1. Instale as extensões recomendadas (o VS Code pedirá automaticamente)
2. Salve qualquer arquivo (`Ctrl/Cmd + S`)
3. O Prettier e ESLint rodarão automaticamente!

**Extensões necessárias:**
- `esbenp.prettier-vscode` - Prettier
- `dbaeumer.vscode-eslint` - ESLint

**Se preferir configurar manualmente:**
Veja o arquivo `.vscode/settings.json` criado na raiz do projeto.

### 2. Antes de fazer commit
```bash
npm run fix
```

### 3. Em CI/CD
```bash
npm run check  # Falhará se houver erros
```

## ⚙️ Configurações

### Prettier (`.prettierrc`)
```json
{
  "semi": true,
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2,
  "arrowParens": "always",
  "endOfLine": "lf",
  "bracketSpacing": true
}
```

### ESLint
- Usa as configurações do `eslint.config.js`
- Integrado com Prettier (sem conflitos)
- Regras para React Hooks
- TypeScript strict mode

## 🔍 Arquivos formatados
- `**/*.{ts,tsx}` - Arquivos TypeScript/React
- `**/*.{css}` - Arquivos CSS
- `**/*.{js,json}` - JavaScript e JSON

## 💡 Dicas

1. **Sempre rode `npm run fix` antes de commitar**
2. **Configure seu editor** para formatar ao salvar
3. **Use `npm run check` no CI** para garantir qualidade
4. **Mantenha as configurações** do Prettier e ESLint consistentes

## 🐛 Problemas comuns

### Erro: "Delete ⏎"
**Solução:** O arquivo tem uma linha em branco extra. Execute `npm run fix`.

### Erro: "Insert `;`"
**Solução:** Faltou ponto e vírgula. Execute `npm run fix`.

### Conflito entre Prettier e ESLint
**Já resolvido!** O `eslint-config-prettier` desabilita regras conflitantes do ESLint.

## 📚 Mais informações

- [Prettier Docs](https://prettier.io/docs/en/)
- [ESLint Docs](https://eslint.org/docs/latest/)
- [TypeScript ESLint](https://typescript-eslint.io/)

