import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Textarea,
} from "@chakra-ui/react";
import { useIndex } from "./useIndex";
import { Input } from "../input";

export const Contact = () => {
  const { t, fetcher } = useIndex();

  return (
    <Box py="20px">
      <Heading as="h1" textAlign="center" mb="32px">
        {t("Contact")}
      </Heading>
      <fetcher.Form method="POST" style={{ textAlign: "center" }}>
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
            <Input />
          </FormControl>
          <FormControl>
            <FormLabel>{t("Content")}</FormLabel>
            <Textarea isRequired h="350px" />
          </FormControl>
        </Flex>
        <Button type="submit" size="lg" colorScheme="teal">
          {t("Submit")}
        </Button>
      </fetcher.Form>
    </Box>
  );
};
