import { useTranslation } from "react-i18next";

export const useIndex = () => {
  const { t } = useTranslation("index");
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
      // TODO: switch ja or en depending on the language of the user
      href: "https://buysell-technologies.com/en/",
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
      // TODO: switch ja or en depending on the language of the user
      href: "https://moneykit.net/en/",
      linkText: t("Move to company site"),
    },
    {
      src: "/images/index/softbank.avif",
      title: "Softbank ",
      description: t("descriptionAboutSbLogistics"),
      href: "https://www.sbfw.co.jp/",
      linkText: t("Move to company site"),
    },
  ];

  return { t, appData };
};
