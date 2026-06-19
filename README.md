# 🔋 Battery Capacity Card - Grafana HTML Graphics 2

Card minimalista para exibir a capacidade da bateria com cor de fundo dinâmica.


<img width="320" height="126" alt="image" src="https://github.com/user-attachments/assets/0a67a2b1-8e0c-466d-aacf-6668ae1e9576" />

---

## 📋 Visão Geral

Exibe o **nível da bateria em %** com o fundo do card mudando de cor conforme a faixa:


| Faixa | Cor | 
|-------|-----|
| 81–100% | 🟢 Verde `#065f46` |
| 51–80% | 🟡 Âmbar `#92400e` |
| 21–50% | 🟠 Laranja `#9a3412` |
| 0–20% | 🔴 Vermelho `#7f1d1d` |

---

## 🔧 Requisitos

- **Grafana** v8.0+
- Plugin **[HTML Graphics](https://grafana.com/grafana/plugins/marcusolsson-html-panel/)**
- Fonte de dados com o valor de capacidade da bateria (0–100) no campo `fields[1]` da primeira série

> **Nota:** O script acessa `data.series[0].fields[1]` diretamente - ajuste o índice conforme sua query.

---

## 🚀 Como Usar

1. Instale o plugin HTML Graphics:
   ```bash
   grafana-cli plugins install marcusolsson-html-panel
   ```

2. Crie um painel e selecione **HTML Graphics** como visualização.

3. Cole cada arquivo na aba correspondente do editor:

   | Arquivo | Aba |
   |---------|-----|
   | `style.css` | **CSS** |
   | `index.html` | **HTML** |
   | `script.js` | **JavaScript** |

4. Configure a query para retornar o valor numérico da bateria (0–100).
<img width="721" height="798" alt="image" src="https://github.com/user-attachments/assets/255f41bb-5b2c-4f0a-9c89-872225d5f805" />

---

## 📁 Arquivos

```
battery-capacity-card/
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## ⚙️ Personalização

Para ajustar as faixas de cor, edite o bloco condicional em `script.js`:

```js
if (percent <= 20)       card.style.background = "#7f1d1d"; // vermelho
else if (percent <= 50)  card.style.background = "#9a3412"; // laranja
else if (percent <= 80)  card.style.background = "#92400e"; // âmbar
else                     card.style.background = "#065f46"; // verde
```

Para trocar o ícone, substitua a URL na tag `<img>` no `index.html`:

```html
<img src="https://img.icons8.com/fluency/48/battery.png" />
```

---

## 📄 Licença

MIT - sinta-se livre para usar, modificar e distribuir. Se este card te ajudou e você for compartilhar em alguma rede social, blog ou fórum, considere fazer uma referência a este repositório como base. Isso ajuda a comunidade a encontrar o projeto e contribui para que mais pessoas se beneficiem da solução. 🙌 🔗
