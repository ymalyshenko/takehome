import { DatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import QuestionContainer from './QuestionContainer';
import { useSelector } from 'react-redux';

export default function DobQuestion({ handleNext }) {
  const assessment = useSelector(state => state.assessment.value);
  const dobValue = assessment[3]?.answer ?? null;
  const [dob, setDob] = useState(dobValue);
  const [text, setText] = useState('');

  useEffect(() => {
    const name = assessment['2']?.answer;
    const greet = 'Great to meet you';
    const question = ' What’s your date of birth?';
    const newText = name ? `${greet}, ${name}! ${question}` : `${greet}! ${question}`;

    setText(newText);
  }, [assessment]);

  return (
    <QuestionContainer question={text} answer={dob} onSubmit={handleNext}>
      <DatePicker
        placeholder="Enter DOB"
        defaultValue={dobValue ? dayjs(dobValue) : null}
        onChange={date => setDob(date.toISOString())}
      />
    </QuestionContainer>
  );
}
