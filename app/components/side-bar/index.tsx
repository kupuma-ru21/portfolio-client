import { Button, Flex, useColorModeValue } from "@chakra-ui/react";
import { SIDE_BAR_WIDTH } from "./constants";
import { Link } from "@remix-run/react";
import { useSideBar } from "./useSideBar";

export const SideBar = () => {
  const { links } = useSideBar();

  return (
    <Flex
      w={`${SIDE_BAR_WIDTH}px`}
      direction="column"
      gap="8px"
      bgColor={useColorModeValue("white", "black")}
      position="fixed"
      h="100%"
      boxShadow="0px 1px 5px 0px rgba(88, 102, 126, 0.13)"
      py="20px"
      right={0}
      zIndex={1}
    >
      {links.map((link) => {
        return <Button as={Link} {...link} w="100%" key={link.to} />;
      })}
    </Flex>
  );
};
