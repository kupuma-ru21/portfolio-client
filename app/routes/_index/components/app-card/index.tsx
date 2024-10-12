import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { type ReactNode } from "react";
import { useAppCard } from "./useAppCard";

export const AppCard = ({
  src,
  title,
  description,
  href,
  linkText,
}: {
  src: string;
  title: string;
  description: ReactNode;
  href: string;
  linkText: string;
}) => {
  const { t, noOfLines, showFullDescription } = useAppCard();

  return (
    <Card
      direction={{ base: "column", md: "row" }}
      overflow="hidden"
      variant="outline"
    >
      <Image
        src={src}
        alt={title}
        objectFit="cover"
        maxW={{ base: "100%", md: "200px" }}
        maxH="200px"
      />
      <Stack>
        <CardBody>
          <Heading size="md">{title}</Heading>
          <Text noOfLines={noOfLines}>{description}</Text>
        </CardBody>
        <CardFooter gap="8px">
          <Button onClick={showFullDescription} w="110px">
            {noOfLines === undefined ? t("Fold") : t("Read more")}
          </Button>
          <Button
            as="a"
            href={href}
            target="_blank"
            rel="noreferrer"
            variant="solid"
            colorScheme="teal"
          >
            {linkText}
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  );
};
