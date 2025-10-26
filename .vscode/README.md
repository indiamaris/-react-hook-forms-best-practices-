# Configuração do VS Code

Este diretório contém as configurações do VS Code para o projeto.

## 🚀 Auto-formatação ao salvar

Quando você salvar um arquivo (`Ctrl/Cmd + S`), o código será automaticamente:
1. ✅ Formatado pelo Prettier
2. ✅ Corrigido pelo ESLint

## 📋 Extensões recomendadas

O arquivo `extensions.json` lista as extensões necessárias. O VS Code pedirá para instalá-las quando você abrir o projeto.

### Essenciais
- **Prettier** (`esbenp.prettier-vscode`) - Formata o código
- **ESLint** (`dbaeumer.vscode-eslint`) - Analisa o código e corrige erros

### Opcionais
- **Tailwind CSS** - Se usar Tailwind no futuro
- **TypeScript** - Melhor suporte ao TypeScript

## ⚙️ Configurações ativas

Veja `settings.json` para as configurações completas.

### Principais
- `editor.formatOnSave: true` - Formata ao salvar
- `editor.codeActionsOnSave.source.fixAll.eslint: "explicit"` - Corrige ESLint ao salvar
- `editor.defaultFormatter: "esbenp.prettier-vscode"` - Usa Prettier como formatador padrão

## 🎯 Como funciona

```
Você salva o arquivo (Ctrl/Cmd + S)
           ↓
    Prettier formata o código
           ↓
    ESLint corrige problemas
           ↓
    Arquivo pronto! ✨
```

## 🐛 Problemas?

Se a formatação não ocorrer automaticamente:

1. Verifique se as extensões estão instaladas
2. Abra e feche o VS Code
3. Verifique se `editor.formatOnSave` está ativado em `File > Preferences > Settings`

## 📝 Testar

1. Abra qualquer arquivo `.tsx` ou `.ts`
2. Quebre a formatação (ex: remova ponto e vírgula)
3. Salve o arquivo (`Ctrl/Cmd + S`)
4. Verifique se foi corrigido automaticamente!

