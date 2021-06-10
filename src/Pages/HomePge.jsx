import React, { useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { GET_WEATHER_QUERY } from "../graphql/Queries";

function HomePge() {
  const [citySearch, setCitySearch] = useState("");
  const [getWeather, { data, error }] = useLazyQuery(
    GET_WEATHER_QUERY,
    {
      variables: { name: citySearch },
    }
  );

  if (error) return <h1>There is an Error !!!!!!</h1>;

  if (data) {
    console.log(data);
  }

  return (
    <div className="home">
      <h1>Search For Weather 🌤️</h1>
      <input
        type="text"
        placeholder="City Name..."
        onChange={(e) => setCitySearch(e.target.value)}
      />
      <button onClick={() => getWeather()}>Search</button>
      
        {data && (
      <div className="weather">
          <>
            <h1>City Name: {data.getCityByName.name}</h1>
            <h1>
              Actual Temperature: {data.getCityByName.weather.temperature.actual} 
              <sup> ^</sup>
            </h1>
            <h1>Description: {data.getCityByName.weather.summary.description}</h1>
            <h1>Wind speed: {data.getCityByName.weather.wind.speed}</h1>
          </>
      </div>
        )}
        
    </div>
  );
}

export default HomePge;
