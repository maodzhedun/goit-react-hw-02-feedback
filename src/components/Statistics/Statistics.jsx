import React, { Component } from 'react';

class Statistics extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  incrementGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  incrementNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  incrementBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage() {}

  render() {
    return (
      <div>
        <h1>Please leave feedback</h1>
        <div>
          <button type="button" onClick={this.incrementGood}>
            Good
          </button>
          <button type="button" onClick={this.incrementNeutral}>
            Neutral
          </button>
          <button type="button" onClick={this.incrementBad}>
            Bad
          </button>
        </div>
        <h2>Statistics</h2>
        <div>
          <p>Good: {this.state.good}</p>
          <p>Neutral: {this.state.neutral}</p>
          <p>Bad: {this.state.bad}</p>
          <p>Total: </p>
          <p>Positive feedback: </p>
        </div>
      </div>
    );
  }
}

export default Statistics;
