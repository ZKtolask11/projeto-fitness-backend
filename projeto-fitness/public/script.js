document.addEventListener("DOMContentLoaded", function () {
    // Função para mostrar o treino, usando o dia selecionado pelo usuário
    window.showWorkout = function () {
      const result = document.getElementById("result");
      const goal = document.getElementById("goal").value;
      const day = document.getElementById("day").value;
      const savedWorkout = localStorage.getItem(`treino_${goal}_${day}`);
  
      if (savedWorkout) {
        result.innerHTML = `
          <h2>Treino Personalizado (${day})</h2>
          <ul>${savedWorkout.split("\n").map(item => `<li>${item}</li>`).join("")}</ul>
        `;
      } else {
        const treinosMassa = {
          "segunda": ["Supino reto - 4x10", "Agachamento com barra - 4x12", "Rosca direta - 3x10"],
          "terça": ["Desenvolvimento - 4x10", "Afundo - 3x12", "Remada curvada - 3x10"],
          "quarta": ["Barra fixa - 3x8", "Levantamento terra - 4x6", "Paralelas - 3x10"],
          "quinta": ["Supino inclinado - 4x10", "Leg press - 4x12", "Rosca martelo - 3x12"],
          "sexta": ["Puxada frente - 4x10", "Agachamento sumô - 4x12", "Tríceps testa - 3x10"],
          "sábado": ["Circuito funcional - 3 voltas", "Pliometria - 4x8", "Abdômen completo - 3x20"],
          "domingo": ["Descanso ou alongamento leve"]
        };
  
        const treinosEmagrecer = {
          "segunda": ["HIIT - 20min", "Agachamento - 3x20", "Abdominal - 3x20"],
          "terça": ["Corrida - 30min", "Flexão - 3x15", "Prancha - 3x30s"],
          "quarta": ["Bicicleta - 40min", "Polichinelo - 3x50", "Afundo - 3x15"],
          "quinta": ["Jump treino - 30min", "Burpee - 3x10", "Agachamento - 3x20"],
          "sexta": ["Circuito aeróbico - 4 voltas", "Escada - 10min", "Prancha lateral - 3x30s"],
          "sábado": ["Treino livre", "Alongamento geral", "Mobilidade"],
          "domingo": ["Descanso ou caminhada leve - 20min"]
        };
  
        const treinoDia = goal === "massa" ? treinosMassa[day] : treinosEmagrecer[day];
  
        result.innerHTML = `
          <h2>Treino Padrão (${day})</h2>
          <ul>${treinoDia.map(ex => `<li>${ex}</li>`).join("")}</ul>
        `;
      }
    };
  
    // Função para mostrar a dieta, usando o dia selecionado pelo usuário
    window.showDiet = function () {
      const result = document.getElementById("result");
      const goal = document.getElementById("goal").value;
      const day = document.getElementById("day").value;
      const savedDiet = localStorage.getItem(`dieta_${goal}_${day}`);
  
      if (savedDiet) {
        result.innerHTML = `
          <h2>Dieta Personalizada (${day})</h2>
          <ul>${savedDiet.split("\n").map(item => `<li>${item}</li>`).join("")}</ul>
        `;
      } else {
        const dietasMassa = {
          "segunda": ["Café: Vitamina + ovos", "Almoço: Arroz + frango + batata", "Jantar: Macarrão + carne"],
          "terça": ["Café: Panqueca de aveia", "Almoço: Feijão + carne + abóbora", "Jantar: Omelete com legumes"],
          "quarta": ["Café: Iogurte + granola", "Almoço: Arroz + frango + salada", "Jantar: Sanduíche natural"],
          "quinta": ["Café: Ovos mexidos + pão", "Almoço: Batata doce + frango", "Jantar: Arroz integral + ovos"],
          "sexta": ["Café: Shake de banana", "Almoço: Macarrão integral + carne", "Jantar: Sopa de legumes + frango"],
          "sábado": ["Livre, mas nutritivo"],
          "domingo": ["Livre, com controle de porções"]
        };
  
        const dietasEmagrecer = {
          "segunda": ["Café: Chá + ovos", "Almoço: Arroz + salada + carne magra", "Jantar: Sopa leve"],
          "terça": ["Café: Frutas + café preto", "Almoço: Salada + frango grelhado", "Jantar: Omelete de legumes"],
          "quarta": ["Café: Iogurte natural", "Almoço: Arroz integral + carne", "Jantar: Wrap de frango"],
          "quinta": ["Café: Suco verde", "Almoço: Feijão + legumes + frango", "Jantar: Salada com ovos"],
          "sexta": ["Café: Panqueca de banana", "Almoço: Quinoa + peixe + legumes", "Jantar: Caldo verde light"],
          "sábado": ["Flexível e saudável"],
          "domingo": ["Refeição leve e balanceada"]
        };
  
        const dietaDia = goal === "massa" ? dietasMassa[day] : dietasEmagrecer[day];
  
        result.innerHTML = `
          <h2>Dieta Padrão (${day})</h2>
          <ul>${dietaDia.map(refeicao => `<li>${refeicao}</li>`).join("")}</ul>
        `;
      }
    };
  
    // Função para salvar treino personalizado
    window.saveCustomWorkout = function () {
      const goal = document.getElementById("goal").value;
      const day = document.getElementById("day").value;
      const customWorkout = prompt("Digite seu treino personalizado para " + day + ":\n(Use linhas separadas para cada exercício)");
      if (customWorkout) {
        localStorage.setItem(`treino_${goal}_${day}`, customWorkout);
        alert("Treino salvo com sucesso para " + day + "!");
      }
    };
  
    // Função para salvar dieta personalizada
    window.saveCustomDiet = function () {
      const goal = document.getElementById("goal").value;
      const day = document.getElementById("day").value;
      const customDiet = prompt("Digite sua dieta personalizada para " + day + ":\n(Use linhas separadas para cada refeição)");
      if (customDiet) {
        localStorage.setItem(`dieta_${goal}_${day}`, customDiet);
        alert("Dieta salva com sucesso para " + day + "!");
      }
    };
  
    // Função para apagar os dados salvos para o dia
    window.clearData = function () {
      const goal = document.getElementById("goal").value;
      const day = document.getElementById("day").value;
      localStorage.removeItem(`treino_${goal}_${day}`);
      localStorage.removeItem(`dieta_${goal}_${day}`);
      alert(`Treino e dieta apagados para ${day}!`);
    };
  });
  