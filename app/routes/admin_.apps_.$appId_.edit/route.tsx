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

const I18N = "admin_apps_app-id_edit";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  if (!(await isLoggedIn(request.headers.get("cookie")))) {
    return redirect("/login");
  }

  const t = await i18next.getFixedT(request, I18N);
  const title = t("Edit Application");
  return json({ title });
};

export const handle = { isAdmin: true, i18n: I18N };

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  return [{ title: createMetaTitle(data?.title ?? "") }];
};
