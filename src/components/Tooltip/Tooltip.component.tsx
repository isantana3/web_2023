import { useRef } from "react";

import { type ITooltipProps } from "./Tooltip.types";

import { Container, Label } from "./Tooltip.styles";

export function Tooltip({
  children,
  label,
  position,
}: ITooltipProps): JSX.Element {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <Container>
      <Label
        width={contentRef.current?.clientWidth ?? 0}
        height={contentRef.current?.clientHeight ?? 0}
        position={position}
      >
        {label}
      </Label>
      <div ref={contentRef}>{children}</div>
    </Container>
  );
}
