import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Editor from "@monaco-editor/react";
import { restClient } from '~/utils/rest-client';
import SelectPLang from '~/components/SelectPLang';

interface Props {
  id: string;
  q: string;
}

export default function ExamArea(props: Props) {
  const [answer, setAnswer] = useState<string>('');
  const [result, setResult] = useState<string>('');
  const [isCorrect, setIsCorrect] = useState<boolean>(false);


  const onSubmit = async () => {
    try {
      const { data }: { data: { answer: string, result: string, isCorrect: boolean }} = await restClient.apiPost('/exam', { id: props.id, answer });
      setResult('出力結果: ' + data.result);
      setIsCorrect(data.isCorrect);
    }
    catch(e) {
      console.log(e);
    }
  }

  return (
    <div className="grid grid-cols-1 gap-5">
      <div>
        Q. {props.q}
      </div>
      <div>
        <SelectPLang />
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
      <div>
        {isCorrect && '正解です！'}
      </div>
    </div>
  );
}