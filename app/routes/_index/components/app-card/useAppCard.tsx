import { useState } from "react";
import { useTranslation } from "react-i18next";
import { NO_OFL_INES } from "./constants";

export const useAppCard = () => {
  const { t } = useTranslation("index");

  const [noOfLines, setOoOfLines] = useState<number | undefined>(NO_OFL_INES);
  const showFullDescription = () => {
    setOoOfLines((prev) => (prev === undefined ? NO_OFL_INES : undefined));
  };

  return { t, noOfLines, showFullDescription };
};
