import { colors } from './vars';

export const boxShadow = (val, color = colors.darkPurple) => `
    box-shadow: ${val}px ${val}px 0px ${color}
`;

export const box = () => `
    border-radius: 5px;
    box-shadow: 0px 2px 10px 0px rgba(0,0,0,0.09);
`;
