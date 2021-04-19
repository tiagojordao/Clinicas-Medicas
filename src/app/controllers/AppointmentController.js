import { Op } from 'sequelize';

import Appointment from '../models/AppointmentModel';
import User from '../models/UserModel';

class AppointmentController {
    async index (req, res) {
        const user_id = req.body.user_id;

        const appointments = await Appointment.findAll({
            where: {
                [Op.or]: [
                    { doctor_id: user_id },
                    { patient_id: user_id },
                ],
                canceled_at: null,
            },
            
        });

        return res.json(appointments);
    }

    async store (req, res) {
        const { doctor_id, patient_id, date } = req.body;

        const isDoctor = await User.findOne({ where: { id: doctor_id, position: 'MEDICO' } });
        const isPatient = await User.findOne({ where: { id: patient_id, position: 'PACIENTE' } });

        if(!isDoctor){
            return res.status(401).json({ error: 'Médico não encontrado!' });
        }
        if(!isPatient){
            return res.status(401).json({ error: 'Paciente não encontrado!' });
        }

        const appointment = await Appointment.create({
            doctor_id,
            patient_id,
            date,
        });

        return res.json(appointment);
    }

    async delete (req, res) {
        const appointment = await Appointment.findByPk(req.params.id);

        if(!appointment){
            return res.status(404).json({ error: 'Consulta não encontrada!' });
        }

        appointment.canceled_at = new Date();

        await appointment.save();

        return res.status(200).json(appointment);
    }

    async update (req, res) {
        const appointment = await Appointment.findByPk(req.params.id);

        if(!appointment){
            return res.status(404).json({ error: 'Consulta não encontrada!' });
        }

        await appointment.update(req.body);

        return res.status(200).json(appointment);
    }
}

export default new AppointmentController();