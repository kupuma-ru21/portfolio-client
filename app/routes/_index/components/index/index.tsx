import { Box, Divider, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { type AppsQuery } from "gql/graphql";
import { AppCard } from "../app-card";
import { useIndex } from "./useIndex";

export const Index = ({ apps }: { apps: AppsQuery["apps"] }) => {
  const { t } = useIndex();

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
          {apps.map(({ id, imageUrl, title, description, link, linkType }) => {
            return (
              <AppCard
                src={imageUrl}
                title={title}
                description={description}
                href={link}
                linkText={
                  linkType === "app"
                    ? "Move to the app"
                    : "Move to company site"
                }
                key={id}
              />
            );
          })}
        </Flex>
      </Box>
    </Box>
  );
};
