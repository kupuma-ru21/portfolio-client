import { useTranslation } from "react-i18next";

export const useGetLinks = () => {
  const { t } = useTranslation("common");

  const links = [
    { to: "/", value: "/", children: t("side-bar.home") },
    { to: "/contact", value: "/contact", children: t("side-bar.contact") },
    { to: "/about", value: "/about", children: t("side-bar.about") },
  ];

  return { links };
};
