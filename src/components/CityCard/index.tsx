import { useContext } from "react";

import * as S from "./styles";

import { useFetchCities } from "../../modules/services/getCities";
import { WeatherContenxt } from "../../contexts/weatherContext";

import { CityReturn } from "../../@types/services/getCities";

export function Cities() {
	const { data, isLoading, error } = useFetchCities({ name: "London" });
	const { currentPlace, handleUpdateCurrentPlace } =
		useContext(WeatherContenxt);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Please, try again...</div>;
	}

	return (
		<S.CitiesWrapper>
			{data &&
				data.map((item: CityReturn) => (
					<S.Button
						key={item.name + Math.random()}
						$isSelected={
							item.lat === currentPlace.lat && item.lon === currentPlace.lon
						}
						onClick={() => {
							console.log(item)
							handleUpdateCurrentPlace({
								name: item.name,
								state: item.state,
								lat: item.lat,
								lon: item.lon,
							});
						}}
					>
						<strong>{item.name}</strong>
						<span>{item.state}</span>
					</S.Button>
				))}
		</S.CitiesWrapper>
	);
}
