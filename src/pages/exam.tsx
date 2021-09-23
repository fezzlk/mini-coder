import type { NextPage } from 'next'
import Button from '@mui/material/Button';

const Home: NextPage = () => {

  return (
    <div>
      <div>
        Q. 整数 a, b が標準入力で与えられます。a + b を出力してください。
      </div>
      <input type="text"></input>
      <Editor mode="javascript" theme="github" value="const foo = 42;" />
      <Button variant="contained" color="primary">Submit</Button>
    </div>
  )
}

export default Home

const Editor = (props) => {
  if (typeof window !== 'undefined') {
    const Ace = require('react-ace').default;
    require('brace/mode/javascript');
    require('brace/theme/github');

    return <Ace {...props}/>
  }

  return null;
}

