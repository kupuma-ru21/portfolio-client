import {
  redirect,
  type LoaderFunctionArgs,
  json,
  type MetaFunction,
} from "@remix-run/node";
import i18next from "~/i18n/i18next.server";
import { getSession } from "~/services/session.server";
import { createMetaTitle } from "~/utils/createMetaTitle";

export default function Route() {
  return <>edit app</>;
}

export const loader = async ({ request }: LoaderFunctionArgs) => {
  // TODO: refactor
  const session = await getSession(request.headers.get("cookie"));
  if (!session.has("user")) return redirect("/login");

  const t = await i18next.getFixedT(request, "admin_apps_app-id_edit");
  const title = t("Edit Application");
  return json({ title });
};

export const handle = { isAdmin: true, i18n: "admin_add-app" };

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  return [{ title: createMetaTitle(data?.title ?? "") }];
};
