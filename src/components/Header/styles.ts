import styled, { css } from "styled-components";

export const Wrapper = styled.header`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 1rem;
	margin-bottom: 2rem;

	> div {
		display: flex;
		align-items: center;
		justify-content: center;

		gap: 0.5rem;
	}

	.searchWrapper {
		display: flex;
		align-items: center;
		justify-content: center;

		button {
			background: transparent;
			border: none;

			cursor: pointer;

			transition: color 0.3s;
			:hover {
				opacity: 0.7;
			}
		}
	}
`;

export const ToggleThemeButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;

	background: transparent;
	border: none;

	cursor: pointer;

	width: 1.5rem;
	height: 1.5rem;
`;

export const TextField = styled.div<{ $hasClose: boolean }>`
	display: flex;
	align-items: center;
	justify-content: space-between;
	background: #e5e7eb;

	border-radius: 8px;
	padding: 0.5rem;

	input,
	button {
		background: transparent;
		border: none;
		outline: none;
	}

	button {
		display: flex;
		margin: 0 auto;

		cursor: pointer;
	}

	${({ $hasClose }) => css`
		button {
			visibility: ${$hasClose ? 'visible' : 'hidden'};
		}
	`}
`;
