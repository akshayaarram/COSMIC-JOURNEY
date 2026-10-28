"use strict";

const topicLibrary = cosmicTopics;

/* Page elements */
const visual = document.getElementById("topic-visual");
const categoryElement = document.getElementById("topic-category");
const titleElement = document.getElementById("topic-title");
const summaryElement = document.getElementById("topic-summary");
const contentElement = document.getElementById("topic-content");
const factElement = document.getElementById("topic-fact");
const messageElement = document.getElementById("page-message");
const yearElement = document.getElementById("current-year");

/* Footer year */
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

/* Get the selected topic from the URL */
const params = new URLSearchParams(window.location.search);
const topicId = params.get("id");

const selectedTopic = topicLibrary.find(
  (item) => String(item.id) === topicId
);

/* Create paragraphs safely */
function createParagraph(text) {
  const paragraph = document.createElement("p");
  paragraph.textContent = text;
  return paragraph;
}

/* Display the selected topic */
function renderTopic(topic) {
  document.title = `${topic.title} | Cosmic Journey`;

  visual.textContent = topic.icon;
  categoryElement.textContent = topic.category;
  titleElement.textContent = topic.title;
  summaryElement.textContent = topic.summary;
  factElement.textContent = topic.fact;

  contentElement.replaceChildren(
    createParagraph(topic.content)
  );

  if (messageElement) {
    messageElement.hidden = true;
    messageElement.textContent = "";
  }
}

/* Handle missing topics */
if (selectedTopic) {
  renderTopic(selectedTopic);
} else {
  document.title = "Topic Not Found | Cosmic Journey";

  visual.textContent = "🔭";
  categoryElement.textContent = "DISCOVERY NOT FOUND";
  titleElement.textContent = "That topic is not available";

  summaryElement.textContent =
    "We couldn't find that discovery. Return to Explore to choose another topic.";

  contentElement.replaceChildren(
    createParagraph(
      "Choose a discovery from the Explore page to continue."
    )
  );

  factElement.textContent =
    "The universe has plenty more mysteries waiting to be explored.";

  if (messageElement) {
    messageElement.hidden = false;
    messageElement.textContent =
      "Try selecting a topic from the Explore page.";
  }
}
