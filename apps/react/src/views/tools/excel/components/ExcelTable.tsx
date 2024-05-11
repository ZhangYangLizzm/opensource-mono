import { Table } from "antd";
import Column from "antd/es/table/Column";
import { TableRowSelection } from "antd/es/table/interface";
import { useState } from "react";

interface ExcelTableProps {
  columns: string[];
  dataSource: ExcelDataStruct[];
  setSelectRows?: (rows: ExcelDataStruct[]) => void;
}
const ExcelTable = ({
  columns,
  dataSource,
  setSelectRows,
}: ExcelTableProps) => {
  const [selectedRowKeys, setSelectRowKeys] = useState<string[]>([]);

  const rowSelection: TableRowSelection<ExcelDataStruct> = {
    selectedRowKeys: selectedRowKeys,
    onChange: (selectedRowKeys, selectedRows) => {
      setSelectRowKeys(selectedRowKeys as string[]);
      setSelectRows?.(selectedRows);
    },
  };
  return (
    <Table
      dataSource={dataSource}
      bordered
      rowSelection={rowSelection}
      rowKey="Id"
    >
      {columns.map((item) => (
        <Column
          title={item}
          dataIndex={item}
          key={item}
        />
      ))}
    </Table>
  );
};

export default ExcelTable;
