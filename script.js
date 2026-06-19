const valueEl = htmlNode.getElementById('battery_value');
const card = htmlNode.getElementById('battery_card');

// 🔥 campo correto do Zabbix
const valueField = data.series[0]?.fields[1];

if (valueEl && valueField) {

  const length = valueField.values.length;

  if (length > 0) {

    // 🔥 pega o último valor (correto)
    const lastValue = valueField.values.get(length - 1);

    if (lastValue !== null && lastValue !== undefined) {

      const percent = Math.round(lastValue);

      valueEl.textContent = percent + "%";

      // 🎨 cor dinâmica do card
      if (percent <= 20) {
        card.style.background = "#7f1d1d"; // vermelho escuro
      } 
      else if (percent <= 50) {
        card.style.background = "#9a3412"; // laranja
      } 
      else if (percent <= 80) {
        card.style.background = "#92400e"; // amarelo escuro
      } 
      else {
        card.style.background = "#065f46"; // verde
      }

    } else {
      valueEl.textContent = "--%";
    }

  } else {
    valueEl.textContent = "--%";
  }

} else {
  console.log("Sem dados do Grafana");
}
