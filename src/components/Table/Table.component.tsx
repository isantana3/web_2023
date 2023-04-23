import { Icons } from "global/icons.constants";

import { type ITableProps } from "./Table.types";

import {
  Cell,
  Container,
  Row,
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
}: ITableProps): JSX.Element {
  return (
    <Container>
      {title && <Title>{title}</Title>}
      <TableContainer>
        <TableHeader>
          {header.map((item) => (
            <TableTitle key={`th-${item}`}>{item}</TableTitle>
          ))}
          {actions ? (
            <TableTitle>
              <Icons.DotsIcon />{" "}
            </TableTitle>
          ) : undefined}
        </TableHeader>
        <TableBody>
          {row.map((rowItems, row) => (
            <Row key={`tr-${row}`}>
              {rowItems.map((item, cell) => (
                <Cell key={`cell-${row}-cell-${cell}`}>{item}</Cell>
              ))}
              {actions ? <Cell>{actions(row)}</Cell> : undefined}
            </Row>
          ))}
        </TableBody>
      </TableContainer>
    </Container>
  );
}
