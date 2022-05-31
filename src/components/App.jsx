import FeedbackOptions from './FeedbackOptions/';

import Statistics from './Statistics/Statistics';

import Notification from './Notification/';

import Section from './Section/';

import Container from './Container/';

import { useState } from 'react';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = e => {
    const cur = e.currentTarget.textContent;
    switch (cur) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        break;
    }
  };

  const totalSum = () => {
    return bad + good + neutral;
  };

  const percentCalc = () => {
    let num = 0;
    if (good === 0) return;
    num += (good * 100) / totalSum();
    return Math.round(num) + '%';
  };

  return (
    <Container className="main-container">
      <Section title={'Plese leave feedback'}>
        <FeedbackOptions
          options={['good', 'bad', 'neutral']}
          onLeaveFeedback={handleClick}
        />
      </Section>
      <Section title={'Statistics'}>
        {totalSum() ? (
          <Statistics
            bad={bad}
            good={good}
            neutral={neutral}
            total={totalSum()}
            percent={percentCalc()}
          />
        ) : (
          <Notification message={'There is no feedback'} />
        )}
      </Section>
    </Container>
  );
}

export default App;
