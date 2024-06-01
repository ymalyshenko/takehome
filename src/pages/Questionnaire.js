import { useNavigate, useParams } from 'react-router-dom';

import NoMatch from './NoMatch';
import { useSelector, useDispatch } from 'react-redux';
import { writeAnswer } from '../store/assessmentSlice';
import PersonQuestion from '../components/questions/Person';
import NameQuestion from '../components/questions/Name';
import DobQuestion from '../components/questions/Dob';
import DescriptionQuestion from '../components/questions/Description';
import Summary from '../components/Summary';

export default function Questionnaire() {
  const { questionId } = useParams();
  const assessment = useSelector(state => state.assessment.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleNext = payload => {
    dispatch(writeAnswer({ questionId, ...payload }));
    navigate(`/${Number(questionId) + 1}`);
  };

  const questionnaire = {
    1: <PersonQuestion handleNext={handleNext} />,
    2: <NameQuestion handleNext={handleNext} />,
    3: <DobQuestion handleNext={handleNext} />,
    4: <DescriptionQuestion handleNext={handleNext} />,
    5: <Summary assessment={assessment} />,
  };

  return questionnaire[questionId] ?? <NoMatch />;
}
