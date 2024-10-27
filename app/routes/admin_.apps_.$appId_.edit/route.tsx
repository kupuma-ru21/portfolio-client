import {
  redirect,
  type LoaderFunctionArgs,
  json,
  type MetaFunction,
} from "@remix-run/node";
import i18next from "~/i18n/i18next.server";
import { createMetaTitle } from "~/utils/createMetaTitle";
import { isLoggedIn } from "~/utils/isLoggedIn";

export default function Route() {
  return <>edit app</>;
}

export const loader = async ({ request }: LoaderFunctionArgs) => {
  if (!(await isLoggedIn(request.headers.get("cookie")))) {
    return redirect("/login");
  }

  const t = await i18next.getFixedT(request, "admin_apps_app-id_edit");
  const title = t("Edit Application");
  return json({ title });
};

export const handle = { isAdmin: true, i18n: "admin_add-app" };

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  return [{ title: createMetaTitle(data?.title ?? "") }];
};
