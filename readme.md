# 📄 Gerador de Prompt — Currículo Estágio/Júnior

Uma ferramenta web gratuita que gera prompts otimizados para você usar no ChatGPT, Claude ou Gemini e turbinar seu currículo para vagas de estágio, trainee ou júnior nas principais plataformas de emprego do Brasil.

---

## ✨ Funcionalidades

- **Múltiplas plataformas** — Otimização direcionada para LinkedIn, Indeed, Catho, Gupy e Infojobs
- **Níveis de vaga** — Suporte para Estágio, Trainee, Júnior e Aprendiz
- **Prompt estruturado** — Gera um prompt profissional com método STAR, otimização ATS e resumo profissional
- **Seção LinkedIn** — Cria headline e seção "Sobre" sob medida
- **Tom e idioma configuráveis** — Português, inglês, espanhol ou bilíngue
- **Cópia com 1 clique** — Botão de copiar integrado para colar direto na IA
- **100% no navegador** — Sem backend, sem cadastro, sem dados enviados a servidores

---

## 🗂️ Estrutura do Projeto

```
/
├── index.html   # Estrutura da página e formulário
├── style.css    # Estilização (tema dark, tipografia, animações)
└── script.js    # Lógica de geração e cópia do prompt
```

---

## 🚀 Como usar

1. **Clone ou baixe** os três arquivos para uma mesma pasta
2. **Abra o `index.html`** no navegador — nenhuma dependência ou servidor necessário
3. **Preencha o formulário** com suas informações (área, cargo, skills, experiências etc.)
4. Clique em **"⚡ Gerar Prompt Agora"**
5. **Copie o prompt** gerado e cole no ChatGPT, Claude ou Gemini

---

## 📋 Campos do Formulário

| Seção | Campo | Obrigatório |
|---|---|---|
| Plataforma | Destino (LinkedIn, Indeed…) | ✅ |
| Plataforma | Nível da vaga | ✅ |
| Sobre você | Área de formação | ✅ |
| Sobre você | Cargo desejado | ✅ |
| Sobre você | Semestre / status | — |
| Sobre você | Hard skills | — |
| Sobre você | Soft skills | — |
| Experiências | Experiências / projetos | — |
| Experiências | Conquistas mensuráveis | — |
| Personalização | Tom do texto | — |
| Personalização | Foco do currículo | — |
| Personalização | Idioma | — |
| Personalização | Informações adicionais | — |

> 💡 Quanto mais campos preenchidos, mais rico e personalizado será o prompt gerado.

---

## 🛠️ Tecnologias

- **HTML5** — Estrutura semântica
- **CSS3** — Variáveis CSS, animações `@keyframes`, grid responsivo
- **JavaScript (Vanilla ES6+)** — Sem frameworks ou dependências externas
- **Google Fonts** — `Syne` (títulos) e `DM Mono` (texto)

---

## 🎨 Design

O layout segue um **tema dark** com identidade visual técnica:

- Paleta baseada em `#0b0c10` (fundo) com destaques em `#c8f04e` (verde-limão) e `#4ef0c0` (ciano)
- Grid de fundo sutil para sensação de terminal/código
- Checkboxes customizadas com estado `selected` via JavaScript
- Tipografia com fonte monoespaçada para consistência visual

---

## 📦 O que o Prompt Gerado Inclui

O prompt entregue ao usuário instrui a IA a:

1. Reescrever experiências com o **método STAR**
2. Otimizar para **sistemas ATS** com palavras-chave relevantes
3. Criar um **resumo profissional** de 3–5 linhas
4. Escrever **headline e seção "Sobre"** para o LinkedIn (quando selecionado)
5. Sugerir melhorias de **formato e estrutura**
6. Listar **5–10 palavras-chave estratégicas**
7. Entregar um **checklist final** com pontos fortes e pontos a melhorar

---

## 🌐 Compatibilidade

Funciona em qualquer navegador moderno com suporte à Clipboard API. Nenhuma instalação necessária.

---

## 📄 Licença

Distribuído de forma gratuita para uso pessoal. Sinta-se à vontade para adaptar ao seu contexto.