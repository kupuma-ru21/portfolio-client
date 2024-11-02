import { Box, Flex, Heading } from "@chakra-ui/react";
import { type AppFragment } from "gql/graphql";
import { DeleteButton } from "../delete-app";
import { useIndex } from "./useIndex";
import { Card } from "~/components/card";
import { Link } from "~/components/link";
import { Button } from "~/components/ui/button";

export const Admin = ({ apps }: { apps: AppFragment[] }) => {
  const { t } = useIndex();

  return (
    <Box py="20px">
      <Box p="16px">
        <Flex justifyContent="space-between">
          <Heading mb="16px" textAlign="center" fontWeight={600}>
            {t("Applications")}
          </Heading>
          <Button variant="solid">
            <Link to="/admin/add-app">Add</Link>
          </Button>
        </Flex>
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
                    <Button variant="solid">
                      <Link to={`/admin/apps/${id}/edit`}>Edit</Link>
                    </Button>
                    <DeleteButton id={id} />
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
