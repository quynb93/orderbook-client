import { TableRowItem } from "../TableRowItem";

interface TableBodyProps {
  resources: string[][];
}

export const TableBody = ({ resources }: TableBodyProps) => {
  return (
    <tbody>
      {resources.map((row, rowIndex) => (
        <tr key={rowIndex}>
          {row.map((item, columnIndex) => (
            <TableRowItem value={item} key={columnIndex} />
          ))}
        </tr>
      ))}
    </tbody>
  );
};
