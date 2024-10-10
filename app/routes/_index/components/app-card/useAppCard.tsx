import { useState } from "react";
import { NO_OFL_INES } from "./constants";

export const useAppCard = () => {
  const [noOfLines, setOoOfLines] = useState<number | undefined>(NO_OFL_INES);
  const showFullDescription = () => {
    setOoOfLines((prev) => (prev === undefined ? NO_OFL_INES : undefined));
  };

  return { noOfLines, showFullDescription };
};
