import React, { useState, useEffect } from "react";
import moment from "moment";

const EstimatedLifeCounter = () => {
  const [birthDate, setBirthDate] = useState("");
  const [estimatedLife, setEstimatedLife] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = moment();
      const yearsRemaining = moment(birthDate)
        .add(80, "years")
        .diff(now, "years");
      const estimatedLifeInSeconds = yearsRemaining * 31536000; // 1 year = 31536000 seconds
      setEstimatedLife(estimatedLifeInSeconds);
    }, 1000);

    return () => clearInterval(interval);
  }, [birthDate]);

  const handleBirthDateChange = (event) => {
    setBirthDate(event.target.value);
  };

  const formatTime = (seconds) => {
    const duration = moment.duration(seconds, "seconds");
    const days = duration.days();
    const hours = duration.hours();
    const minutes = duration.minutes();
    const formattedDays = days > 0 ? `${days}d ` : "";
    const formattedHours = hours > 0 ? `${hours}h ` : "";
    const formattedMinutes = minutes > 0 ? `${minutes}m ` : "";
    return formattedDays + formattedHours + formattedMinutes;
  };

  return (
    <div>
      <label htmlFor="birthDate">Fecha de Nacimiento:</label>
      <input
        type="date"
        id="birthDate"
        value={birthDate}
        onChange={handleBirthDateChange}
      />
      <div>Tiempo Estimado de Vida Restante: {formatTime(estimatedLife)}</div>
    </div>
  );
};

export default EstimatedLifeCounter;
