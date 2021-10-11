import type { NextPage } from 'next';
import ExamArea from '~/components/ExamArea';
import Layout from '~/components/Layout'

const ExamPage: NextPage = () => {
  return (
    <Layout>
      <ExamArea />
    </Layout>
  )
}

export default ExamPage

