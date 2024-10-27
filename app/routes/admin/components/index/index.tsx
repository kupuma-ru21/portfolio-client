import { Box, Flex, Heading } from "@chakra-ui/react";
import { type AppsQuery } from "gql/graphql";
import { useIndex } from "./useIndex";
import { AppCard } from "~/routes/_index/components/app-card";

export const Admin = ({ apps }: { apps: AppsQuery["apps"] }) => {
  const { t } = useIndex();

  return (
    <Box py="20px">
      <Box p="16px">
        <Heading mb="16px" textAlign="center" fontWeight={600}>
          {t("Applications")}
        </Heading>
        <Flex direction="column" gap="16px">
          {apps.map(({ id, title, detail, link, linkType, imageUrl }) => {
            return (
              <AppCard
                src={imageUrl}
                title={title}
                detail={detail}
                href={link}
                linkText={
                  linkType === "App"
                    ? t("Move to the site")
                    : t("Move to company site")
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
