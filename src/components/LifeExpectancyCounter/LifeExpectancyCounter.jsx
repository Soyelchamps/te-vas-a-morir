import moment from "moment";
import React, { useState, useEffect } from "react";

function LifeExpectancyCounter() {
  const [birthDate, setBirthDate] = useState(new Date("1987-01-26"));
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
    //const remainingLifeInSeconds = Math.round(averageLifeExpectancy);
    setLifeExpectancy(remainingLifeInSeconds);
  }

  function secondsToString(seconds) {
    const numyears = Math.floor(seconds / 31556926);
    const numdays = Math.floor((seconds % 31556926) / 86400);
    const numhours = Math.floor((seconds % 86400) / 3600);
    const numminutes = Math.floor(((seconds % 86400) % 3600) / 60);
    const numseconds = ((seconds % 86400) % 3600) % 60;

    return (
      numyears +
      " años " +
      numdays +
      " dias " +
      numhours +
      " horas " +
      numminutes +
      " minutos " +
      numseconds +
      " segundos"
    );
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

      <p>Tiempo estimado de vida restante: </p>
      <p> {secondsToString(lifeExpectancy)}</p>
      <p className="text-xs mt-3">
        La vida es corta es momento de vivirla, escribe debajo tus mas grandes
        sueños. Te vas a morir y no puedes hacer nada al respecto sobre eso.
        Pero si puedes actuar hoy mismo, conquistado tus mas grandes metas.
      </p>
    </div>
  );
}

export default LifeExpectancyCounter;
