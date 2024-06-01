import { CircularProgress, Typography } from '@mui/material';
import { CohereClient } from 'cohere-ai';
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';

export default function Summary({ assessment }) {
  const [summary, setSummary] = useState('');

  const cohere = new CohereClient({
    token: process.env.API_TOKEN ?? '',
  });

  const responseGenerate = async inputText => {
    const completion = await cohere.chat({
      model: 'command-r-plus',
      stream: false,
      preamble:
        'You are a medical assistant helping user analyze symptoms and collect anamnesis. User will give you alist of questions and answers, you should summarize all the answers and produce a coherent text message. Respond should be in paragraph format, avoid using any markdown symbol',
      message: `Write a summary based on the list of questions and answers: "${inputText}"`,
    });

    setSummary(completion?.text);
  };

  useEffect(() => {
    const promt = Object.keys(assessment).reduce((acc, key) => {
      return `${acc ? acc + ';' : acc} ${key}: question: ${assessment[key].question}, answer: ${assessment[key].answer}`;
    }, '');

    promt && responseGenerate(promt);
  }, []);

  return (
    <Box display="flex" flexDirection="column" gap={5} sx={{ top: '10%', position: 'relative' }}>
      <Typography>Summary</Typography>

      {summary ? <Typography className="question-text">{summary}</Typography> : <CircularProgress size="1.75rem" />}
    </Box>
  );
}
