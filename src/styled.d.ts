import 'styled-components';

interface IPalette {
    main: string,
    contrastText: string,
}

declare module 'styled-components' {
    export interface DefaultTheme {
        borderRadius: string,

        palette: {
            common: {
                white: string,
                black: string,
                gray: string,
            },
            uncommon: {
                lightBlack: string,
                brightBlack: string,
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