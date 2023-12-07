import * as S from "./styles";

import { Header } from "../../components/Header";
import { Cities } from "../../components/CityCard";
import { WeatherCard } from "../../components/WeatherCard";

export function Main() {

	return (
		<S.MainWrapper>
			<Header />
			<S.MainContent>
					<WeatherCard />
			</S.MainContent>
			<Cities />
		</S.MainWrapper>
	);
}
