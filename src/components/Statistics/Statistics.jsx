import React, { Component } from 'react';

class Statistics extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // Обработчик клика на кнопке, который увеличивает значение соответствующей категории обратной связи.
  onclickButton = key => {
    this.setState(prevState => ({
      [key]: prevState[key] + 1,
    }));
  };

  // Функция для подсчета общего количества полученной обратной связи.
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  // Функция для подсчета процента положительной обратной связи. (Должна быть реализована).
  countPositiveFeedbackPercentage() {
    const totalCount = this.countTotalFeedback();
    // Здесь нужно реализовать логику подсчета процента положительной обратной связи.
     return  totalCount === 0 ? 0 : Math.round((this.state.good / this.countTotalFeedback()) * 100)
    
  }

  render()
  {
   
    const keys = Object.keys(this.state);
    const totalCount = this.countTotalFeedback()
    console.log(totalCount);
    return (
      <div>
        <h1>Please leave feedback</h1>
        <div>
          {keys.map(key => (
            // Кнопка для каждой категории обратной связи с обработчиком клика.
            <button
              type="button"
              key={key}
              onClick={() => this.onclickButton(key)}
            >
              {key}
            </button>
          ))}
        </div>
        <h2>Statistics</h2>
        {totalCount === 0 ? (
          <h2>Get feedabck</h2>
        ) : (
          <div>
            <p>Good: {this.state.good}</p>
            <p>Neutral: {this.state.neutral}</p>
            <p>Bad: {this.state.bad}</p>
            <p>Total: {totalCount}</p>
            {/* Здесь должно отобразиться значение положительной обратной связи */}
            <p>Positive feedback: {this.countPositiveFeedbackPercentage()}%</p>
          </div>
        )}
      </div>
    );
  }
}

export default Statistics;
