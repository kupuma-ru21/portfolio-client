import { chakra, Icon, IconButton } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaFilePdf } from "react-icons/fa";
import { ExternalIconLink } from "./external-icon-link";
import { MdOutlineMailOutline } from "react-icons/md";
import { Link } from "@remix-run/react";
import { useTranslation } from "react-i18next";

export const Header = () => {
  const { t } = useTranslation("common");

  return (
    <chakra.header
      boxShadow="0px 1px 5px 0px rgba(88, 102, 126, 0.13)"
      p="8px 16px"
      display="flex"
      gap="16px"
      position="sticky"
      top={0}
      bgColor="white"
    >
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
    </chakra.header>
  );
};
