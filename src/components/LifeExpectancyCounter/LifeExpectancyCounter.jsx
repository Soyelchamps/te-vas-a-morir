import moment from "moment";
import React, { useState, useEffect } from "react";

function LifeExpectancyCounter() {
  const [birthDate, setBirthDate] = useState(new Date("1993-10-22"));
  const [lifeExpectancy, setLifeExpectancy] = useState("");

  function calculateLifeExpectancy(bday) {
    // Calcula el tiempo estimado de vida restante en segundos.
    // Puedes usar una esperanza de vida promedio para tu país o región.
    const averageLifeExpectancy = 78; // Ejemplo para una esperanza de vida de 78 años
    const now = new Date();
    const ageInMilliseconds = now.getTime() - bday;
    const ageInSeconds = ageInMilliseconds / 1000;
    const remainingLifeInSeconds = Math.round(
      averageLifeExpectancy * 365 * 24 * 60 * 60 - ageInSeconds
    );
    setLifeExpectancy(remainingLifeInSeconds);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      calculateLifeExpectancy(birthDate.getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [birthDate]);

  return (
    <div>
      <label>
        Fecha de Nacimiento:
        <input
          type="date"
          class="flex items-center justify-between p-4 bg-gray-700 border-b border-solid border-gray-600"
          value={moment(birthDate).format("YYYY-MM-DD")}
          onChange={(event) => {
            const val = event.target.value.split("-");
            setBirthDate(new Date(val[0] * 1, val[1] * 1 - 1, val[2] * 1));
          }}
        />
      </label>
      <br />

      <p>Tiempo estimado de vida restante: {lifeExpectancy} segundos.</p>
    </div>
  );
}
//
export default LifeExpectancyCounter;