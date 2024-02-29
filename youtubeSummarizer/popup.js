let curVid = "";
document.addEventListener('DOMContentLoaded', function() {
  var grabButton = document.getElementById('grabButton');
  const textToSpeechButton = document.getElementById('textToSpeechButton');
  const p1 = document.getElementById('p1');

  grabButton.addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, async function(tabs) {
      var currentUrl = tabs[0].url;
      curVid = currentUrl;
      const data = await fetchData(); // Call fetchData function after setting curVid
      await sumText(data);
    });
  });
  textToSpeechButton.addEventListener('click', function() {
    const text = p1.textContent;
    if (text) {
      // Using SpeechSynthesis API to convert text to speech
      const speech = new SpeechSynthesisUtterance(text);
      speech.lang = 'en-US';
      window.speechSynthesis.speak(speech);
    } else {
      alert("No text to convert to speech.");
    }
  });
});

async function fetchData() {
  var regex = /[?&]v=([^?&]+)/i;
  var match = curVid.match(regex);
  if (match && match[1]) {
      curVid = match[1];
  }
  const url = 'https://youtube-scraper-2023.p.rapidapi.com/video_transcript';
  const options = {
    method: 'POST',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'X-RapidAPI-Key': '4cab22d43dmsh7ad429c5f0a13f4p19dd3ajsn5627d7aae312',
      'X-RapidAPI-Host': 'youtube-scraper-2023.p.rapidapi.com'
    },
    body: new URLSearchParams({
      videoId: curVid
    })
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    const data = JSON.parse(result);
    const snippets = data.transcript.map(item => item.snippet).filter(snippet => snippet !== null);
    const transcriptText = snippets.join(" ");
    return transcriptText;
  } catch (error) {
    console.error(error);
  }
}

async function sumText(data){
  const url = 'https://open-ai21.p.rapidapi.com/conversationgpt35';
  const options = {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': '4cab22d43dmsh7ad429c5f0a13f4p19dd3ajsn5627d7aae312',
      'X-RapidAPI-Host': 'open-ai21.p.rapidapi.com'
    },
    body: JSON.stringify( {
      messages: [
        {
          role: 'user',
          content: `give me a summary for the following text: "${data}" `
        }
      ],
      web_access: false,
      system_prompt: '',
      temperature: 0.9,
      top_k: 5,
      top_p: 0.9,
      max_tokens: 256
    })
  };
  const doc1 = document.getElementById("p1");
  
  try {
    const response = await fetch(url, options);
    const result = await response.text();
    const jsonObject = JSON.parse(result);
    const theResult = jsonObject.result;
    doc1.innerHTML = theResult;
  } catch (error) {
    console.error(error);
  }
}