import React, { useState } from 'react';
import moment from 'moment';
import Icon from '@mdi/react';

import 'moment/locale/fr';
import { mdiCalendar } from '@mdi/js';
moment.locale('fr');

const CalendarPicker = () => {
    const [selectedDates, setSelectedDates] = useState(null);
    const [selectedDays, setSelectedDays] = useState([]);
    const [showDates, setShowDates] = useState(false);

    const handleDateChange = (e) => {
        let newDates = selectedDates ? [...selectedDates] : null
        console.log(newDates)
        if (newDates == null) {
            newDates = [e.target.id, e.target.id]
            setSelectedDates(newDates)
        } else {
            if (e.target.id > selectedDates[1]) {
                newDates[1] = e.target.id
                setSelectedDates(newDates)
            } else {
                newDates[0] = e.target.id
                setSelectedDates(newDates)
            }
        }
    };

    const disabledDate = (date) => {
        // disable dates before today
        return date && date < moment().startOf('day');
    };

    const [month1, setMonth1] = useState(moment());
    const [month2, setMonth2] = useState(moment().add(1, 'month'));

    const previousMonth = () => {
        setMonth1(month1.clone().subtract(2, 'month'));
        setMonth2(month2.clone().subtract(2, 'month'));
    };

    const nextMonth = () => {
        setMonth1(month1.clone().add(2, 'month'));
        setMonth2(month2.clone().add(2, 'month'));
    };

    const renderCalendar = (month) => {
        const daysInMonth = month.daysInMonth();
        const monthStart = month.clone().startOf('month');
        const monthEnd = month.clone().endOf('month');
        const startDate = monthStart.startOf('week');
        const endDate = monthEnd.endOf('week');
        const rows = [];

        let days = [];
        let day = startDate;
        while (day <= endDate) {
            for (let i = 0; i < 7; i++) {
                const isDisabled = disabledDate(day);
                day = day.clone().add(1, 'day');
                const isSelected = selectedDates != null && selectedDates[0] && selectedDates[1] && day > moment(selectedDates[0], 'DD-MM-YYYY') && day < moment(selectedDates[1], 'DD-MM-YYYY');
                const isCurrentMonth = day.isSame(month, 'month');
                const isLimit = selectedDates != null && selectedDates[1] == day.format('DD-MM-YYYY') || selectedDates != null && selectedDates[0] == day.format('DD-MM-YYYY')
                days.push(
                    <td
                        key={day.format('DD-MM-YYYY')}
                        id={day.format('DD-MM-YYYY')}
                        className={`${isDisabled ? 'disabled' : ''} ${isSelected ? 'selected' : ''} ${isLimit ? 'limitDate' : ''} ${!isCurrentMonth ? 'outside' : ''}`}
                        onClick={(e) => handleDateChange(e)}
                    >
                        {isCurrentMonth ? day.format('D') : ''}
                    </td>
                );
            }
            rows.push(<tr key={day.format('DD-MM-YYYY')}>{days}</tr>);
            days = [];
        }
        return (
            <table className="calendar">
                <thead>
                    <tr>
                        <th colSpan="7" className='titleMonth'>{month.format('MMMM YYYY')}</th>
                    </tr>
                    <tr>
                        <th>Lun</th>
                        <th>Mar</th>
                        <th>Mer</th>
                        <th>Jeu</th>
                        <th>Ven</th>
                        <th>Sam</th>
                        <th>Dim</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    };

    return (
        <div className='ctn-depart position-relative'>
            <div className='typeButton' onClick={() => setShowDates(true)}>
                <Icon path={mdiCalendar}
                    size={1}
                    horizontal
                    vertical
                    color="#565656" />
                {selectedDates ? selectedDates[0] : "Arrivée"}
            </div>
            <div className='typeButton' onClick={() => setShowDates(true)}>
                <Icon path={mdiCalendar}
                    size={1}
                    horizontal
                    vertical
                    color="#565656" />
                {selectedDates ? selectedDates[1] : "Départ"}
            </div>
            <div id='calendar' style={{display: showDates ? "block" : 'none'}}>
                <div className='calendar-title'>
                    Choisissez 2 dates
                </div>
                <div className="calendar-header">
                    <div onClick={previousMonth}>{'<'}</div>
                    <div onClick={nextMonth}>{'>'}</div>
                </div>
                <div className="calendar-container">
                    <div className="calendar-wrapper">{renderCalendar(month1)}</div>
                    <div className="calendar-wrapper">{renderCalendar(month2)}</div>
                </div>
            </div>
        </div>
    );
};

export default CalendarPicker;