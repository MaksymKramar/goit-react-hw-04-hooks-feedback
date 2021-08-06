import "./App.css";

import Statistics from "./components/Statistics/Statistics";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions.js";
import Section from "./components/Section/Section";
import Notification from "./components/Notification/Notification";

import { useState } from "react";

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const btnIncrement = (btnName) => {
    const changeStateValue = (prevState) => prevState + 1;

    if (btnName === "good") {
      setGood(changeStateValue);
    } else if (btnName === "neutral") {
      setNeutral(changeStateValue);
    } else {
      setBad(changeStateValue);
    }
  };

  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = () =>
    Math.round((good * 100) / countTotalFeedback());

  return (
    <div className="container">
      <Section title="Please leave feedback">
        <FeedbackOptions
          buttons={["good", "neutral", "bad"]}
          onLeaveFeedback={btnIncrement}
        ></FeedbackOptions>
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="No feedback given"></Notification>
        )}
      </Section>
    </div>
  );
}

export default App;

Statistics.defaultProps = {
  positivePercentage: 100,
};
