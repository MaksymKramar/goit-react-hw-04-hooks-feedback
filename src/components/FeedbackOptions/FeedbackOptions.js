import React from "react";
import PropTypes from "prop-types";
import { Button } from "./FeedbackOptions.style";

function FeedbackOptions({ buttons, onLeaveFeedback }) {
  return (
    <div>
      {buttons.map((btn, i) => (
        <Button key={i} type="button" onClick={() => onLeaveFeedback(btn)}>
          {btn}
        </Button>
      ))}
    </div>
  );
}

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
