import {
  type ActionFunctionArgs,
  json,
  type LoaderFunctionArgs,
  type MetaFunction,
  redirect,
} from "@remix-run/node";
import { Login } from "./components/index";
import i18next from "~/i18n/i18next.server";
import { getSession } from "~/services/session.server";
import { authenticator } from "~/utils/auth.server";
import { createMetaTitle } from "~/utils/createMetaTitle";

export default function Route() {
  return <Login />;
}

export function action({ request }: ActionFunctionArgs) {
  return authenticator.authenticate("auth0", request);
}

export async function loader({ request }: LoaderFunctionArgs) {
  const session = await getSession(request.headers.get("cookie"));
  if (session.has("user")) return redirect("/admin");

  const t = await i18next.getFixedT(request, "login");
  const title = t("Login");
  return json({ title });
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  return [{ title: createMetaTitle(data?.title ?? "") }];
};

export const handle = { i18n: "login" };
