import { Button } from "@chakra-ui/react";
import {
  json,
  type LoaderFunctionArgs,
  type MetaFunction,
} from "@remix-run/node";
import { useTranslation } from "react-i18next";
import i18next from "~/i18next.server";

export async function loader({ request }: LoaderFunctionArgs) {
  const t = await i18next.getFixedT(request, "index");
  const title = t("pageTitle");
  return json({ title });
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  return [{ title: data?.title ?? "portfolio" }];
};

export default function Index() {
  const { t } = useTranslation("index");
  return (
    <>
      <Button colorScheme="teal">{t("greeting")}</Button>
      <Button colorScheme="teal">{t("test", { val: "va" })}</Button>
      <Button colorScheme="teal">{t("nested.nestedKey")}</Button>
    </>
  );
}

export const handle = { i18n: "index" };
