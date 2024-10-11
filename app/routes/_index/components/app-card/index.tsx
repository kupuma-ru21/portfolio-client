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
}: {
  src: string;
  title: string;
  description: ReactNode;
  href: string;
}) => {
  const { noOfLines, showFullDescription } = useAppCard();

  return (
    <Card direction="row" overflow="hidden" variant="outline">
      <Image
        src={src}
        alt={title}
        objectFit="cover"
        maxW="200px"
        maxH="200px"
      />
      <Stack>
        <CardBody>
          <Heading size="md">{title}</Heading>
          <Text noOfLines={noOfLines}>{description}</Text>
        </CardBody>
        <CardFooter gap="8px">
          <Button onClick={showFullDescription} w="110px">
            {noOfLines === undefined ? "Fold" : "Read more"}
          </Button>
          <Button
            as="a"
            href={href}
            target="_blank"
            rel="noreferrer"
            variant="solid"
            colorScheme="teal"
          >
            Move to the site
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  );
};