interface TableRowItemProps {
  value: any;
}

export const TableRowItem = ({ value }: TableRowItemProps) => {
  return (
    <td className="border border-slate-300 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">
      {value}
    </td>
  );
};
