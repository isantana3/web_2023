import { useMemo } from "react";

import { Icons } from "global/icons.constants";

import { Button } from "components/Button";
import { Select } from "components/Select";
import { type IOptions } from "components/Select/Select.types";

import { type IPaginationProps } from "./Pagination.types";

import { Container } from "./Pagination.styles";

export function Pagination({
  currentPage,
  totalPages,
  setPage,
}: IPaginationProps): JSX.Element {
  const options = useMemo(() => {
    const arr: IOptions[] = [];
    for (let i = 1; i <= totalPages; i++) {
      arr.push({ label: i, value: i });
    }
    return arr;
  }, [totalPages]);

  return (
    <Container>
      <Button
        iconStroke
        callback={() => {
          setPage(currentPage - 1);
        }}
        disabled={currentPage - 1 === 0}
        label="Anterior"
        icon={<Icons.LeftArrowIcon width={20} height={20} />}
      />
      <Select
        defaultValue={{
          label: currentPage,
          value: currentPage,
        }}
        onChange={(val) => {
          setPage(val.value as number);
        }}
        options={options}
      />
      <Button
        iconStroke
        callback={() => {
          setPage(currentPage + 1);
        }}
        label="Próximo"
        disabled={currentPage + 1 > totalPages}
        icon={<Icons.RightArrowIcon width={20} height={20} />}
        iconPosition="right"
      />
    </Container>
  );
}
