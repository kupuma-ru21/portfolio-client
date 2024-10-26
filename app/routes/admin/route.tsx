import {
  type ActionFunctionArgs,
  redirect,
  type LoaderFunctionArgs,
} from "@remix-run/node";
import { CreateAppDocument } from "gql/graphql";
import { Admin } from "./components/index";
import { getSession } from "~/services/session.server";
import { get500ErrorResponse } from "~/utils/error/get500ErrorResponse";
import { apolloClient } from "~/utils/graphql";

export default function Route() {
  return <Admin />;
}

export async function loader({ request }: LoaderFunctionArgs) {
  const session = await getSession(request.headers.get("cookie"));
  if (session.has("user")) return null;
  // TODO: wanna add type to path
  return redirect("/login");
}

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();

  const { errors } = await apolloClient.mutate({
    mutation: CreateAppDocument,
    variables: {
      title: String(formData.get("title")),
      description: String(formData.get("description")),
      imageUrl: String(formData.get("imageUrl")),
      link: String(formData.get("link")),
      linkType: String(formData.get("linkType")),
    },
  });
  if (errors) throw get500ErrorResponse(errors[0]);
  return redirect("/");
};

export const handle = { isAdmin: true };
