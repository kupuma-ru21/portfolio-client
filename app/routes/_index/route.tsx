import {
  json,
  type LoaderFunctionArgs,
  type MetaFunction,
} from "@remix-run/node";
import i18next from "~/i18n/i18next.server";
import { createMetaTitle } from "~/utils/createMetaTitle";
import { Index } from "./components/index";

export default function Route() {
  return <Index />;
}

export async function loader({ request }: LoaderFunctionArgs) {
  const t = await i18next.getFixedT(request, "index");
  const title = t("Home");
  return json({ title });
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  return [{ title: createMetaTitle(data?.title ?? "") }];
};

export const handle = { i18n: "index" };
