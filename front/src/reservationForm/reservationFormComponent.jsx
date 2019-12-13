import React from "react";
import _ from "lodash";

export default function ReservationFormComponent({
  handleStartDate,
  handleStartTime,
  handleEndDate,
  handleEndTime,
  handleLocation,
  handleAge,
  handleKm,
  handleSubmit,
  cities,
  selectedStartDate
}) {
  let today = new Date();
  let todayFormated = `${today.getFullYear()}-${today.getMonth() +
    1}-${today.getDate()}`;
  let tomorrowFormated = `${today.getFullYear()}-${today.getMonth() +
    1}-${today.getDate() + 1}`;
    
    return (
      <div>
      <form>
        <label htmlFor="start">Start date:</label>
        <input
          type="date"
          id="start"
          name="trip-start"
          min={todayFormated}
          max="2020-12-31"
          onChange={evt => handleStartDate(evt.target.value)}
        />
        <input
          type="time"
          onChange={evt => handleStartTime(evt.target.value)}
        />
        <label htmlFor="start">To date:</label>
        <input
          type="date"
          id="end"
          name="trip-ends"
          min={ selectedStartDate || todayFormated}
          max="2020-12-31"
          onChange={evt => handleEndDate(evt.target.value)}
        />
        <input type="time" onChange={evt => handleEndTime(evt.target.value)} />
        <label>Lugar de Retiro</label>
        <div className="input-field col s12">
          <select
            className="browser-default"
            onChange={evt => handleLocation(evt.target.value)}
  
          
          >
            {_.keys(cities).map(city => (
              <option key={city} value={cities[city]}>
                {cities[city]}
              </option>
            ))}
          </select>
        </div>
        <label>Edad</label>
        <div className="input-field col s12">
          <select
            className="browser-default"
            onChange={evt => handleAge(evt.target.value)}
          >
            <option value={1}>Mayor a 25</option>
            <option value={0}>Menor a 25</option>
          </select>
        </div>
        <label>Kilometros Diarios</label>
        <div className="input-field col s12">
          <select
            className="browser-default"
            onChange={evt => handleKm(evt.target.value)}
          >
            <option value={1}>Km Ilimitados</option>
            <option value={0}>200 Km diarios</option>
          </select>
        </div>
      </form>
      <button onClick={e => handleSubmit(e)}>Search Cars</button>
    </div>
  );
}
