import { Button, Flex } from "@chakra-ui/react";
import { SIDE_BAR_LINKS, SIDE_BAR_WIDTH } from "./constants";
import { Link } from "@remix-run/react";

export const SideBar = () => {
  return (
    <Flex
      w={`${SIDE_BAR_WIDTH}px`}
      direction="column"
      gap="8px"
      bgColor="white"
      position="fixed"
      h="100%"
      boxShadow="0px 1px 5px 0px rgba(88, 102, 126, 0.13)"
      py="20px"
      right={0}
    >
      {SIDE_BAR_LINKS.map((link) => {
        return <Button as={Link} {...link} w="100%" key={link.to} />;
      })}
    </Flex>
  );
};
