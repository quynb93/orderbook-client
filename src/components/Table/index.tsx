import { TableBody } from "../TableBody";
import { TableHead } from "../TableHead";

interface TableProps {
  columns: string[];
  resources: any[][];
}

export const Table = ({ columns, resources }: TableProps) => {
  return (
    <table className="border-collapse w-full border border-slate-400 dark:border-slate-500 bg-white dark:bg-slate-800 text-sm shadow-sm">
      <TableHead columns={columns} />
      <TableBody resources={resources} />
    </table>
  );
};
