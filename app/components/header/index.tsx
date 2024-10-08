import {
  chakra,
  Flex,
  Icon,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaFilePdf } from "react-icons/fa";
import { ExternalIconLink } from "./external-icon-link";
import { MdOutlineMailOutline } from "react-icons/md";
import { Link } from "@remix-run/react";
import { useTranslation } from "react-i18next";
import { CiMenuBurger } from "react-icons/ci";

// TODO: apply i18n to aria-label
export const Header = () => {
  const { t } = useTranslation("common");
  const { toggleColorMode } = useColorMode();
  const changeThemeColor = () => {
    toggleColorMode();
  };

  return (
    <chakra.header
      boxShadow="0px 1px 5px 0px rgba(88, 102, 126, 0.13)"
      p="8px 16px"
      display="flex"
      justifyContent="space-between"
      position="sticky"
      top={0}
      bgColor={useColorModeValue("white", "black")}
    >
      <Flex gap="16px">
        <ExternalIconLink
          href="https://github.com/kupuma-ru21"
          aria-label="github"
          iconType={FaGithub}
        />
        <ExternalIconLink
          href="https://www.linkedin.com/in/koichi-kimura-06ba14259/"
          aria-label="linkedin"
          iconType={FaLinkedin}
        />
        <abbr title={t("header.resume")}>
          <ExternalIconLink
            href="/resume.pdf"
            aria-label="resume"
            iconType={FaFilePdf}
          />
        </abbr>
        <abbr title={t("header.contact")}>
          <IconButton
            as={Link}
            to="/contact"
            aria-label="contact"
            icon={<Icon as={MdOutlineMailOutline} boxSize="24px" />}
            colorScheme="teal"
          />
        </abbr>
      </Flex>

      <Menu>
        <MenuButton
          as={IconButton}
          icon={
            <Icon as={CiMenuBurger} aria-label={t("header.menu.aria-label")} />
          }
        />
        <MenuList>
          <MenuItem onClick={changeThemeColor}>
            {t("header.menu.change-theme-color")}
          </MenuItem>
        </MenuList>
      </Menu>
    </chakra.header>
  );
};
