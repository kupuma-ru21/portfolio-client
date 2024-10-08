import { extendTheme } from "@chakra-ui/react";

const styles = { global: { "html, body": { overscrollBehavior: "none" } } };

const config = { initialColorMode: "light", useSystemColorMode: false };

export const theme = extendTheme({ styles, config });
