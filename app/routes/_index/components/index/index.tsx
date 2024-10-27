import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
// import { type AppsQuery } from "gql/graphql";
import { useIndex } from "./useIndex";
import { Card } from "~/components/card";

export const Index = () =>
  // { apps }: { apps: AppsQuery["apps"] }
  {
    const { t, appData, noOfLines, showFullDetail } = useIndex();

    return (
      <Box py="20px">
        <Flex
          w="fit-content"
          m="auto"
          gap="16px"
          mb="48px"
          direction={{ base: "column", md: "initial" }}
          alignItems={{ base: "center", md: "initial" }}
        >
          <Heading as="h1" alignContent="center">
            <Text as="span" fontWeight={400}>
              {t("Hi! I'm")}{" "}
            </Text>
            <Text as="strong">{t("Koichi Kimura,")}</Text>
            <Text as="span" fontWeight={400} display="block">
              {t("a Frontend developer")} 👋
            </Text>
          </Heading>
          <Image
            src="/images/index/profile.avif"
            alt="Koichi Kimura"
            w="247px"
            h="283px"
            borderRadius="8px"
            pointerEvents="none"
          />
        </Flex>
        <Divider />
        <Box p="16px">
          <Heading mb="16px" textAlign="center" fontWeight={600}>
            {t("Applications I developed at work")}
          </Heading>
          <Flex direction="column" gap="16px">
            {appData.map(({ src, title, description, href, linkText }) => {
              return (
                <Card key={title}>
                  <Card.Image src={src} alt={title} />
                  <Card.Stack>
                    <Card.Body>
                      <Card.Heading>{title}</Card.Heading>
                      <Card.Text noOfLines={noOfLines}>{description}</Card.Text>
                    </Card.Body>
                    <Card.Footer>
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
                    </Card.Footer>
                  </Card.Stack>
                </Card>
              );
            })}
          </Flex>
        </Box>
      </Box>
    );
  };
