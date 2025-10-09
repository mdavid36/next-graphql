import { RefObject } from "react";

const handleTimer = (
  timeoutRef: RefObject<NodeJS.Timeout | null>,
  handler: () => void,
  delay: number
) => {
  if (timeoutRef.current) clearTimeout(timeoutRef.current);
  timeoutRef.current = setTimeout(handler, delay);
};

export default handleTimer;
