import styled, { css } from "styled-components";

export const CitiesWrapper = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	align-items: center;
	justify-content: start;
	align-content: center;
	flex-wrap: wrap;
	overflow: auto;

	gap: 2rem;

	margin-top: 5rem;
	padding: 2rem 2rem;

	@media (max-width: 900px) {
		padding: 0 1rem;
		grid-template-columns: 1fr;

		> div {
			width: 100%;
		}
	}
`;

export const Button = styled.button<{ $isSelected: boolean }>`
		width: 100%;
		display: flex;
		align-items: center;
		flex-direction: column;

		gap: 0.5rem;

		padding: 0.5rem 1rem;

		background: transparent;
		border: 1px solid #d9d9d9;
		border-radius: 8px;

		cursor: pointer;

		${props => props.$isSelected && css`
			background: #2563eb;
			color: #27272a;
		`}
`
