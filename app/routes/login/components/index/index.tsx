import { Box } from "@chakra-ui/react";
import { Form } from "@remix-run/react";
import { useIndex } from "./useIndex";
import { SubmitButton } from "~/components/submitButton";

export const Login = () => {
  const { t } = useIndex();
  return (
    <Box textAlign="center" h="100dvh" alignContent="center">
      <Form method="POST">
        <SubmitButton>{t("Login")}</SubmitButton>
      </Form>
    </Box>
  );
};
