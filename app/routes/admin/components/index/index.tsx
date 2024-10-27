import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import { type AppFragment } from "gql/graphql";
import { useIndex } from "./useIndex";
import { Card } from "~/components/card";
import { Link } from "~/components/link";

export const Admin = ({ apps }: { apps: AppFragment[] }) => {
  const { t } = useIndex();

  return (
    <Box py="20px">
      <Box p="16px">
        <Heading mb="16px" textAlign="center" fontWeight={600}>
          {t("Applications")}
        </Heading>
        <Flex direction="column" gap="16px">
          {apps.map(({ id, title, detail, imageUrl }) => {
            return (
              <Card key={id}>
                <Card.Image src={imageUrl} alt={title} />
                <Card.Stack>
                  <Card.Body>
                    <Card.Heading>{title}</Card.Heading>
                    <Card.Text>{detail}</Card.Text>
                  </Card.Body>
                  <Card.Footer>
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
