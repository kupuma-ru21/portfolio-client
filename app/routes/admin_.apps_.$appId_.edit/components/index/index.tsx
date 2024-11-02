import { chakra, Box, Flex, Heading, Stack } from "@chakra-ui/react";
import { Form } from "@remix-run/react";
import { type AppQuery, type AppFragment } from "gql/graphql";
import { useIndex } from "./useIndex";
import { Input } from "~/components/input";
import { SubmitButton } from "~/components/submit-button";
import { Textarea } from "~/components/textarea";
import { Field } from "~/components/ui/field";
import { Radio, RadioGroup } from "~/components/ui/radio";

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
            <Field label={t("Title")}>
              <Input name="title" defaultValue={app.title} />
            </Field>
            <Field label={t("Detail")}>
              <Textarea name="detail" defaultValue={app.detail} />
            </Field>
            <Field label={t("imageUrl")}>
              <Input name="imageUrl" defaultValue={app.imageUrl} />
            </Field>
            <Field label={t("link")}>
              <Input name="link" defaultValue={app.link} />
            </Field>
            <Field label={t("Type of the URL")}>
              <RadioGroup name="linkType" defaultValue={app.linkType}>
                <Stack direction="row" gap="16px">
                  <Radio
                    // isRequired
                    value="App"
                  >
                    {t("App")}
                  </Radio>
                  <Radio value="Company">{t("Company")}</Radio>
                </Stack>
              </RadioGroup>
            </Field>
          </Flex>
          <SubmitButton
          // isLoading={isSubmitting}
          >
            {t("Submit")}
          </SubmitButton>
        </chakra.fieldset>
      </Form>
    </Box>
  );
};
