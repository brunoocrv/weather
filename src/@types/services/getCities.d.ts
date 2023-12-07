export type GetCitiesQueyParams = {
	name: string;
};

export type CityReturn = {
	name: string;
	localNames: unknown;
	lat: string;
	lon: string;
	country: string;
	state: string;
};

type GetCitiesQueyParams = {
	lat: string;
	lon: string;
};
