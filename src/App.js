import React, { useState } from 'react';
import data from './data';
import Question from './components/Question';

function App() {
  const [questions, setQuestions] = useState(data);

  return (
    <main className="container">
      <div className="title-container">
        <h3>Discover Waitomo Caves </h3>
        <img
          src="https://img.freepik.com/free-vector/questions-concept-illustration_114360-3932.jpg?size=338&ext=jpg&ga=GA1.2.1789656252.1612428479"
          alt=""
        />
      </div>
      <section className="info">
        {questions.map((question) => {
          return <Question key={question.id} {...question} />;
        })}
      </section>
    </main>
  );
}

export default App;
