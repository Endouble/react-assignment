import { colors } from './vars';

export const boxShadow = (val, color = colors.darkPurple) => `
    box-shadow: ${val}px ${val}px 0px ${color}
`;

export const formElement = () => `
    box-shadow: 0px -5px 0px ${colors.darkPurple};
    color: ${colors.darkPurple};
    margin-right: 15px;
    border-radius: 10px;
    border: none;
    padding: 10px;
`;


export const boldBorders = () => `
    border-left: 30px solid ${colors.darkPurple};
    border-right: 30px solid ${colors.darkPurple};
`;
