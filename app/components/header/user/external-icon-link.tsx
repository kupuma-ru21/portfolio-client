import { type ReactNode } from "react";
import { IconButton as IconButtonBase } from "@chakra-ui/react";

export const ExternalIconLink = ({
  iconType,
  href,
}: {
  iconType: ReactNode;
  href: string;
}) => {
  return (
    <IconButtonBase>
      <a href={href} target="_blank" rel="noreferrer">
        {iconType}
      </a>
    </IconButtonBase>
  );
};
