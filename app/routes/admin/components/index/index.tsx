import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { type AppsQuery } from "gql/graphql";
import { useIndex } from "./useIndex";
import { Link } from "~/components/link";

export const Admin = ({ apps }: { apps: AppsQuery["apps"] }) => {
  const { t } = useIndex();

  return (
    <Box py="20px">
      <Box p="16px">
        <Heading mb="16px" textAlign="center" fontWeight={600}>
          {t("Applications")}
        </Heading>
        {/* TODO: add Apps Fragment and AdminApps Query */}
        <Flex direction="column" gap="16px">
          {apps.map(({ id, title, detail, imageUrl }) => {
            return (
              <Card
                direction={{ base: "column", md: "row" }}
                overflow="hidden"
                variant="outline"
                key={id}
              >
                <Image
                  src={imageUrl}
                  alt={title}
                  objectFit="cover"
                  maxW={{ base: "100%", md: "200px" }}
                  maxH="200px"
                />
                <Stack>
                  <CardBody>
                    <Heading size="md">{title}</Heading>
                    <Text>{detail}</Text>
                  </CardBody>
                  <CardFooter gap="8px">
                    <Button
                      as={Link}
                      to={`/admin/app/${id}/edit`}
                      target="_blank"
                      rel="noreferrer"
                      variant="solid"
                      colorScheme="teal"
                    >
                      Edit
                    </Button>
                  </CardFooter>
                </Stack>
              </Card>
            );
          })}
        </Flex>
      </Box>
    </Box>
  );
};
