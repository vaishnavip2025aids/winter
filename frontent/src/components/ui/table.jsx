
import * as React from "react";

const Table = ({ children, ...props }) => (
  <div className="w-full overflow-x-auto">
    <table className="w-full caption-bottom text-sm" {...props}>
      {children}
    </table>
  </div>
);

const TableHeader = ({ children, ...props }) => (
  <thead className="[&_tr]:border-b" {...props}>
    {children}
  </thead>
);

const TableBody = ({ children, ...props }) => (
  <tbody className="[&_tr:last-child]:border-0" {...props}>
    {children}
  </tbody>
);

const TableRow = ({ children, ...props }) => (
  <tr className="border-b transition-colors hover:bg-muted/50" {...props}>
    {children}
  </tr>
);

const TableHead = ({ children, ...props }) => (
  <th
    className="h-12 px-4 text-left align-middle font-medium"
    {...props}
  >
    {children}
  </th>
);

const TableCell = ({ children, ...props }) => (
  <td className="p-4 align-middle" {...props}>
    {children}
  </td>
);

export {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
};
