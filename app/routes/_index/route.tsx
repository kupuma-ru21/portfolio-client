import {
  json,
  type LoaderFunctionArgs,
  type MetaFunction,
} from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { AppsDocument } from "gql/graphql";
import { Index } from "./components/index";
import i18next from "~/i18n/i18next.server";
import { createMetaTitle } from "~/utils/createMetaTitle";
import { get500ErrorResponse } from "~/utils/error/get500ErrorResponse";
import { apolloClient } from "~/utils/graphql";

export default function Route() {
  const data = useLoaderData<typeof loader>();
  return <Index apps={data.apps} />;
}

export async function loader({ request }: LoaderFunctionArgs) {
  const {
    data: { apps },
    error,
  } = await apolloClient.query({ query: AppsDocument });
  if (error) throw get500ErrorResponse(error);

  const t = await i18next.getFixedT(request, "index");
  const title = t("Home");
  return json({ title, apps });
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  return [{ title: createMetaTitle(data?.title ?? "") }];
};

export const handle = { i18n: "index" };
