async function getWords() {


    try {
        var inputWord = document.querySelector(".search-Word").value;
        console.log(inputWord);
        const data = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${inputWord}`, {
            method: "GET"
        });
        const searchWord = await data.json();
        console.log(searchWord);
        bulidDetails(searchWord);
    } catch (err) {
        console.log("Error", err);
    }


}


function bulidDetails(searchWord) {


    const container = document.createElement("div");
    container.setAttribute = ("class", "wordContainer");
    container.innerHTML = `
     <p><strong>Word</strong> : ${(Object.values(searchWord)[0]).word}</p>
     <p><strong>Origin</strong> : ${(Object.values(searchWord)[0]).origin}</p>
     <p><strong>Phonetics</strong> : ${(Object.values(searchWord)[0]).phonetics[0].text}</p>
     <p><strong> Meaning:</strong></p>
     <p><strong> Part of Speech:</strong>${(Object.values(searchWord)[0]).meanings[0].partOfSpeech}.<br>
        <strong>Definition:</strong> ${(Object.values(searchWord)[0]).meanings[0].definitions[0].definition}<br>
        <strong>Example:</strong>${(Object.values(searchWord)[0]).meanings[0].definitions[0].example} </p>
        `;
    document.querySelector(".dictionary").append(container);


}