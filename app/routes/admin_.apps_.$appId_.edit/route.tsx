import {
  redirect,
  type LoaderFunctionArgs,
  json,
  type MetaFunction,
  type ActionFunctionArgs,
} from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getFragmentData } from "gql/fragment-masking";
import { AppDocument, AppFragmentDoc, UpdateAppDocument } from "gql/graphql";
import { EditApp } from "./components/index";
import i18next from "~/i18n/i18next.server";
import { createMetaTitle } from "~/utils/createMetaTitle";
import { get500ErrorResponse } from "~/utils/error/get500ErrorResponse";
import { apolloClient } from "~/utils/graphql";
import { isLoggedIn } from "~/utils/isLoggedIn";

export default function Route() {
  const data = useLoaderData<typeof loader>();
  const app = data.app;
  return <EditApp app={{ ...app, ...getFragmentData(AppFragmentDoc, app) }} />;
}

const I18N = "admin_apps_app-id_edit";

export const loader = async ({ request, params }: LoaderFunctionArgs) => {
  if (!(await isLoggedIn(request.headers.get("cookie")))) {
    return redirect("/login");
  }

  const {
    data: { app },
    error,
  } = await apolloClient.query({
    query: AppDocument,
    variables: { id: params.appId || "" },
  });
  if (error) throw get500ErrorResponse(error);

  const t = await i18next.getFixedT(request, I18N);
  const title = t("Edit Application");
  return json({ title, app });
};

export const action = async ({ request, params }: ActionFunctionArgs) => {
  const formData = await request.formData();

  const { errors } = await apolloClient.mutate({
    mutation: UpdateAppDocument,
    variables: {
      id: params.appId || "",
      title: String(formData.get("title")),
      detail: String(formData.get("detail")),
      imageUrl: String(formData.get("imageUrl")),
      link: String(formData.get("link")),
      linkType: String(formData.get("linkType")),
    },
  });
  if (errors) throw get500ErrorResponse(errors[0]);
  return redirect("/admin");
};

export const handle = { isAdmin: true, i18n: I18N };

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  return [{ title: createMetaTitle(data?.title ?? "") }];
};
