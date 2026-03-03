/* ----- TOGGLE VISUAL DAS CHECKBOXES ----- */
document.querySelectorAll('.check-label').forEach(label => {
  const input = label.querySelector('input');

  label.addEventListener('click', () => {
    setTimeout(() => {
      label.classList.toggle('selected', input.checked);
    }, 10);
  });
});

/* ----- HELPERS ----- */
// Retorna os valores das checkboxes marcadas dentro de um container
function getChecked(containerId) {
  return Array.from(document.querySelectorAll(`#${containerId} input:checked`))
    .map(i => i.value);
}

// Retorna o valor de um campo pelo id, sem espaços extras
function val(id) {
  return document.getElementById(id).value.trim();
}

/* ----- GERAÇÃO DO PROMPT ----- */
function gerarPrompt() {
  // Leitura dos campos de seleção
  const plataformas = getChecked('platforms');
  const niveis      = getChecked('levels');
  const focos       = getChecked('foco');

  // Leitura dos campos de texto
  const area         = val('area')         || '[sua área de formação]';
  const semestre     = val('semestre');
  const cargo        = val('cargo')        || '[cargo desejado]';
  const skills       = val('skills');
  const softskills   = val('softskills');
  const experiencias = val('experiencias');
  const conquistas   = val('conquistas');
  const tom          = val('tom');
  const idioma       = val('idioma');
  const extras       = val('extras');

  // Formatação dos valores compostos
  const plataformaStr = plataformas.length ? plataformas.join(' e ') : 'LinkedIn';
  const nivelStr      = niveis.length      ? niveis.join(' / ')      : 'Estágio';
  const focoStr       = focos.length       ? focos.join(', ')        : 'otimização geral';

  // Montagem do prompt
  let prompt = `Você é um especialista em recrutamento e marketing pessoal, com ampla experiência em otimizar currículos e perfis profissionais para plataformas de emprego como ${plataformaStr}.

Preciso que você melhore e otimize o meu currículo para vagas de ${nivelStr} na área de ${cargo}. Siga as instruções abaixo com precisão:

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📋 CONTEXTO SOBRE MIM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Área de formação: ${area}${semestre ? `\n• Situação acadêmica: ${semestre}` : ''}
• Vaga/cargo desejado: ${cargo}
• Nível da vaga: ${nivelStr}
• Plataforma(s) de destino: ${plataformaStr}${skills ? `\n• Hard skills: ${skills}` : ''}${softskills ? `\n• Soft skills: ${softskills}` : ''}`;

  if (experiencias) {
    prompt += `\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
💼 MINHAS EXPERIÊNCIAS E PROJETOS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${experiencias}`;
  }

  if (conquistas) {
    prompt += `\n\n• Conquistas / resultados mensuráveis: ${conquistas}`;
  }

  prompt += `\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎯 O QUE PRECISO QUE VOCÊ FAÇA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Com base nas informações acima, realize as seguintes tarefas:

1. ✅ REESCREVA as descrições das minhas experiências usando o método STAR (Situação, Tarefa, Ação, Resultado) com foco em: ${focoStr}.

2. ✅ OTIMIZE para sistemas ATS: inclua palavras-chave relevantes para a vaga de ${cargo} que passem pelos filtros automáticos de recrutamento.

3. ✅ CRIE um RESUMO PROFISSIONAL de 3 a 5 linhas, em tom ${tom}, que desperte interesse imediato do recrutador.${plataformas.includes('LinkedIn') ? `

4. ✅ ESCREVA uma HEADLINE atraente para o LinkedIn (máx. 220 caracteres) e uma seção "Sobre" completa e envolvente de 3 a 4 parágrafos.` : ''}

5. ✅ SUGIRA melhorias no formato e estrutura do currículo para aumentar chances de chamada.

6. ✅ LISTE 5 a 10 palavras-chave estratégicas para incluir no perfil de ${plataformaStr}.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⚙️ DIRETRIZES DE FORMATAÇÃO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Idioma: ${idioma}
• Tom: ${tom}
• Use verbos de ação no início de cada bullet point (ex: desenvolveu, implementou, criou, reduziu…)
• Seja específico e mensurável sempre que possível
• Evite jargões genéricos como "proativo", "dinâmico" sem contexto
• Adapte o vocabulário ao nível ${nivelStr} — não exagere na senioridade${extras ? `\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n📌 INFORMAÇÕES ADICIONAIS\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n${extras}` : ''}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Ao final, apresente um CHECKLIST com os pontos que precisam de atenção no meu currículo atual e indique o que está forte e o que precisa melhorar.`;

  // Exibe o resultado na tela
  const outputSection = document.getElementById('output-section');
  const outputEl      = document.getElementById('prompt-output');

  outputEl.textContent = prompt;
  outputSection.style.display = 'block';
  outputSection.scrollIntoView({ behavior: 'smooth', block: 'start' });

  // Reseta o botão de cópia
  const btnCopy = document.getElementById('btn-copy');
  btnCopy.textContent = 'Copiar prompt';
  btnCopy.classList.remove('copied');
}

/* ----- CÓPIA PARA CLIPBOARD ----- */
function copiarPrompt() {
  const text = document.getElementById('prompt-output').textContent;

  navigator.clipboard.writeText(text).then(() => {
    const btn = document.getElementById('btn-copy');
    btn.textContent = '✓ Copiado!';
    btn.classList.add('copied');

    setTimeout(() => {
      btn.textContent = 'Copiar prompt';
      btn.classList.remove('copied');
    }, 2500);
  });
}

/* ----- EVENT LISTENERS (Desacoplamento do HTML) ----- */
document.getElementById('btn-generate').addEventListener('click', gerarPrompt);
document.getElementById('btn-copy').addEventListener('click', copiarPrompt);