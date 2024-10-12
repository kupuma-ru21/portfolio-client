import { useFetcher } from "@remix-run/react";
import { useTranslation } from "react-i18next";
import { type action } from "../../route";

export const useIndex = () => {
  const { t } = useTranslation("contact");
  const fetcher = useFetcher<typeof action>();
  console.log(fetcher.data?.email);

  return { t, fetcher };
};
