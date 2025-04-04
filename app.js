function generateRecommendation(event) {
  event.preventDefault();

  new Typewriter("#books-recommended", {
    strings: "Recommendation",
    autoStart: true,
    delay: 1,
  });
}

let tropeFormElement = document.querySelector("#trope-form");
tropeFormElement.addEventListener("submit", generateRecommendation);

let prompt = "";
let context = "You are IA specialized in romance books.";
let apiKey = "39d5a6021fofb45e9e8c92202c37tc3f";
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

axios.get(apiUrl).then(showRecommendation);
