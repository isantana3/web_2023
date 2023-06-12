import { Icons } from "global/icons.constants";

import { type ITableProps } from "./Table.types";

import {
  Cell,
  Container,
  Row,
  RowSkelleton,
  TableBody,
  TableContainer,
  TableHeader,
  TableTitle,
  Title,
} from "./Table.styles";

export function Table({
  header,
  row,
  actions,
  title,
  keys,
  headerIcon,
  onClickRow,
  isLoading,
}: ITableProps): JSX.Element {
  if (isLoading) {
    return (
      <Container>
        {title && (
          <Title>
            {title}
            {headerIcon}
          </Title>
        )}
        <TableContainer>
          <TableHeader>
            <Row key={`th-0`}>
              {header.map((item) => (
                <TableTitle key={`th-${item}`}>{item}</TableTitle>
              ))}
              {actions ? (
                <TableTitle>
                  <Icons.DotsIcon />{" "}
                </TableTitle>
              ) : undefined}
            </Row>
          </TableHeader>
          <TableBody>
            {/* Skelleton */}
            <RowSkelleton>
              {keys.map((key: string, index) => (
                <Cell key={`td-R-${index}`}>Lorem ipsum dolor</Cell>
              ))}
              {actions ? <Cell /> : undefined}
            </RowSkelleton>
            <RowSkelleton>
              {keys.map((key: string, index) => (
                <Cell key={`td-R-${index}`}>Lorem ipsum dolor</Cell>
              ))}
              {actions ? <Cell /> : undefined}
            </RowSkelleton>
            <RowSkelleton>
              {keys.map((key: string, index) => (
                <Cell key={`td-R-${index}`}>Lorem ipsum dolor</Cell>
              ))}
              {actions ? <Cell /> : undefined}
            </RowSkelleton>
          </TableBody>
        </TableContainer>
      </Container>
    );
  }

  if (row.length === 0) {
    return (
      <Container>
        {title && (
          <Title>
            {title}
            {headerIcon}
          </Title>
        )}
        <TableContainer>
          <TableHeader>
            <Row key={`th-0`}>
              {header.map((item) => (
                <TableTitle key={`th-${item}`}>{item}</TableTitle>
              ))}
            </Row>
          </TableHeader>
          <TableBody>
            <Row>
              {keys.map((key: string, index) => (
                <Cell key={`td-R-${index}`}>Nenhum dado encontrado !</Cell>
              ))}
            </Row>
          </TableBody>
        </TableContainer>
      </Container>
    );
  }

  return (
    <Container>
      {title && (
        <Title>
          {title}
          {headerIcon}
        </Title>
      )}
      <TableContainer>
        <TableHeader>
          <Row key={`th-0`}>
            {header.map((item, row) => (
              <TableTitle key={`th-${item}`}>{item}</TableTitle>
            ))}
            {actions ? (
              <TableTitle>
                <Icons.DotsIcon />{" "}
              </TableTitle>
            ) : undefined}
          </Row>
        </TableHeader>
        <TableBody>
          {/* Skelleton */}
          {isLoading &&
            row.map((cell, row) => (
              <RowSkelleton key={`tr-${row}`}>
                {keys.map((key: string, index) => (
                  <Cell key={`td-${row}-${index}`} />
                ))}
                {actions ? <Cell /> : undefined}
              </RowSkelleton>
            ))}

          {/* Component */}
          {row.map((cell, row) => (
            <Row
              onClick={() => {
                if (onClickRow) {
                  onClickRow(row);
                }
              }}
              key={`tr-${row}`}
            >
              {keys.map((key: string, index) =>
                key.includes(".") ? (
                  <Cell key={`td-${row}-${index}`}>
                    {cell[key.split(".")[0]][key.split(".")[1]]}
                  </Cell>
                ) : (
                  <Cell key={`td-${row}-${index}`}>{cell[key]}</Cell>
                )
              )}
              {actions ? <Cell>{actions(row)}</Cell> : undefined}
            </Row>
          ))}
        </TableBody>
      </TableContainer>
    </Container>
  );
}
