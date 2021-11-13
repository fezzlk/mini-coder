import { useEffect, useState } from 'react';
// import useSWR from 'swr';
import { useQuestionSet } from '~/stores/contexts';
import Button from '@mui/material/Button';
import Editor from "@monaco-editor/react";
import { restClient } from '~/utils/rest-client';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';


export default function ExamArea() {
  const { data: questionSet, mutate: mutateQuestionSet } = useQuestionSet();
  const [answer, setAnswer] = useState<string>('');
  const [result, setResult] = useState<string>('');
  const [isCorrect, setIsCorrect] = useState<boolean>(false);

  if (!questionSet) return <div>Loading...</div>

  const onSubmit = async () => {
    try {
      const { data }: { data: { answer: string, result: string, isCorrect: boolean }} = await restClient.apiPost('/exam', { answer });
      setResult('出力結果: ' + data.result);
      setIsCorrect(data.isCorrect);
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
      <div>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Language</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value='python3'
            label="Language"
          >
            <MenuItem value='python3'>Python3</MenuItem>
          </Select>
        </FormControl>
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