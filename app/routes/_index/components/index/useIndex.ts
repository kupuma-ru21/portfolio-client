import { useState } from "react";
import { useRouteLoaderData } from "@remix-run/react";
import { useTranslation } from "react-i18next";
import { getPathByLocale } from "./utils";
import { LOCALES, NO_OF_LINES } from "~/constants";
import { type loader } from "~/root";

export const useIndex = () => {
  const { t } = useTranslation("index");

  const routeLoaderData = useRouteLoaderData<typeof loader>("root");
  const locale = routeLoaderData?.locale ?? LOCALES.en;

  const [noOfLines, setOoOfLines] = useState<number | undefined>(NO_OF_LINES);
  const showFullDetail = () => {
    setOoOfLines((prev) => (prev === undefined ? NO_OF_LINES : undefined));
  };

  const appData = [
    {
      src: "/images/index/sorajima.avif",
      title: "Sorajima Toon",
      description: t("descriptionAboutSorajimaToon"),
      href: "https://sorajimatoon.com/",
      linkText: t("Move to the site"),
    },
    {
      src: "/images/index/buysell.avif",
      title: "BuySell",
      description: t("descriptionAboutBuySellApp"),
      href: `https://buysell-technologies.com/${getPathByLocale(locale)}`,
      linkText: t("Move to company site"),
    },
    {
      src: "/images/index/visits-forms.avif",
      title: "Visits Forms",
      description: t("descriptionAboutVisitsForms"),
      href: "https://visitsforms.com/",
      linkText: t("Move to company site"),
    },
    {
      src: "/images/index/sony-bank.avif",
      title: "Sony bank",
      description: t("descriptionAboutSonyBank"),
      href: `https://moneykit.net/${getPathByLocale(locale)}`,
      linkText: t("Move to company site"),
    },
    {
      src: "/images/index/softbank.avif",
      title: "Logistics app",
      description: t("descriptionAboutSbLogistics"),
      href: "https://www.sbfw.co.jp/",
      linkText: t("Move to company site"),
    },
  ];

  return { t, appData, noOfLines, showFullDetail };
};
