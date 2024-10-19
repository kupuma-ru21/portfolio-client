import {
  chakra,
  Box,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  RadioGroup,
  Radio,
  Stack,
} from "@chakra-ui/react";
import { Form } from "@remix-run/react";
import { useIndex } from "./useIndex";
import { Input } from "~/components/input";
import { SubmitButton } from "~/components/submitButton";
import { Textarea } from "~/components/textarea";

export const Admin = () => {
  const { t } = useIndex();
  const isSubmitting = false;

  return (
    <Box py="20px">
      <Heading as="h1" textAlign="center" mb="32px">
        {t("Add Application")}
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
            <FormControl>
              <FormLabel>{t("Title")}</FormLabel>
              <Input name="title" />
            </FormControl>
            <FormControl>
              <FormLabel>{t("Description")}</FormLabel>
              <Textarea name="description" />
            </FormControl>
            <FormControl>
              <FormLabel>{t("URL")}</FormLabel>
              <Input name="URL" />
            </FormControl>
            <FormControl>
              <FormLabel>{t("Type of the URL")}</FormLabel>
              <RadioGroup>
                <Stack direction="row" gap="16px">
                  <Radio isRequired>{t("App")}</Radio>
                  <Radio>{t("Company")}</Radio>
                </Stack>
              </RadioGroup>
            </FormControl>
          </Flex>
          <SubmitButton>{t("Submit")}</SubmitButton>
        </chakra.fieldset>
      </Form>
    </Box>
  );
};
