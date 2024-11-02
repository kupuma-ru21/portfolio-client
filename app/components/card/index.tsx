import { type ReactNode } from "react";
import { Card as CardBase, Stack, Text } from "@chakra-ui/react";
import { Footer } from "./footer";
import { Heading } from "./heading";
import { Image } from "./image";

export const Card = ({ children }: { children: ReactNode }) => {
  return (
    <CardBase.Root
      direction={{ base: "column", md: "row" }}
      overflow="hidden"
      // variant="outline"
    >
      {children}
    </CardBase.Root>
  );
};

Card.Image = Image;
Card.Stack = Stack;
Card.Body = CardBase.Body;
Card.Heading = Heading;
Card.Text = Text;
Card.Footer = Footer;
