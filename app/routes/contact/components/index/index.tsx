import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Textarea,
} from "@chakra-ui/react";
import { Form } from "@remix-run/react";
import { Input } from "../input";
import { useIndex } from "./useIndex";

export const Contact = () => {
  const { t } = useIndex();

  return (
    <Box py="20px">
      <Heading as="h1" textAlign="center" mb="32px">
        {t("Contact")}
      </Heading>
      <Form method="POST" style={{ textAlign: "center" }}>
        <Flex
          direction="column"
          justifyContent="center"
          w="fit-content"
          m="auto"
          gap="24px"
          mb="54px"
        >
          <FormControl>
            <FormLabel>{t("Email address")}</FormLabel>
            <Input type="email" name="email" />
          </FormControl>
          <FormControl>
            <FormLabel>{t("Subject")}</FormLabel>
            <Input name="subject" />
          </FormControl>
          <FormControl>
            <FormLabel>{t("Content")}</FormLabel>
            <Textarea name="content" isRequired h="350px" />
          </FormControl>
        </Flex>
        <Button type="submit" size="lg" colorScheme="teal">
          {t("Submit")}
        </Button>
      </Form>
    </Box>
  );
};
