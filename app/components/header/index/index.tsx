import {
  chakra,
  Flex,
  Icon,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaFilePdf } from "react-icons/fa";
import { ExternalIconLink } from "../external-icon-link";
import { MdOutlineMailOutline } from "react-icons/md";
import { Link } from "@remix-run/react";
import { CiLight, CiDark, CiMenuBurger } from "react-icons/ci";
import { useIndex } from "./useIndex";

export const Header = () => {
  const { t, changeThemeColor } = useIndex();

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
      <IconButton
        onClick={changeThemeColor}
        icon={<Icon as={useColorModeValue(CiLight, CiDark)} boxSize="24px" />}
        aria-label={t("header.theme.aria-label")}
      />
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
        <abbr title={t("header.resume.abbr")}>
          <ExternalIconLink
            href="/resume.pdf"
            aria-label={t("header.resume.aria-label")}
            iconType={FaFilePdf}
          />
        </abbr>
        <abbr title={t("header.contact.abbr")}>
          <IconButton
            as={Link}
            to="/contact"
            aria-label={t("header.contact.aria-label")}
            icon={<Icon as={MdOutlineMailOutline} boxSize="24px" />}
            colorScheme="teal"
          />
        </abbr>
      </Flex>
    </chakra.header>
  );
};
