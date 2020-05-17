const generateButton = document.getElementById("generate-button");
const quoteText = document.getElementById("quote-text");
const forwardButton = document.getElementById("forward-button");

// Function to generate quote
const getQuote = () => {
    fetch("https://type.fit/api/quotes")
        .then(res => res.json())
        .then(data => {

            // Function to generate random quotes
            const generateRandomQuote = () => {
                const quotesArr = data;

                for (let i=0; i<quotesArr.length; i++){
                    //Generate random number
                    randomNum = Math.floor(Math.random() * quotesArr.length);
                    //Generate random quote object in array
                    randomQuote = quotesArr[randomNum];
                    nextRandomQuote = quotesArr[quotesArr.indexOf(randomQuote) + 1];
                }

                let generateQuote = `
                <div class = quote-anim>
                    <p id="quote"><img src="./images/quote.png" alt=""> ${randomQuote.text}</p>
                    <span>- ${randomQuote.author}</span>
                </div>
                `

                return generateQuote;
            }

            quoteText.innerHTML = generateRandomQuote();
            
        })
}

const getInitialQuote = () => {
    fetch("https://type.fit/api/quotes")
        .then(res => res.json())
        .then(data => {

            let generateInitialQuote = `
            <p id="quote"><img src="./images/quote.png" alt=""> ${data[0].text}</p>
            <span>- ${data[0].author}</span>
            `

            quoteText.innerHTML = generateInitialQuote;
        })

       
}

getInitialQuote();

const nextQuote = () => {
    fetch("https://type.fit/api/quotes")
    .then(res => res.json())
    .then(data => {
        let generatenextQuote = `
            <p id="quote"><img src="./images/quote.png" alt=""> ${data[0].text}</p>
            <span>- ${data[0].author}</span>
            `

            console.log(generatenextQuote);
            quoteText.innerHTML = generatenextQuote;
    })
}


// Event Listener
generateButton.addEventListener("click", getQuote);
forwardButton.addEventListener("click", nextQuote);