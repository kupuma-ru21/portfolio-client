import { Box, ChakraProvider } from "@chakra-ui/react";
import { type LinksFunction, type LoaderFunctionArgs } from "@remix-run/node"; // Depends on the runtime you choose
import {
  json,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import { useTranslation } from "react-i18next";
import { useChangeLanguage } from "remix-i18next/react";
import i18next from "~/i18n/i18next.server";
import { Header } from "./components/header/index";
import { SideBar } from "./components/side-bar";
import { SIDE_BAR_WIDTH } from "./components/side-bar/constants";
import { theme } from "./styles";

export default function App() {
  return (
    <Document>
      <ChakraProvider theme={theme}>
        <Header />
        <SideBar />
        <Box w={{ base: undefined, md: `calc(100dvw - ${SIDE_BAR_WIDTH}px)` }}>
          <Outlet />
        </Box>
      </ChakraProvider>
    </Document>
  );
}

export async function loader({ request }: LoaderFunctionArgs) {
  const locale = await i18next.getLocale(request);
  return json({ locale });
}

interface DocumentProps {
  children: React.ReactNode;
}

const Document = ({ children }: DocumentProps) => {
  // Get the locale from the loader
  const { locale } = useLoaderData<typeof loader>();
  const { i18n } = useTranslation();

  useChangeLanguage(locale);

  return (
    <html lang={locale} dir={i18n.dir()}>
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,maximum-scale=1"
        />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
};

export const links: LinksFunction = () => {
  return [
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    { rel: "preconnect", href: "https://fonts.gstatic.com" },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap",
    },
    { rel: "icon", href: "/favicon.ico" },
  ];
};
