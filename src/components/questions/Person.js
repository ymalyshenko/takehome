import { Button, Typography } from '@mui/material';
import logo from '../../assets/images/logo.png';
import Box from '@mui/material/Box';
import { useSelector } from 'react-redux';

export default function PersonQuestion({ handleNext }) {
  const assessment = useSelector(state => state.assessment.value);
  const selectedPerson = assessment[1]?.answer;
  const text = 'Who is this visit for?';
  const options = ['Me', 'Someone else'];

  return (
    <Box gap={5} display="flex" flexDirection="column" sx={{ position: 'relative', top: '40%' }}>
      <img src={logo} width={162} height={54} alt="Logo" loading="lazy" />

      <Typography className="question-text">{text}</Typography>

      <Box gap={4} display="flex" flexDirection="column">
        {options.map((option, key) => (
          <Button
            key={key}
            className={selectedPerson !== option ? 'non-selected-person' : ''}
            variant="outlined"
            sx={{ alignSelf: 'flex-end' }}
            onClick={() => handleNext({ question: text, answer: option })}
          >
            {option}
          </Button>
        ))}
      </Box>
    </Box>
  );
}
