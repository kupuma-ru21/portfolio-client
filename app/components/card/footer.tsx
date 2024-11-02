import { type ReactNode } from "react";
import { Card } from "@chakra-ui/react";

export const Footer = ({ children }: { children: ReactNode }) => {
  return <Card.Footer gap="8px">{children}</Card.Footer>;
};
