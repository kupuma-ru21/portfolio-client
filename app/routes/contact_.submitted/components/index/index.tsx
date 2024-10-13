import { Box, Heading } from "@chakra-ui/react";
import { MoveToHomeButton } from "~/components/move-to-home-button";
import { useIndex } from "./useIndex";

export const ContactSubmitted = () => {
  const { t } = useIndex();

  return (
    <Box py="20px" textAlign="center">
      <Heading as="h1" mb="32px" fontSize={{ base: "2xl", md: "4xl" }}>
        {t("submitted.title")}
      </Heading>
      <Heading
        fontWeight={600}
        fontSize={{ base: "-moz-initial", md: "3xl" }}
        mb="56px"
      >
        {t("submitted.content")}
      </Heading>
      <MoveToHomeButton>{t("submitted.move-to-home")}</MoveToHomeButton>
    </Box>
  );
};
