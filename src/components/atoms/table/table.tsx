import { FC } from "react";
import { TableProps, Thead, Table as TableChakra, Th, Tbody, Tr, Td } from "@chakra-ui/table";
import * as _ from 'lodash';

interface IExtendColumn {
  label?: string,
  value?: any
}

interface ITableProps extends TableProps {
  data?: unknown[]
  onClickRow?: (value: unknown) => void
  extendColumns?: IExtendColumn[]
}

const defaultData = [{ data: '-' }];
export const Table: FC<ITableProps> = ({ data = defaultData, onClickRow, extendColumns = [] }) => {
  const headers = data[0] ? Object.keys(data[0]) : ['data'];
  const rows = data?.map(item => typeof item === 'object' ? Object.values(item) : ['-']);

  const extendLabels = extendColumns?.map(item => item.label || '') || [''];
  const extendItems = extendColumns?.map(item => item.value || '') || [''];
  return (
    <TableChakra>
      <Thead>
        <Tr>{_.concat([...headers, ...extendLabels]).map((item, index) => <Th key={index}>{item}</Th>)}</Tr>
      </Thead>
      <Tbody>
        {rows.map((row: any[], index) => <Tr key={index}
                                             onClick={() => onClickRow(data[index])}>
          {_.concat([...row, extendItems]).map((item, idx) => <Td key={idx}>{item}</Td>)}
        </Tr> || <tr/>)}
      </Tbody>
    </TableChakra>
  );
};
