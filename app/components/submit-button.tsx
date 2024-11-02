import { Button, type ButtonProps } from "~/components/ui/button";

export const SubmitButton = (props: ButtonProps) => {
  return <Button {...props} type="submit" size="lg" />;
};
