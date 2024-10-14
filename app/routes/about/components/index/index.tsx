import {
  Box,
  Flex,
  Heading,
  List,
  ListIcon,
  ListItem,
  Text,
} from "@chakra-ui/react";
import { FaLaptop, FaBook } from "react-icons/fa";
import { IoFastFoodOutline } from "react-icons/io5";
import { useIndex } from "./useIndex";

export const About = () => {
  const { t } = useIndex();

  return (
    <Box py="20px" px="24px">
      <Heading as="h1" mb="16px" textAlign="center">
        {t("About")}
      </Heading>
      <Heading mb="56px" fontWeight={600} fontSize="3xl" textAlign="center">
        {t("description")}
      </Heading>
      <Heading as="h3" mb="16px">
        {t("I like to do")}
      </Heading>
      <List spacing="24px">
        <ListItem>
          <Flex alignItems="center" gap="16px" mb="8px">
            <ListIcon boxSize="32px" as={FaLaptop} color="green.500" m={0} />
            <Heading as="h4" mb="16px" m={0} fontWeight={500}>
              {t("software development.title")}
            </Heading>
          </Flex>
          <Text>{t("software development.description")}</Text>
        </ListItem>
        <ListItem>
          <Flex alignItems="center" gap="16px" mb="8px">
            <ListIcon boxSize="32px" as={FaBook} color="green.500" m={0} />
            <Heading as="h4" mb="16px" m={0} fontWeight={500}>
              {t("reading comics and watching anime.title")}
            </Heading>
          </Flex>
          <Text>
            {t("reading comics and watching anime.description1")}
            <br />
            {t("reading comics and watching anime.description2")}
            <br />
            {t("reading comics and watching anime.description3")}
          </Text>
        </ListItem>
        <ListItem>
          <Flex alignItems="center" gap="16px" mb="8px">
            <ListIcon
              boxSize="32px"
              as={IoFastFoodOutline}
              color="green.500"
              m={0}
            />
            <Heading as="h4" mb="16px" m={0} fontWeight={500}>
              {t("going to a restaurant.title")}
            </Heading>
          </Flex>
          <Text>{t("going to a restaurant.description")}</Text>
        </ListItem>
      </List>
    </Box>
  );
};
