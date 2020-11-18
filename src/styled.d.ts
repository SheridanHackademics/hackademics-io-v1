import 'styled-components';

interface IPalette {
    main: string,
    contrastText: string,
}

declare module 'styled-components' {
    export interface DefaultTheme {
        borderRadius: string,
        breakpoints: {
            mobile: string,
            tablet: string,
        },
        text: {
            font: string,
        },
        palette: {
            common: {
                white: string,
                black: string,
                gray: string,
            },
            uncommon: {
                lightBlack: string,
                brightBlack: string,
                offWhite: string,
            }
            primary: {
                red: string,
                blue: string,
                yellow: string,
                green: string,
            },
            secondary: {
                red: string,
            }
        }
    }
}

declare module "*.svg" {
    const content: string;
    export default content;
}