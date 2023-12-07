import styled from "styled-components";

export const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	gap: 5rem;

	padding: 0 2rem;

	@media (max-width: 500px) {
		flex-direction: column;
		gap: 5rem;
	}
`;

export const MainInfos = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	gap: 0.5rem;

	img {
		width: 8rem;
		height: 8rem;
	}

	.descriptions {
		display: flex;
		align-items: center;
		justify-content: space-between;

		gap: 1rem;

		color: #a1a1aa;
	}
`;

export const OtherInfos = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;

	color: #a1a1aa;
`;
