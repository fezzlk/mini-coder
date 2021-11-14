import type { NextPage } from 'next';
import ExamContentsTab from '~/components/ExamContentsTab';
import Layout from '~/components/Layout';
import { useQuestionSet } from '~/stores/contexts';
import { restClient } from '~/utils/rest-client';

type Props = {
  data: any;
};

const ExamPage: NextPage<Props> = (props: Props): JSX.Element => {
  const { mutate: mutateQuestionSet} = useQuestionSet();
  mutateQuestionSet(props.data)
  return (
    <Layout>
      <ExamContentsTab />
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
    console.log(e);
    return {
      props: {
        data: '問題の取得に失敗しました。'
      }
    }
  }
}

export default ExamPage

