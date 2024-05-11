import React, { useEffect, useState } from "react";
import { Spin } from "antd";
import ExcelDownload from "./components/ExcelDownload";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  fetchExcel,
  selectExcelMockData,
  selectFetchError,
} from "@/store/module/excel";
import { RootState } from "@/store/store";
import ExcelTable from "./components/ExcelTable";
import { SuspenseStatus } from "@/models/status";

const ExcelExport: React.FC = () => {
  const dispatch = useAppDispatch();
  const excelStatus = useAppSelector((state: RootState) => state.excel.status);
  const tabelData = useAppSelector(selectExcelMockData);
  const [selectedRows, setSelectRows] = useState<ExcelDataStruct[]>([]);

  useEffect(() => {
    if (excelStatus === SuspenseStatus.Idle) {
      dispatch(fetchExcel());
    }
  }, [excelStatus, dispatch]);

  if (excelStatus === SuspenseStatus.Loading) {
    return <Spin />;
  } else if (excelStatus === SuspenseStatus.Failed) {
    const error = useAppSelector(selectFetchError);
    return <h1>{error}</h1>;
  } else {
    return (
      <>
        <ExcelDownload
          dataSource={tabelData}
          selectedRows={selectedRows}
        />
        <ExcelTable
          dataSource={tabelData}
          setSelectRows={setSelectRows}
        />
      </>
    );
  }
};

export default ExcelExport;
