import { useIndex } from "./useIndex";
import { ColorModeButton } from "~/components/ui/color-mode";

export const SwitchTheme = () => {
  const { t } = useIndex();

  return <ColorModeButton aria-label={t("header.theme.aria-label")} />;
};
