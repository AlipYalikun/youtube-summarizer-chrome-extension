# YouTube Video summarizer Chrome Extension

# Project Introduction
Welcome to the The YouTube Summarizer Chrome Extension project. The project is a versatile tool designed to enhance the user experience on YouTube by providing concise summaries of the video. With the exponential growth of video content online, accessing valuable information quickly can be challenging. This extension aims to address this challenge by leveraging advanced technologies to generate summaries of video on-demand. The project itself is based on my personal interest as well as learning about APIs. 

## Key Features
1. Summarization: Automatically generates summaries of video transcripts extracted from YouTube videos.
2. Text-to-Speech Integration: Offers the convenience of listening to summarized content using the SpeechSynthesis API.
3. RapidAPI Integration: Utilizes the RapidAPI platform to access external services for transcript retrieval and text summarization via `AI`.
4. Seamless Integration: Integrates seamlessly into the Chrome browser, ensuring a smooth and intuitive user experience.
5. Efficient Processing: Employs asynchronous JavaScript and modern web APIs to ensure efficient data retrieval and processing.

## How it Works
The extension operates through a simple user interface within the Chrome browser. Upon installation, users can activate the extension while watching YouTube videos. By clicking the designated button, the extension extracts the video's transcript and sends it to an external service for summarization. The summarized content is then displayed to the user, offering a condensed version of the original transcript. Additionally, users have the option to listen to the summarized content using the built-in text-to-speech functionality.

## How to use
1. Clone the repository to your local machine: `git clone https://github.com/yourusername/youtube-transcript-summarizer-extension.git
`.
2. Open Google Chrome and navigate to `chrome://extensions`.
3. Enable Developer mode in the top right corner.
4. Click on "Load unpacked" and select the directory where you cloned the repository.
5. Go to `www.youtube.com` and find a video you want to summarize.
6. Clcik on `Extension` button next to the search bar.
7. The extension should now be ready for use.

> [!NOTE]
> I am using the free tier susbscrpition so there maybe hard limits on requests calls. 

## Feedback and Contributions
I welcome contributions from the community to enhance the functionality and usability of the extension. 

## Contect
For any inquiries or feedback regarding the YouTube Summarizer Chrome Extension, please contact me at al.yalkun@gmail.com.

## References
### APIs
1. `Youtube Video Scarpper 2023` by `Mr. Newton`: used for retrieve Youtube info. [Link to API documentation](https://rapidapi.com/eaidoo015-pj8dZiAnLJJ/api/youtube-scraper-2023).
2. `Open AI API` by `PR Labs`: Utilized for summarizing text content. [Link to API documentation](https://rapidapi.com/rphrp1985/api/open-ai21).
