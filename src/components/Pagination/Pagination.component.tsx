import { useMemo } from "react";

import { paginationLimit } from "global/constants";
import { Icons } from "global/icons.constants";

import { Button } from "components/Button";
import { type IOptions } from "components/Select/Select.types";

import { type IPaginationProps } from "./Pagination.types";

import { Container } from "./Pagination.styles";

export function Pagination({ page, setPage }: IPaginationProps): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const options = useMemo(() => {
    const arr: IOptions[] = [];
    for (let i = 1; i <= (page.totalPages as number); i++) {
      arr.push({ label: i, value: i });
    }
    return arr;
  }, [page]);

  return (
    <Container>
      <Button
        iconStroke
        callback={() => {
          setPage({
            page: page.page - 1,
            totalPages: page.totalPages,
            limit: paginationLimit,
          });
        }}
        disabled={page.page - 1 === 0}
        label="Anterior"
        icon={<Icons.LeftArrowIcon width={20} height={20} />}
      />
      {/* <Select
        disabled
        defaultValue={{
          label: page.page,
          value: page.page,
        }}
        onChange={(val) => {
          setPage({
            page: val.value as number,
            totalPages: page.totalPages,
            limit: paginationLimit,
          });
        }}
        options={options}
      /> */}
      <Button
        iconStroke
        callback={() => {
          setPage({
            page: page.page + 1,
            totalPages: page.totalPages,
            limit: paginationLimit,
          });
        }}
        label="Próximo"
        disabled={page.page + 1 > (page.totalPages as number)}
        icon={<Icons.RightArrowIcon width={20} height={20} />}
        iconPosition="right"
      />
    </Container>
  );
}
