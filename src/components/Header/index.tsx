import { useContext, useEffect, useState } from "react";

import * as S from "./styles";

import { useFetchWeatherCity } from "../../modules/services/getWeatherCity";
import { PlaceType, WeatherContenxt } from "../../contexts/weatherContext";

import closeIcon from "../../assets/icons/close-circle.svg";

export function Header() {
	const [currentTime, setCurrentTime] = useState<string>("");
	const [currentValue, setCurrentValue] = useState<string>("");

	const { handleUpdateCurrentPlace } = useContext(WeatherContenxt);
	const { data, refetch } = useFetchWeatherCity({ name: currentValue });

	useEffect(() => {
		setInterval(getCurrentTime, 1000);
	}, []);

	useEffect(() => {
		if (data) {
			const newPlace: PlaceType = {
				name: data.name,
				lat: data.coord.lat.toString(),
				lon: data.coord.lon.toString(),
				otherInfos: {
					weather: data.weather[0].description,
					feels_like:data.main.feels_like,
					humidity: data.main.humidity,
					temp: data.main.temp,
					min_temp: data.main.temp_min,
					max_temp: data.main.temp_max,
					sunrise: data.sys.sunrise,
					sunset: data.sys.sunset
				}
			};

			handleUpdateCurrentPlace(newPlace);
		}
	}, [data]);

	const getCurrentTime = () => {
		const date = new Date();

		const formattedDate = new Intl.DateTimeFormat("pt-BR", {
			hour: "2-digit",
			minute: "2-digit",
		}).format(date);

		setCurrentTime(formattedDate);
	};

	return (
		<S.Wrapper>
			<strong>{currentTime}</strong>
			<div className="searchWrapper">
				<S.TextField $hasClose={!!currentValue}>
					<input
						type="text"
						placeholder="Search"
						value={currentValue}
						onChange={(event) => setCurrentValue(event.target.value)}
					/>
					<button onClick={() => setCurrentValue("")}>
						<img src={closeIcon} alt="Clear the input content" />
					</button>
				</S.TextField>
				<button
					onClick={() => {
						refetch();
						setCurrentValue("");
					}}
					className="search"
				>
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
						className="lucide lucide-search"
					>
						<circle cx="11" cy="11" r="8" />
						<path d="m21 21-4.3-4.3" />
					</svg>
				</button>
			</div>
		</S.Wrapper>
	);
}
