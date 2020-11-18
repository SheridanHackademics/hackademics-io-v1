import { DefaultTheme } from "styled-components";

export type PrimaryColor = "red"
    | "blue"
    | "yellow"
    | "green";

export const defaultTheme: DefaultTheme = {
    borderRadius: '4px',
    breakpoints: {
        mobile: '767px',
        tablet: '1080px',
        desktop: '1256px'
    },
    text: {
        font: "'Open Sans', sans-serif"
    },
    palette: {
        common: {
            white: '#FFFFFF',
            black: '#000000',
            gray: '#707070',
        },
        uncommon: {
            lightBlack: '#181818',
            brightBlack: '#212121',
            offWhite: '#F7F7FF',
        },
        primary: {
            red: '#EC4564',
            blue: '#2952E5',
            yellow: '#E2BF2D',
            green: '#0BA083',
        },
        secondary: {
            red: '#EA135B',
        }
    }
}

