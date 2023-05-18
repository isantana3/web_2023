import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  border: 1px solid #d1d9e2;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 10px;
`;

export const Title = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.Components.table.background};
  padding: 16px 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
`;

export const TableContainer = styled.table``;

export const Row = styled.tr``;

export const Cell = styled.td`
  padding: 16px 24px;
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.Components.table.stroke};
`;

export const TableBody = styled.tbody``;

export const TableHeader = styled.thead``;

export const TableTitle = styled.th`
  padding: 16px 24px;
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 500;
  text-align: left;
  font-size: 14px;
  line-height: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.Components.table.stroke};
`;
