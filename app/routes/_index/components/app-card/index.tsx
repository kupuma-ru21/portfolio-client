import { type ReactNode } from "react";
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
import { useAppCard } from "./useAppCard";

// TODO: change structure of element to use this between admin and index
export const AppCard = ({
  src,
  title,
  detail,
  href,
  linkText,
}: {
  src: string;
  title: string;
  detail: ReactNode;
  href: string;
  linkText: string;
}) => {
  const { t, noOfLines, showFullDetail } = useAppCard();

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
          <Text noOfLines={noOfLines}>{detail}</Text>
        </CardBody>
        <CardFooter gap="8px">
          <Button onClick={showFullDetail} w="110px">
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
