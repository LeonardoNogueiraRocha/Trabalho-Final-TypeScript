const agendamentoForm = document.getElementById("agendamento-form") as HTMLFormElement;
const pacienteInput = document.getElementById("paciente") as HTMLInputElement;
const dataInput = document.getElementById("data") as HTMLInputElement;
const horarioInput = document.getElementById("horario") as HTMLInputElement;
const agendamentoList = document.getElementById("agendamento-list") as HTMLUListElement;


type Agendamento = {
  paciente: string;
  data: string;
  horario: string;
};


function salvarAgendamento(agendamento: Agendamento) {
  const agendamentos = JSON.parse(localStorage.getItem("agendamentos") || "[]");
  agendamentos.push(agendamento);
  localStorage.setItem("agendamentos", JSON.stringify(agendamentos));
}


function carregarAgendamentos() {
  const agendamentos: Agendamento[] = JSON.parse(localStorage.getItem("agendamentos") || "[]");
  agendamentoList.innerHTML = ""; // Limpa a lista
  agendamentos.forEach((agendamento) => {
    const li = document.createElement("li");
    li.textContent = `Paciente: ${agendamento.paciente}, Data: ${agendamento.data}, Horário: ${agendamento.horario}`;
    agendamentoList.appendChild(li);
  });
}


agendamentoForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const paciente = pacienteInput.value.trim();
  const data = dataInput.value.trim();
  const horario = horarioInput.value.trim();

  if (paciente && data && horario) {
    const novoAgendamento: Agendamento = { paciente, data, horario };
    salvarAgendamento(novoAgendamento);
    carregarAgendamentos();
    agendamentoForm.reset();
  }
});


carregarAgendamentos();
