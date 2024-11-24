"use strict";
const agendamentoForm = document.getElementById("agendamento-form");
const pacienteInput = document.getElementById("paciente");
const dataInput = document.getElementById("data");
const horarioInput = document.getElementById("horario");
const agendamentoList = document.getElementById("agendamento-list");
function salvarAgendamento(agendamento) {
    const agendamentos = JSON.parse(localStorage.getItem("agendamentos") || "[]");
    agendamentos.push(agendamento);
    localStorage.setItem("agendamentos", JSON.stringify(agendamentos));
}
function carregarAgendamentos() {
    const agendamentos = JSON.parse(localStorage.getItem("agendamentos") || "[]");
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
        const novoAgendamento = { paciente, data, horario };
        salvarAgendamento(novoAgendamento);
        carregarAgendamentos();
        agendamentoForm.reset();
    }
});
carregarAgendamentos();
