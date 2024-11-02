import { Flex, Icon, IconButton } from "@chakra-ui/react";
import { Form } from "@remix-run/react";
import { IoMdHome } from "react-icons/io";
import { MdLogout } from "react-icons/md";
import { SwitchTheme } from "../switch-theme";
import { Wrapper } from "../wrapper";
import { useIndex } from "./useIndex";
import { Link } from "~/components/link";
import { Tooltip } from "~/components/ui/tooltip";

export const AdminHeader = () => {
  const { t } = useIndex();

  return (
    <Wrapper>
      <SwitchTheme />
      <Flex gap="16px">
        <Tooltip content={t("admin-header.Logout")}>
          <Form action="/auth/logout" method="POST">
            <IconButton type="submit" aria-label={t("admin-header.Logout")}>
              <Icon boxSize="24px">
                <MdLogout />
              </Icon>
            </IconButton>
          </Form>
        </Tooltip>
        <IconButton aria-label={t("admin-header.Home")}>
          <Link to="/">
            <Icon boxSize="24px">
              <IoMdHome />
            </Icon>
          </Link>
        </IconButton>
      </Flex>
    </Wrapper>
  );
};
