import { Flex, IconButton } from "@chakra-ui/react";
import { CiMenuBurger } from "react-icons/ci";
import { FaGithub, FaLinkedin, FaFilePdf } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { SwitchTheme } from "../../switch-theme";
import { Wrapper } from "../../wrapper";
import { ExternalIconLink } from "../external-icon-link";
import { useIndex } from "./useIndex";
import { useGetLinks } from "~/components/hooks/useGetLinks";
import { Link } from "~/components/link";
import { NavLink } from "~/components/nav-link";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "~/components/ui/menu";
import { Tooltip } from "~/components/ui/tooltip";

export const Header = () => {
  const { t } = useIndex();
  const { links } = useGetLinks();

  return (
    <Wrapper>
      <Flex gap="8px">
        <SwitchTheme />
        <MenuRoot>
          <MenuTrigger asChild>
            <IconButton
              display={{ base: "block", md: "none" }}
              aria-label={t("header.menu.aria-label")}
            >
              <CiMenuBurger />
            </IconButton>
          </MenuTrigger>
          <MenuContent>
            {links.map((link) => {
              return <MenuItem as={NavLink} {...link} key={link.to} />;
            })}
          </MenuContent>
        </MenuRoot>
      </Flex>
      <Flex gap="16px">
        <ExternalIconLink
          href="https://github.com/kupuma-ru21"
          aria-label="github"
          iconType={<FaGithub />}
        />
        <ExternalIconLink
          href="https://www.linkedin.com/in/koichi-kimura-06ba14259/"
          aria-label="linkedin"
          iconType={<FaLinkedin />}
        />
        <Tooltip content={t("header.resume.abbr")}>
          <div>
            <ExternalIconLink
              href="/resume.pdf"
              aria-label={t("header.resume.aria-label")}
              iconType={<FaFilePdf />}
            />
          </div>
        </Tooltip>
        <Tooltip content={t("header.contact.abbr")}>
          <div>
            <IconButton aria-label={t("header.contact.aria-label")}>
              <Link to="/contact">
                <MdOutlineMailOutline />
              </Link>
            </IconButton>
          </div>
        </Tooltip>
      </Flex>
    </Wrapper>
  );
};
