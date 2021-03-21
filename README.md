# Clinicas-Medicas

Sistema para gestão de agendamentos em Clínicas Médicas, projeto da disciplina de Desenvolvimento WEB 2 - BTI - UFRN.

## Dev

- Tiago Jordão

## Endpoints

- [POST]-(/user) Cadastrar novos usuários (Pacientes, Atendentes e Médicos)
- [DELETE]-(/user/id) Deletar usuários
- [GET]-(/funcionarios) Listar todos os funcionários
- [GET]-(/medicos) Listar Médicos
- [GET]-(/agenda) Listar Horários disponíveis para agendamento
- [POST]-(/consulta) Cadastrar nova consulta
- [DELETE]-(/consulta) Deletar consulta
- [GET]-(/consulta) Listar consultas marcadas
- [POST]-(/registro) Guardar registros das consultas

## Estórias

- ### Administrador

- Como administrador da Clínica preciso realizar o cadastro de novos funcionários e também listar todos eles,
bem como apagar caso ocorra o desligamento de algum deles de nosso quadro de funcionários.

- ### Médico

- Como Médico, preciso ver as consultas que foram marcadas para um determinado dia, bem como cancelar caso seja necessário,
preciso também ter a possibilidade de guardar registros sobre as consultas.

- ### Atendente

- Como Atendente, preciso ter a possibilidade de verificar a agenda de todos os médicos para ver a disponibilidade de cada um deles pois,
preciso destas informações para realizar o agendamento das novas consultas, caso haja necessidade tambem precisarei cancelar consultas marcadas
e também cadastrar novos pacientes que acabaram de chegar à clinica

[Use Case Diagram](https://github.com/tiagojordao/Clinicas-Medicas/blob/master/UCD.png)
