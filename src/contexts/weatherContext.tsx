import { createContext, ReactNode, useState } from "react";

import { PlaceType } from "../@types/contexts/place";

export type WeatherContextType = {
	content: ReactNode;
	handleUpdateContent: (component: ReactNode) => void;
	currentPlace: PlaceType;
	handleUpdateCurrentPlace: (place: PlaceType) => void;
};

export const WeatherContenxt = createContext({} as WeatherContextType);

export function WeatherProvider({ children }: { children: ReactNode }) {
	const [content, setContent] = useState<ReactNode>();
	const [currentPlace, setCurrentPlace] = useState({} as PlaceType);

	function handleUpdateContent(component: ReactNode) {
		setContent(component);
	}

	function handleUpdateCurrentPlace(place: PlaceType) {
		setCurrentPlace(place);
	}

	return (
		<WeatherContenxt.Provider
			value={{
				content,
				handleUpdateContent,
				currentPlace,
				handleUpdateCurrentPlace,
			}}
		>
			{children}
		</WeatherContenxt.Provider>
	);
}
