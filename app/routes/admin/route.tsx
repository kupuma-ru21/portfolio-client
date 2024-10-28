import {
  type ActionFunctionArgs,
  redirect,
  type LoaderFunctionArgs,
  json,
  type MetaFunction,
} from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getFragmentData } from "gql/fragment-masking";
import {
  AdminAppsDocument,
  AppFragmentDoc,
  CreateAppDocument,
} from "gql/graphql";
import { Admin } from "./components/index";
import i18next from "~/i18n/i18next.server";
import { createMetaTitle } from "~/utils/createMetaTitle";
import { get500ErrorResponse } from "~/utils/error/get500ErrorResponse";
import { apolloClient } from "~/utils/graphql";
import { isLoggedIn } from "~/utils/isLoggedIn";

export default function Route() {
  const data = useLoaderData<typeof loader>();
  return <Admin apps={getFragmentData(AppFragmentDoc, data.apps)} />;
}

const I18N = "admin";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  if (!(await isLoggedIn(request.headers.get("cookie")))) {
    // TODO: wanna add type to path
    return redirect("/login");
  }

  // TODO: create fetchApps in utils
  const {
    data: { apps },
    error,
  } = await apolloClient.query({ query: AdminAppsDocument });
  if (error) throw get500ErrorResponse(error);

  const t = await i18next.getFixedT(request, I18N);
  const title = t("Admin");

  return json({ apps, title });
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

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  return [{ title: createMetaTitle(data?.title ?? "") }];
};

export const handle = { isAdmin: true, i18n: I18N };
