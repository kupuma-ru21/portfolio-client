import { Box, Button, Heading } from "@chakra-ui/react";
import { useIndex } from "./useIndex";
import { Link } from "@remix-run/react";

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
      <Button as={Link} to="/" colorScheme="teal" size="lg">
        {t("submitted.move-to-home")}
      </Button>
    </Box>
  );
};
