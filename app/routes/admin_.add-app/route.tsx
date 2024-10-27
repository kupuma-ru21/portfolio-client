import {
  type ActionFunctionArgs,
  redirect,
  type LoaderFunctionArgs,
  json,
  type MetaFunction,
} from "@remix-run/node";
import { CreateAppDocument } from "gql/graphql";
import { AddApp } from "./components/index";
import i18next from "~/i18n/i18next.server";
import { getSession } from "~/services/session.server";
import { createMetaTitle } from "~/utils/createMetaTitle";
import { get500ErrorResponse } from "~/utils/error/get500ErrorResponse";
import { apolloClient } from "~/utils/graphql";

export default function Route() {
  return <AddApp />;
}

export const loader = async ({ request }: LoaderFunctionArgs) => {
  // TODO: refactor
  const session = await getSession(request.headers.get("cookie"));
  if (!session.has("user")) return redirect("/login");

  const t = await i18next.getFixedT(request, "admin_add-app");
  const title = t("Add Application");
  return json({ title });
};

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();

  const { errors } = await apolloClient.mutate({
    mutation: CreateAppDocument,
    variables: {
      title: String(formData.get("title")),
      detail: String(formData.get("detail")),
      imageUrl: String(formData.get("imageUrl")),
      link: String(formData.get("link")),
      linkType: String(formData.get("linkType")),
    },
  });
  if (errors) throw get500ErrorResponse(errors[0]);
  return redirect("/");
};

export const handle = { isAdmin: true, i18n: "admin_add-app" };

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  return [{ title: createMetaTitle(data?.title ?? "") }];
};
