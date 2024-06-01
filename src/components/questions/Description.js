import { TextField } from '@mui/material';
import { useState } from 'react';
import QuestionContainer from './QuestionContainer';
import { useSelector } from 'react-redux';

export default function DescriptionQuestion({ handleNext }) {
  const assessment = useSelector(state => state.assessment.value);
  const descriptionValue = assessment[4]?.answer ?? '';
  const [description, setDescription] = useState(descriptionValue);
  const text = 'Describe in your issue in your own words';

  return (
    <QuestionContainer question={text} answer={description} onSubmit={handleNext}>
      <TextField
        id="description-field"
        multiline
        rows={4}
        placeholder="start typing here..."
        defaultValue={descriptionValue}
        onChange={e => setDescription(e.target.value)}
      />
    </QuestionContainer>
  );
}
