import { Box, Button } from "@chakra-ui/react";
import { Form } from "@remix-run/react";
import { useIndex } from "./useIndex";

export const Login = () => {
  const { t } = useIndex();
  return (
    <Box textAlign="center" h="100dvh" alignContent="center">
      <Form method="POST">
        <Button colorScheme="teal" size="lg" type="submit">
          {t("Login")}
        </Button>
      </Form>
    </Box>
  );
};
