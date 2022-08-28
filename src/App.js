import React, { useState, useEffect } from 'react';
import './App.scss';
import ColorsArray from './colorsArray.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

let quoteDBUrl = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"

function App() {

  // declaring variables and functions with their initial state
  const [quote, setQuote] = useState("Life is 10% what happens to you and 90% how you react to it.")
  const [author, setAuthor] = useState("Charles Swindoll")
  const [randomNumber, setRandomNumber] = useState(0)
  const [accentColor, setAccentColor] = useState('#282C34')

  // fetch the database after the page loads
  // the database is put inside the declared quotesArray with initial state set to null
  const [quotesArray, setQuotesArray] = useState(null)

  // function to fetch the database
  const fetchQuotes = async (url) => {
    const response = await fetch(url)
    // the source usually stored the keys as strings so parsed
    const parsedJSON = await response.json()
    setQuotesArray(parsedJSON.quotes)
  }
  useEffect(() => {
    fetchQuotes(quoteDBUrl)
  }, [quoteDBUrl])

  // functions of initial state altered here and called at 3 separate buttons
  /*
  const changeQuoteAndAuthor0 = () => {
    setQuote("Life is 10% what happens to you and 90% how you react to it.");
    setAuthor("Charles Swindoll")
  }
  const changeQuoteAndAuthor1 = () => {
    setQuote("The question isn't who is going to let me; it's who is going to stop me."); setAuthor("Ayn Rand")
  }
  const changeQuoteAndAuthor2 = () => {
    setQuote("Either write something worth reading or do something worth writing")
    setAuthor("Benjamin Franklin")
  }
  */

  function generateRandomQuote() {
    let randomInteger = Math.floor(Math.random() * quotesArray.length);
    setRandomNumber(randomInteger);
    setAccentColor(ColorsArray[randomInteger])
    // upon generating a number, the specific item of the array is called and the state is changed to be that item 
    setQuote(quotesArray[randomInteger].quote);
    setAuthor(quotesArray[randomInteger].author);
  }

  // initial array containing all the quotes and author
  // const quotesArray = [{ quote: "Life is 10% what happens to you and 90% how you react to it.", author: "Charles Swindoll" }, { quote: "The question isn't who is going to let me; it's who is going to stop me.", author: "Ayn Rand" }, { quote: "Either write something worth reading or do something worth writing", author: "Benjamin Franklin" }, { quote: "What`s money? A man is a success if he gets up in the morning and gets to bed at night and in between does what he wants to do.", author: "Bob Dylan" }]

  return (
    <div className="App">
      <header className="App-header" style={{ backgroundColor: accentColor }}>
        <div id='quote-box' style={{ color: accentColor }}>
          <p id='text'>
            <span><FontAwesomeIcon icon={faQuoteLeft} /></span>{quote}"
          </p>
          <p id='author'>
            - {author}
          </p>
          <div className='button'>
            <a id='tweet-quote' style={{ backgroundColor: accentColor }} href={encodeURI(`http://www.twitter.com/intent/tweet?text=${quote} -${author}`)}><FontAwesomeIcon icon={faTwitter} /></a>

            <button id='new-quote' style={{ backgroundColor: accentColor }} onClick={() => generateRandomQuote()}>New Quote</button>
          </div>
        </div>
      </header >
    </div >
  );
}

export default App;

// encodeURI converts the symbols within the quotesArray into safe texts 