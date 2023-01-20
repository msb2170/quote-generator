import {useState, useEffect} from 'react'
import './App.css';

function getRandomQuote(quotes) {
  return quotes[Math.floor(Math.random() * quotes.length)]
}

function App() {
  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState('');

  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then((response) => response.json())
      .then((data) => {
        setQuotes(data);
        setQuote(getRandomQuote(data));
      })
  }, [])

  function getQuote() {
    setQuote(getRandomQuote(quotes))
  }

  return (
    <div className="App">
      <h1>Quote Generator</h1>
        <section>
          <button onClick={getQuote}>New Quote</button>
          <h3>
            <span>"</span>
            {quote.text}
            <span>"</span>
          </h3>
          <span>- {!quote.author ? <em>anonymous</em> : quote.author}</span>
        </section>
    </div>
  );
}

export default App;
