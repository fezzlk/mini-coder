import { useState, SyntheticEvent } from 'react';
// import useSWR from 'swr';
import { useQuestionSet } from '~/stores/contexts';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ExamArea from '~/components/ExamArea'

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function ExamContentsTab() {
  const { data: questionSet } = useQuestionSet();
  const [value, setValue] = useState(1);

  if (!questionSet) return <div>Loading...</div>;

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          {
            questionSet.map((qSet) => {
              return <Tab key={qSet.index} label={`Q. ${qSet.index}`}  {...a11yProps(qSet.index-1)} />;
            })
          }
        </Tabs>
      </Box>
      {
        questionSet.map((qSet) => {
          return (
            <TabPanel key={qSet.index} value={value} index={qSet.index-1}>
              <ExamArea id={qSet.id} q={qSet.q} />
            </TabPanel>
          );
        })
      }
    </Box>
  );
}