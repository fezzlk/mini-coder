import type { NextPage } from 'next'
import Layout from '~/components/Layout'

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="h-full flex flex-wrap content-center justify-center">
        <div className="font-bold text-7xl">
          <span className="p-3">
            Welcome to
          </span>
          <span className="bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-xl p-3">
            mini corder
          </span>
        </div>
      </div>
    </Layout>
  )
}

export default Home
