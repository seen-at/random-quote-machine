View the project here: https://seen-at.github.io/random-quote-machine/

Variables quote and author along with functions setQuote and setAuthor. The initial states are set. 
Initial array containing 3 different quotes is created and upon clicking button they a random quote is displayed using setQuote function by assigning the quote associated with the random number in the array. 

The initial array is commented.
The link to a JSON file containing numerous quotes is assigned in a variable. 
The file is fetched using fetchQuotes function and parsed to give the array containing all the quotes. 
Using useEffect function the fetching is done immediately as the rendering starts to get the array. Using random numbers quote and author are targeted and dispayed in the screen. 
A JS file containing colors array is imported and different colors are displayed similarly with the randomly generated number. 

The value of the quote and author obtained from the assigned random number in the array is added to the twitter URL and encoded using the encodeURI function to display the quote and author in the twitter post box.
