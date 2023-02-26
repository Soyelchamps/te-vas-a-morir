import { now } from "moment";
import React, { useState, useEffect } from "react";

function LifeExpectancyCounter() {
  const [birthDate, setBirthDate] = useState(new Date("1993-10-22"));
  const [lifeExpectancy, setLifeExpectancy] = useState(0);

  function calculateLifeExpectancy() {
    // Calcula el tiempo estimado de vida restante en segundos.
    // Puedes usar una esperanza de vida promedio para tu país o región.
    const averageLifeExpectancy = 78; // Ejemplo para una esperanza de vida de 78 años
    const now = new Date();
    const ageInMilliseconds = now.getTime() - birthDate.getTime();
    const ageInSeconds = ageInMilliseconds / 1000;
    const remainingLifeInSeconds = Math.round(
      averageLifeExpectancy * 365 * 24 * 60 * 60 - ageInSeconds
    );
    setLifeExpectancy(remainingLifeInSeconds);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      calculateLifeExpectancy();
      console.log(lifeExpectancy);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <label>
        Fecha de Nacimiento:
        <input
          type="date"
          value={birthDate}
          onChange={(event) => setBirthDate(new Date(event.target.value))}
        />
      </label>
      <br />

      <p>Tiempo estimado de vida restante: {lifeExpectancy} segundos.</p>
    </div>
  );
}

export default LifeExpectancyCounter;
