import React from 'react';
import styles from './DaysToSummer.scss';

class DaysToSummer extends React.Component {

  getCountdownDays(){
    const currentDate = new Date();
    const year = currentDate.getUTCFullYear();
    const month = currentDate.getUTCMonth();
    const day = currentDate.getUTCDate();
    
    const fullCurrentDate = new Date(year, month, day);
    const holidayStart = new Date(year, 5, 21);
    const holidayEnd = new Date(year, 8, 23);
    if (fullCurrentDate.getTime() >= holidayStart.getTime() && fullCurrentDate.getTime() <= holidayEnd.getTime()) {
      return (
        <div className={styles.component}>Holiday time! Book your next year trip!</div>
      );
    }  else if(fullCurrentDate.getTime() >= holidayEnd.getTime()){
      const nextYearHoliday = year + 1;
      const nextYearHolidayDate = new Date(nextYearHoliday, 5, 21);
      const daysToNextYearHolidays = ((fullCurrentDate - nextYearHolidayDate)*(-1)) / (1000 * 3600 * 24);
      return (<div className={styles.component}>{daysToNextYearHolidays} days to summer!</div>);
    }
    else {
      const daysToHolidays = ((fullCurrentDate- holidayStart)*(-1)) / (1000 * 3600 * 24);
      return (<div className={styles.component}>{daysToHolidays} days to summer!</div>);
    }
  }
  render(){
    return(<div>{this.getCountdownDays()}</div>);
  }
}

export default DaysToSummer;