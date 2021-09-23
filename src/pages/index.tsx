import type { NextPage } from 'next'
import Link from 'next/link'
import Layout from '~/components/Layout'
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="h-full flex flex-wrap content-center grid grid-cols-1">
        <div className="font-bold text-7xl whitespace-nowrap flex justify-center m-3">
          <span className="p-3">
            Welcome to
          </span>
          <span className="bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-xl p-3">
            mini corder
          </span>
        </div>
        <div className="m-3 text-center">
          <Link href="/exam" passHref>
            <Button variant="outlined" color="primary" endIcon={<ArrowForwardIcon />}>LET&apos;S START</Button>
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default Home
