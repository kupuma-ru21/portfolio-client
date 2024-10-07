import { ChakraProvider } from "@chakra-ui/react";
import {
  json,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import {
  MetaFunction,
  LinksFunction,
  LoaderFunctionArgs,
} from "@remix-run/node"; // Depends on the runtime you choose
import i18next from "~/i18next.server";
import { useTranslation } from "react-i18next";
import { useChangeLanguage } from "remix-i18next/react";

export const meta: MetaFunction = () => {
  return [
    { charSet: "utf-8" },
    { title: "New Remix App" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
  ];
};

export const links: LinksFunction = () => {
  return [
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    { rel: "preconnect", href: "https://fonts.gstatic.com" },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap",
    },
  ];
};

export async function loader({ request }: LoaderFunctionArgs) {
  const locale = await i18next.getLocale(request);
  return json({ locale });
}

export const handle = {
  // In the handle export, we can add a i18n key with namespaces our route
  // will need to load. This key can be a single string or an array of strings.
  // TIP: In most cases, you should set this to your defaultNS from your i18n config
  // or if you did not set one, set it to the i18next default namespace "translation"
  i18n: "common",
};

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

export default function App() {
  return (
    <Document>
      <ChakraProvider>
        <Outlet />
      </ChakraProvider>
    </Document>
  );
}
