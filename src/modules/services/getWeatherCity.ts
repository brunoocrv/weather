/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import { GetCitiesQueyParams } from "../../@types/services/getCities";

const QUERY_KEY = ["getCity"];

const fetchWeatherCity = async (params: GetCitiesQueyParams) => {
	const { data } = await axios.get(
		`http://api.openweathermap.org/geo/1.0/direct?q=${params.name}&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`
	);

	const newParams = {
		lat: data[0].lat,
		lon: data[0].lon,
	};

	const getWeather = await axios.get(
		`https://api.openweathermap.org/data/2.5/weather?lat=${newParams.lat}&lon=${newParams.lon}&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`
	);

	console.log(getWeather.data)

	return getWeather.data;
};

export function useFetchWeatherCity(params: GetCitiesQueyParams) {
	return useQuery<any, Error>({
		queryKey: QUERY_KEY,
		queryFn: () => fetchWeatherCity(params),
		enabled: false,
	});
}
