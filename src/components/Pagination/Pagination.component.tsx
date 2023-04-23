import { useMemo } from "react";

import { Icons } from "global/icons.constants";

import { Select } from "components/Form/Select";

import { type IPaginationProps } from "./Pagination.types";

import { Container, PageButton } from "./Pagination.styles";

export function Pagination({
  currentPage,
  totalPages,
  setPage,
}: IPaginationProps): JSX.Element {
  const options = useMemo(() => {
    const arr = [];
    for (let i = 0; i <= totalPages; i++) {
      arr.push({ label: i, value: i });
    }
    return arr;
  }, [totalPages]);
  return (
    <Container>
      <PageButton
        onClick={() => {
          setPage(currentPage - 1);
        }}
        disabled={currentPage - 1 === 0}
      >
        <Icons.LeftArrowIcon />
        Anterior
      </PageButton>
      {/* <Select name="pagination" options={options} /> */}
      <PageButton
        onClick={() => {
          setPage(currentPage + 1);
        }}
        disabled={currentPage + 1 > totalPages}
      >
        Próximo
        <Icons.RightArrowIcon />
      </PageButton>
    </Container>
  );
}
