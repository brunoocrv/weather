export type PlaceType = {
	name: string;
	state?: string;
	lat: string;
	lon: string;
	otherInfos?: {
		weather: string
		min_temp: number
		max_temp: number
		temp: number
		feels_like: number
		humidity: number
		sunrise: number
		sunset: number
	}
};