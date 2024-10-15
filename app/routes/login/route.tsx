import { type ActionFunctionArgs } from "@remix-run/node";
import { authenticator } from "~/utils/auth.server";
import { Login } from "./components/index";

export default function Route() {
  return <Login />;
}

export function action({ request }: ActionFunctionArgs) {
  return authenticator.authenticate("auth0", request);
}

export const handle = { i18n: "login" };
