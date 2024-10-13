import { type PropsWithChildren } from "react";
import { Button } from "@chakra-ui/react";
import { Link } from "@remix-run/react";

export const MoveToHomeButton = ({ children }: PropsWithChildren) => {
  return (
    <Button as={Link} to="/" colorScheme="teal" size="lg">
      {children}
    </Button>
  );
};
