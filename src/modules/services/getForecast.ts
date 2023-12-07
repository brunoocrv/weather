/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const QUERY_KEY = ["getForecast"];

const fetchForecast = async (params: GetForecastQueyParams) => {
	const getForecast = await axios.get(
		`https://api.openweathermap.org/data/2.5/weather?lat=${params.lat}&lon=${params.lon}&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`
	);

	return getForecast.data;
};

export function useFetchForecast(params: GetForecastQueyParams) {
	return useQuery<any, Error>({
		queryKey: QUERY_KEY,
		queryFn: () => fetchForecast(params),
		enabled: false,
	});
}
