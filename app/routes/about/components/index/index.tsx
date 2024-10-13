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
              Software development
            </Heading>
          </Flex>
          <Text>
            I'm especially interested in how to improve maintainability and
            performance. For example, I've used just avif images in this project
            cuz it's better in performance than jpg, png and things like that.
          </Text>
        </ListItem>
        <ListItem>
          <Flex alignItems="center" gap="16px" mb="8px">
            <ListIcon boxSize="32px" as={FaBook} color="green.500" m={0} />
            <Heading as="h4" mb="16px" m={0} fontWeight={500}>
              Reading comics and watching anime
            </Heading>
          </Flex>
          <Text>
            I'm a big fan of anime and comics. I've read countless comics and
            anime.
            <br />
            Anime like below are my favorite:
            <br />
            Naruto, One Piece, Attack on Titan, PSYCHO-PASS and so on.
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
              Going to restaurant
            </Heading>
          </Flex>
          <Text>
            I love to eat a food from other countries cuz through the food, I
            can learn about the culture of the country. It really broadens my
            horizons.
          </Text>
        </ListItem>
      </List>
    </Box>
  );
};
