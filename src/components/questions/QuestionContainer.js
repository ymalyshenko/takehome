import { Button, Typography } from '@mui/material';
import Box from '@mui/material/Box';

export default function QuestionContainer({ question, answer, onSubmit, children }) {
  return (
    <Box display="flex" flexDirection="column" justifyContent="space-between" height="85%">
      <Box display="flex" flexDirection="column" gap={4} sx={{ position: 'relative', top: '30%' }}>
        <Typography className="question-text">{question}</Typography>

        {children}
      </Box>

      <Button
        variant="outlined"
        sx={{ alignSelf: 'flex-end' }}
        onClick={() => answer && onSubmit({ question, answer })}
      >
        Submit
      </Button>
    </Box>
  );
}
