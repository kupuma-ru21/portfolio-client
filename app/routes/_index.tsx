import {
  json,
  type LoaderFunctionArgs,
  type MetaFunction,
} from "@remix-run/node";
import i18next from "~/i18next.server";
import { Header } from "~/components/header";

export async function loader({ request }: LoaderFunctionArgs) {
  const t = await i18next.getFixedT(request, "index");
  const title = t("pageTitle");
  return json({ title });
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  return [{ title: data?.title ?? "portfolio" }];
};

export default function Index() {
  return (
    <>
      <Header />
    </>
  );
}

export const handle = { i18n: "index" };
