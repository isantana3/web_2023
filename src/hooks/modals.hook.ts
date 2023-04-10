import { useState } from "react";

import { type IUseModal } from "global/modals.types";

export function useModal(): IUseModal {
  const [isVisible, setIsVisible] = useState(false);

  return {
    isVisible,
    toggleModal: () => {
      setIsVisible(!isVisible);
    },
  };
}
