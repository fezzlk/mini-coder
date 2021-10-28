import { useEffect, useState } from 'react';
// import useSWR from 'swr';
import { useQuestionSet } from '~/stores/contexts';
import Button from '@mui/material/Button';
import Editor from "@monaco-editor/react";


export default function ExamArea() {
  const { data: questionSet, mutate: mutateQuestionSet } = useQuestionSet();
  // if (error) return <div>問題の取得に失敗しました。</div>
  // if (!data) return <div>Loading...</div>

  return (
    <div className="grid grid-cols-1 gap-5 my-10">
      <div>
        Q. {questionSet}
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
      <div>送信処理は未実装です</div>
    </div>
  );
}