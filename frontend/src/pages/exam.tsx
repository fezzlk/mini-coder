import type { NextPage } from 'next';
import axiosBase from 'axios';
import useSWR from 'swr';
import Button from '@mui/material/Button';
import Editor from "@monaco-editor/react";

const ExamPage: NextPage = () => {
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
  const { data, error } = useSWR('/1', fetcher)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  console.log(data);
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
  )
}

export default ExamPage

