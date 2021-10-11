import axiosBase from 'axios';
import useSWR from 'swr';
import { useQuestionSet } from '~/stores/contexts';
import Button from '@mui/material/Button';
import Editor from "@monaco-editor/react";


export default function ExamArea() {
  const axios = axiosBase.create({
    baseURL: 'http://localhost:3100',
    headers: {
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
    },
    responseType: 'json',
  });
  axios.defaults.withCredentials = true; 
  const fetcher = (url: string) => axios.get(`${url}`);
  // const { data, error } = useQuestionSet(fetcher);
  const { data, error } = useSWR('/1', fetcher);

  if (error) return <div>問題の取得に失敗しました。</div>
  if (!data) return <div>Loading...</div>

  return (
    <div className="grid grid-cols-1 gap-5 my-10">
      <div>
        Q. {data.data}
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
  );
}