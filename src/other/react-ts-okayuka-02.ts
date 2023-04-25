// import { themeStyles } from "./react-ts-okayuka-02";
// export const themeStyles = {
//   light: {
//     foreground: "#000",
//     background: "#eee",
//   },
//   dark: {
//     foreground: "#fff",
//     background: "#222",
//   },
// };

// type temp = typeof themeStyles;
// /*
// type temp = {
//     light: {
//         foreground: string;
//         background: string;
//     };
//     dark: {
//         foreground: string;
//         background: string;
//     };
// }
// */

// export type ThemeID = keyof typeof themeStyles; // "light" | "dark"

// type ValueOf<T> = T[keyof T];

// type ThemeStyle = ValueOf<typeof themeStyles>;
// /*
// type ThemeStyle = {
//     foreground: string;
//     background: string;
// } | {
//     foreground: string;
//     background: string;
// }
// */

// export interface ThemeContext {
//   themeID: ThemeID;
//   themeStyle: ThemeStyle;
//   toggleItem: () => void;
// }
