import { useFetcher } from "@remix-run/react";
import { useTranslation } from "react-i18next";

export const useIndex = () => {
  const { t } = useTranslation("contact");
  const fetcher = useFetcher();

  return { t, fetcher };
};
