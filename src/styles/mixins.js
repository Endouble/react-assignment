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

export const globalStyles = `
    ul, ol {
        list-style: none;
        padding: 0;
    }
    * {
        font-family: 'Roboto';
        box-sizing: border-box;
    }
    .body--frozen {
        overflow: hidden;
    }

    #root {
        max-width: 1200px;
        margin: 0 auto;
    }
`;
