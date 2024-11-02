import { type PropsWithChildren } from "react";
import { Link } from "./link";
import { Button } from "~/components/ui/button";

export const MoveToHomeButton = ({ children }: PropsWithChildren) => {
  return (
    <Button size="lg">
      <Link to="/">{children}</Link>
    </Button>
  );
};
