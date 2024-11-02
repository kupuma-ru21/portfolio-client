import { chakra, Box, Flex, Heading } from "@chakra-ui/react";
import { Form } from "@remix-run/react";
import { useIndex } from "./useIndex";
import { Input } from "~/components/input";
import { SubmitButton } from "~/components/submit-button";
import { Textarea } from "~/components/textarea";
import { Field } from "~/components/ui/field";

export const Contact = () => {
  const { t, isSubmitting } = useIndex();

  return (
    <Box py="20px">
      <Heading as="h1" textAlign="center" mb="32px">
        {t("Contact")}
      </Heading>
      <Form method="POST" style={{ textAlign: "center" }}>
        <chakra.fieldset disabled={isSubmitting}>
          <Flex
            direction="column"
            justifyContent="center"
            w="fit-content"
            m="auto"
            gap="24px"
            mb="54px"
          >
            <Field label={t("Email address")}>
              <Input type="email" name="email" />
            </Field>
            <Field label={t("Subject")}>
              <Input name="subject" />
            </Field>
            <Field label={t("Content")}>
              <Textarea name="content" />
            </Field>
          </Flex>
          <SubmitButton>{t("Submit")}</SubmitButton>
        </chakra.fieldset>
      </Form>
    </Box>
  );
};
