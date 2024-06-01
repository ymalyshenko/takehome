import { TextField } from '@mui/material';
import { useState } from 'react';
import QuestionContainer from './QuestionContainer';
import { useSelector } from 'react-redux';

export default function NameQuestion({ handleNext }) {
  const assessment = useSelector(state => state.assessment.value);
  const nameValue = assessment['2']?.answer ?? '';
  const [patientName, setPatientName] = useState(nameValue);

  const text = 'What’s your name?';

  return (
    <QuestionContainer question={text} answer={patientName} onSubmit={handleNext}>
      <TextField
        id="name-field"
        variant="outlined"
        placeholder="Enter Name"
        defaultValue={nameValue}
        onChange={e => setPatientName(e.target.value)}
      />
    </QuestionContainer>
  );
}
