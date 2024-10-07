import { Button } from "@chakra-ui/react";
import {
  json,
  type LoaderFunctionArgs,
  type MetaFunction,
} from "@remix-run/node";
import { useTranslation } from "react-i18next";
import i18next from "~/i18next.server";

export async function loader({ request }: LoaderFunctionArgs) {
  const t = await i18next.getFixedT(request);
  const title = t("My page title");
  return json({ title });
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  return [{ title: data?.title ?? "portfolio" }];
};

export default function Index() {
  const { t } = useTranslation();
  return <Button colorScheme="teal">{t("greeting")}</Button>;
}
