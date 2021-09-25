import type { NextPage } from 'next';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Editor from "@monaco-editor/react";

const ExamPage: NextPage = () => {

  return (
    <div className="grid grid-cols-1 gap-5 my-10">
      <div>
        Q. 整数 a, b が標準入力で与えられます。a + b を出力してください。
      </div>
      <div className="border">
        <Editor
          height="10vh"
          defaultLanguage="python"
          defaultValue=""
        />
      </div>
      <div>
        <Button variant="contained" color="primary">Submit</Button>
      </div>
    </div>
  )
}

export default ExamPage

