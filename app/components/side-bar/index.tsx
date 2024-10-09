import { Box, Button } from "@chakra-ui/react";
import { SIDE_BAR_WIDTH } from "./constants";

export const SideBar = () => {
  return (
    <Box
      w={`${SIDE_BAR_WIDTH}px`}
      bgColor="white"
      position="fixed"
      h="100%"
      boxShadow="0px 1px 5px 0px rgba(88, 102, 126, 0.13)"
      py="20px"
      right={0}
    >
      <Button>Home</Button>
    </Box>
  );
};
