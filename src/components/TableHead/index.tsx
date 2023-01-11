interface TableHeadProps {
  columns: string[];
}

export const TableHead = ({ columns }: TableHeadProps) => {
  return (
    <thead className="bg-slate-50 dark:bg-slate-700">
      <tr>
        {columns.map((column) => (
          <th
            className="w-1/2 border border-slate-300 dark:border-slate-600 font-semibold p-4 text-slate-900 dark:text-slate-200 text-left"
            key={column}
          >
            {column}
          </th>
        ))}
      </tr>
    </thead>
  );
};
