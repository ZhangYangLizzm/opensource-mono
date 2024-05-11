import { Upload } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import { Workbook } from "exceljs";
import { RcFile } from "antd/es/upload";
import { useState } from "react";
import ExcelTable from "./components/ExcelTable";
import { readBlob, ReadMode } from "@packages/shared/readBlobUtil";
import { useTranslation } from "react-i18next";

const getDraggerProps = (
  cb: (header: string[], content: ExcelDataStruct[]) => void,
) => {
  return {
    height: 200,
    multiple: false,
    beforeUpload: async (file: RcFile) => {
      const buffer = await readBlob(file, ReadMode.ArrayBuffer);
      const workbook = new Workbook();
      await workbook.xlsx.load(buffer);
      const worksheet = workbook.getWorksheet();

      const sheetData = worksheet
        ?.getSheetValues()
        ?.map((rowItem) => (rowItem as string[])?.filter((item) => !!item))
        .slice(1);

      if (sheetData?.length) {
        const sheetHeader = sheetData[0];
        const sheetContent = sheetData?.slice(1);
        let tempArr: Array<ExcelDataStruct> = [];

        sheetContent?.map((rowItem, rowIndex) => {
          let tempObj: Record<string, any> = { key: rowIndex };
          rowItem.map((rowValue, valueIndex) => {
            tempObj[sheetHeader[valueIndex]] = rowValue;
          });
          tempArr.push(tempObj as ExcelDataStruct);
        });
        cb(sheetHeader, tempArr);
      }
      return false;
    },
  };
};

const ExcelImport = () => {
  const [tabelData, setTabelData] = useState<ExcelDataStruct[]>([]);
  const [tableHeader, setTableHeader] = useState<string[]>([]);

  const { t } = useTranslation();

  const draggerProps = getDraggerProps((header, content) => {
    setTableHeader(header);
    setTabelData(content);
  });

  return (
    <div className="flex flex-col gap-4">
      <Upload.Dragger
        {...draggerProps}
        accept=".xlsx"
        showUploadList={false}
      >
        <p>
          <InboxOutlined />
        </p>
        <p>{t("ZYUgOxOHRp5J6MJsW4cwS")}</p>
        <p>{t("Q-dacxTzCKsG4LTS8HXJA")}</p>
      </Upload.Dragger>

      <ExcelTable
        columns={tableHeader}
        dataSource={tabelData}
      />
    </div>
  );
};

export default ExcelImport;
