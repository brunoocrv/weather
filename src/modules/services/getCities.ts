/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { GetCitiesQueyParams } from "../../@types/services/getCities";

const QUERY_KEY = ["getCities"];

const fetchCities = async (params: GetCitiesQueyParams) => {
	const response = await axios.get(
		`http://api.openweathermap.org/geo/1.0/direct?q=${
			params.name
		}&limit=${18}&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`
	);

	return response.data;
};

export function useFetchCities(params: GetCitiesQueyParams) {
	return useQuery<any, Error>({
		queryKey: QUERY_KEY,
		queryFn: () => fetchCities(params),
	});
}
