import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { GlobalStyle } from "./styles/global";

import { Main } from "./pages/Main";

import { WeatherProvider } from "./contexts/weatherContext";

function App() {
	const queryClient = new QueryClient();

	return (
		<WeatherProvider>
			<QueryClientProvider client={queryClient}>
				<Main />
				<GlobalStyle />
			</QueryClientProvider>
		</WeatherProvider>
	);
}

export default App;
