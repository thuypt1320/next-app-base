import { FC } from "react";
import { TableProps, Thead, Table as TableChakra, Th, Tbody, Tr, Td } from "@chakra-ui/table";
interface ITableProps extends TableProps {
  data?: unknown[]
  onClickRow?: (value: unknown) => void
}

const defaultData = [{ data: '-' }];
export const Table: FC<ITableProps> = ({ data = defaultData, onClickRow }) => {
  const headers = data[0] ? Object.keys(data[0]) : ['data'];
  const rows = data?.map(item => typeof item === 'object' ? Object.values(item) : ['-']);
  return (
    <TableChakra>
      <Thead>
        <Tr>{headers.map((item, index) => <Th key={index}>{item}</Th>)}</Tr>
      </Thead>
      <Tbody>
        {rows?.map((row, index) => <Tr key={index} onClick={() => onClickRow(data[index])}>
          {row.map((item, idx) => <Td key={idx}>{item}</Td>)}
        </Tr> || <tr/>)}
      </Tbody>
    </TableChakra>
  );
};
