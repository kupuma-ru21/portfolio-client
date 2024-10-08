import { useColorMode } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

export const useHeader = () => {
  const { t } = useTranslation("common");

  const { toggleColorMode } = useColorMode();
  const changeThemeColor = () => {
    toggleColorMode();
  };

  return { t, changeThemeColor };
};
