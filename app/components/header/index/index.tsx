import {
  chakra,
  Flex,
  Icon,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Tooltip,
  useColorModeValue,
} from "@chakra-ui/react";
import { CiLight, CiDark, CiMenuBurger } from "react-icons/ci";
import { FaGithub, FaLinkedin, FaFilePdf } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { useGetLinks } from "~/components/hooks/useGetLinks";
import { Link } from "~/components/link";
import { NavLink } from "~/components/nav-link";
import { ExternalIconLink } from "../external-icon-link";
import { useIndex } from "./useIndex";

export const Header = () => {
  const { t, changeThemeColor } = useIndex();
  const { links } = useGetLinks();

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
      <Flex gap="8px">
        <IconButton
          onClick={changeThemeColor}
          icon={<Icon as={useColorModeValue(CiLight, CiDark)} boxSize="24px" />}
          aria-label={t("header.theme.aria-label")}
        />
        <Menu>
          <MenuButton
            display={{ base: "block", md: "none" }}
            as={IconButton}
            icon={
              <Icon
                as={CiMenuBurger}
                aria-label={t("header.menu.aria-label")}
              />
            }
          />
          <MenuList display={{ base: "block", md: "none" }}>
            {links.map((link) => {
              return <MenuItem as={NavLink} {...link} key={link.to} />;
            })}
          </MenuList>
        </Menu>
      </Flex>
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
        <Tooltip label={t("header.resume.abbr")}>
          <div>
            <ExternalIconLink
              href="/resume.pdf"
              aria-label={t("header.resume.aria-label")}
              iconType={FaFilePdf}
            />
          </div>
        </Tooltip>
        <Tooltip label={t("header.contact.abbr")}>
          <div>
            <IconButton
              as={Link}
              to="/contact"
              aria-label={t("header.contact.aria-label")}
              icon={<Icon as={MdOutlineMailOutline} boxSize="24px" />}
              colorScheme="teal"
            />
          </div>
        </Tooltip>
      </Flex>
    </chakra.header>
  );
};
