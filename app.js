function showRecommendation(response) {
  new Typewriter("#books-recommended", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateRecommendation(event) {
  event.preventDefault();

  let tropeInput = document.querySelector("#trope");

  let prompt = `User instructions: Generate a list of five real adult romance books that are similar to: ${tropeInput.value}`;

  let context = `You are IA specialized in adult romance books. You also have access to romance books and their respective authors, as well as their categories. You have read many recently released romance books and you're part of BookTok.
Your mission is to generate a list of adult romance books that have the category specified in basic HTML. Please do not include the word "html" or backticks.
Only use the information available on Goodreads. Make sure you can find the book on Goodreads with the exact same author. Please do not make up titles or authors. 
The books listed must belong in the romance genre.
Do not include links.
Do not leave empty space above the list.
Each bullet of the list should be presented like this: <p><strong>Title</strong> by Author</p>

Make sure to follow the user's instructions.`;

  let apiKey = "39d5a6021fofb45e9e8c92202c37tc3f";

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(showRecommendation);
}

let tropeFormElement = document.querySelector("#trope-form");
tropeFormElement.addEventListener("submit", generateRecommendation);
