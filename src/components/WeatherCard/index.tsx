import { useContext, useEffect } from "react";

import * as S from "./styles";

import unknown from "../../assets/icons/unknown.svg";
import thunderStorm from "../../assets/icons/weather-lightning-rainy.svg";
import clearSky from "../../assets/icons/weather-clear.svg";
import fewClouds from "../../assets/icons/weather-partly-cloudy.svg";
import snow from "../../assets/icons/weather-snowy.svg";
import wind from "../../assets/icons/weather-windy.svg";
import clouds from "../../assets/icons/weather-cloudy.svg";
import rain from "../../assets/icons/weather-pouring.svg";
import showerRain from "../../assets/icons/weather-hail.svg";

import { WeatherContenxt } from "../../contexts/weatherContext";
import { useFetchForecast } from "../../modules/services/getForecast";

export function WeatherCard() {
	const { currentPlace } = useContext(WeatherContenxt);
	const { data, refetch } = useFetchForecast({
		lat: currentPlace.lat,
		lon: currentPlace.lon,
	});

	useEffect(() => {
		if (!currentPlace.otherInfos) {
			refetch();

			console.log('aqui la', data)
		}
	}, [])

	function iconResolver(weather: string) {
		switch (weather) {
			case "clear sky":
				return clearSky;
			case "few clouds":
				return fewClouds;
			case "scattered clouds":
				return clouds;
			case "broken clouds":
				return clouds;
			case "shower rain":
				return showerRain;
			case "moderate rain":
				return rain;
			case "thunderstorm":
				return thunderStorm;
			case "snow":
				return snow;
			case "mist":
				return wind;
			default:
				return unknown;
		}
	}

	if (!currentPlace.name || !currentPlace.otherInfos) {
		return <h1>Pick a city to show the forecast</h1>;
	}

	return (
		<S.Wrapper>
			<S.MainInfos>
				<h2>{currentPlace.name}</h2>
				<img
					src={iconResolver(currentPlace.otherInfos!.weather) ?? unknown}
					alt=""
				/>
				<strong>{currentPlace.otherInfos?.weather}</strong>
				<div className="descriptions">
					<span>
						Min: {currentPlace.otherInfos?.min_temp.toString().substring(0, 2)}C
					</span>
					<span>
						Max: {currentPlace.otherInfos?.max_temp.toString().substring(0, 2)}C
					</span>
				</div>
			</S.MainInfos>
			<S.OtherInfos>
				<span>
					Temp: {currentPlace.otherInfos?.temp.toString().substring(0, 2)}C
				</span>
				<span>
					Feel Like:{" "}
					{currentPlace.otherInfos?.feels_like.toString().substring(0, 2)}C
				</span>
				<span>Humidity: {currentPlace.otherInfos?.humidity}%</span>
			</S.OtherInfos>
		</S.Wrapper>
	);
}
