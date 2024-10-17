import {
  chakra,
  Flex,
  Icon,
  IconButton,
  Tooltip,
  useColorModeValue,
} from "@chakra-ui/react";
import { Form } from "@remix-run/react";
import { IoMdHome } from "react-icons/io";
import { MdLogout } from "react-icons/md";
import { Link } from "~/components/link";
import { SwitchTheme } from "../switch-theme";
import { useIndex } from "./useIndex";

// TODO: refactor with Header component
export const AdminHeader = () => {
  const { t } = useIndex();

  return (
    <chakra.header
      boxShadow="0px 1px 5px 0px rgba(88, 102, 126, 0.13)"
      p="8px 16px"
      display="flex"
      justifyContent="space-between"
      position="sticky"
      top={0}
      bgColor={useColorModeValue("white", "black")}
      zIndex={1}
    >
      <SwitchTheme />
      <Flex gap="16px">
        <Tooltip label={t("admin-header.Logout")}>
          <Form action="/auth/logout" method="POST">
            <IconButton
              type="submit"
              aria-label={t("admin-header.Logout")}
              icon={<Icon as={MdLogout} boxSize="24px" />}
              colorScheme="teal"
            />
          </Form>
        </Tooltip>
        <IconButton
          as={Link}
          to="/"
          aria-label={t("admin-header.Home")}
          icon={<Icon as={IoMdHome} boxSize="24px" />}
          colorScheme="teal"
        />
      </Flex>
    </chakra.header>
  );
};
