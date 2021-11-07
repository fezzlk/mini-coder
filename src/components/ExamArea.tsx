import { useEffect, useState } from 'react';
// import useSWR from 'swr';
import { useQuestionSet } from '~/stores/contexts';
import Button from '@mui/material/Button';
import Editor from "@monaco-editor/react";
import { restClient } from '~/utils/rest-client';


export default function ExamArea() {
  const { data: questionSet, mutate: mutateQuestionSet } = useQuestionSet();
  const [answer, setAnswer] = useState<string>('');
  const [result, setResult] = useState<string>('');

  if (!questionSet) return <div>Loading...</div>

  const onSubmit = async () => {
    try {
      const { data }: { data: {answer: string}} = await restClient.apiPost('/exam', { answer });
      setResult('提出された回答: ' + data.answer);
    }
    catch(e) {
      console.log(e);
    }
  }

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
          value={answer}
          onChange={(value) => { setAnswer(value || '') }}
        />
      </div>
      <div>
        <Button variant="contained" color="primary" onClick={onSubmit}>Submit</Button>
      </div>
      <div>
        {result || 'ここに結果が表示されます。'}
      </div>
    </div>
  );
}