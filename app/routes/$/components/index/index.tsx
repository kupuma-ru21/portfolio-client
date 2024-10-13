import { Box, Heading } from "@chakra-ui/react";
import { MoveToHomeButton } from "~/components/move-to-home-button";
import { useIndex } from "./useIndex";

export const NotFound = () => {
  const { t } = useIndex();

  return (
    <Box py="20px" textAlign="center">
      <Heading as="h1" mb="56px">
        {t("page-not-found")}
      </Heading>
      <MoveToHomeButton>{t("move-to-home")}</MoveToHomeButton>
    </Box>
  );
};
