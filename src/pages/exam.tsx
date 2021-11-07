import { ReactNode } from 'react';
import type { NextPage } from 'next';
import ExamArea from '~/components/ExamArea';
import Layout from '~/components/Layout';
import { useQuestionSet } from '~/stores/contexts';
import axiosBase from 'axios';
import { restClient } from '~/utils/rest-client';

type Props = {
  data: any;
};

const ExamPage: NextPage<Props> = (props: Props): JSX.Element => {
  const { data: questionSet, mutate: mutateQuestionSet } = useQuestionSet();
  mutateQuestionSet(props.data)
  return (
    <Layout>
      <ExamArea />
    </Layout>
  )
}

export async function getStaticProps() {
  try {
    const { data } = await restClient.apiGet('/exam/1', { });
    return {
      props: { data },
    }
  } catch (e) {
    return {
      props: {
        data: '問題の取得に失敗しました。'
      }
    }
  }
}

export default ExamPage

