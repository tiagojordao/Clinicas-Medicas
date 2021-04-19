import { Op } from "sequelize";
import Appointment from "../models/AppointmentModel";

import { startOfDay, endOfDay, setHours, setMinutes, setSeconds, format, isAfter } from 'date-fns';


class ScheduleController {
    async index(req, res) {
        const { date } = req.query;

        if (!date){
            return res.status(400).json({ error: 'Data Inválida!' });
        }

        const reqDate = Number(date);

        const appointments = await Appointment.findAll({
            where: {
                doctor_id: req.params.docId,
                canceled_at: null,
                date: {
                    [Op.between]: [startOfDay(reqDate), endOfDay(reqDate)],
                },
            },
        });

        const schedule = ['08:00', '09:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00', '17:00'];

        const available = schedule.map(time => {
            const [hour, minute] = time.split(':');
            const value = setSeconds(setMinutes(setHours(reqDate,hour),minute),0);

            return {
                time,
                value: format(value, "yyyy-MM-dd'T'HH:mmssxxx"),
                available: isAfter(value, new Date()) && !appointments.find(a => format(a.date, 'HH:mm') === time),
            };
        });
    return res.json(available);
    }
}

export default new ScheduleController();