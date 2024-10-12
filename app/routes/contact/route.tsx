import {
  type ActionFunctionArgs,
  json,
  type LoaderFunctionArgs,
  type MetaFunction,
} from "@remix-run/node";
import i18next from "~/i18n/i18next.server";
import { createMetaTitle } from "~/utils/createMetaTitle";
import { Contact } from "./components/index";

export default function Route() {
  return <Contact />;
}

export async function action({ request }: ActionFunctionArgs) {
  const body = await request.formData();
  return { email: String(body.get("email")) };
}

export async function loader({ request }: LoaderFunctionArgs) {
  const t = await i18next.getFixedT(request, "contact");
  const title = t("Contact");
  return json({ title });
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  return [{ title: createMetaTitle(data?.title ?? "") }];
};

export const handle = { i18n: "contact" };
