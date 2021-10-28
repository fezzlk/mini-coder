import type { NextPage } from 'next';
import ExamArea from '~/components/ExamArea';
import Layout from '~/components/Layout';
import { useQuestionSet } from '~/stores/contexts';
import axiosBase from 'axios';

const ExamPage: NextPage = (props) => {
  const { data: questionSet, mutate: mutateQuestionSet } = useQuestionSet();
  mutateQuestionSet(props.data)
  console.log(props.data)
  return (
    <Layout>
      <ExamArea />
    </Layout>
  )
}

export async function getStaticProps() {
  const axios = axiosBase.create({
    baseURL: process.env.BACKEND_SERVER_URL,
    headers: {
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
    },
    responseType: 'json',
  });
  axios.defaults.withCredentials = true;
  const { data } = await axios.get(`/1`);
  console.log(data);
  if (data == null) {
    return {
      props: {
        data: '問題の取得に失敗しました。'
      }
    }
  }
    
  return {
    props: { data },
  }
}

export default ExamPage

