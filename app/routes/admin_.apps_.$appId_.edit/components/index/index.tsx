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
import { type AppQuery, type AppFragment } from "gql/graphql";
import { useIndex } from "./useIndex";
import { Input } from "~/components/input";
import { SubmitButton } from "~/components/submit-button";
import { Textarea } from "~/components/textarea";

export const EditApp = ({ app }: { app: AppQuery["app"] & AppFragment }) => {
  // TODO: add mutation to update the app
  const { t, isSubmitting } = useIndex();

  return (
    <Box py="20px">
      <Heading as="h1" textAlign="center" mb="32px">
        {t("Edit Application")}
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
              <Input defaultValue={app.title} name="title" />
            </FormControl>
            <FormControl>
              <FormLabel>{t("Detail")}</FormLabel>
              <Textarea defaultValue={app.detail} name="detail" />
            </FormControl>
            <FormControl>
              <FormLabel>{t("imageUrl")}</FormLabel>
              <Input defaultValue={app.imageUrl} name="imageUrl" />
            </FormControl>
            <FormControl>
              <FormLabel>{t("link")}</FormLabel>
              <Input defaultValue={app.link} name="link" />
            </FormControl>
            <FormControl>
              <FormLabel>{t("Type of the URL")}</FormLabel>
              <RadioGroup name="linkType" defaultValue={app.linkType}>
                <Stack direction="row" gap="16px">
                  <Radio isRequired value="App">
                    {t("App")}
                  </Radio>
                  <Radio value="Company">{t("Company")}</Radio>
                </Stack>
              </RadioGroup>
            </FormControl>
          </Flex>
          <SubmitButton isLoading={isSubmitting}>{t("Submit")}</SubmitButton>
        </chakra.fieldset>
      </Form>
    </Box>
  );
};
