import { Box, Button, Heading } from "@chakra-ui/react";
import { Link } from "@remix-run/react";
import { useIndex } from "./useIndex";

export const NotFound = () => {
  const { t } = useIndex();

  return (
    <Box py="20px" textAlign="center">
      <Heading as="h1" mb="56px">
        {t("page-not-found")}
      </Heading>
      {/* refactor */}
      <Button as={Link} to="/" colorScheme="teal" size="lg">
        {t("move-to-home")}
      </Button>
    </Box>
  );
};
