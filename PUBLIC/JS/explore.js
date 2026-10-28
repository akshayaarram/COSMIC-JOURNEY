
"use strict";

/* =========================================
   COSMIC JOURNEY — EXPLORE PAGE
   ========================================= */
const topics = cosmicTopics;

/* Find the page elements. */

const topicGrid = document.getElementById("topic-grid");
const searchInput = document.getElementById("topic-search");
const categoryFilter = document.getElementById("category-filter");
const clearSearchButton = document.getElementById("clear-search");
const resetFiltersButton = document.getElementById("reset-filters");
const emptyResetButton = document.getElementById("empty-reset");
const emptyState = document.getElementById("empty-state");
const resultsMessage = document.getElementById("results-message");
const topicCount = document.getElementById("topic-count");
const currentYear = document.getElementById("current-year");

/* Popup elements. */

const topicDialog = document.getElementById("topic-dialog");
const dialogClose = document.getElementById("dialog-close");
const dialogDone = document.getElementById("dialog-done");
const dialogIcon = document.getElementById("dialog-icon");
const dialogCategory = document.getElementById("dialog-category");
const dialogTitle = document.getElementById("dialog-title");
const dialogSummary = document.getElementById("dialog-summary");
const dialogFact = document.getElementById("dialog-fact");

/* Update the footer year. */

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

/* Build one topic card safely. */

function createTopicCard(topic) {
  const card = document.createElement("article");
  card.className = "topic-card";

  const icon = document.createElement("div");
  icon.className = "topic-icon";
  icon.setAttribute("aria-hidden", "true");
  icon.textContent = topic.icon;

  const category = document.createElement("p");
  category.className = "topic-category";
  category.textContent = topic.category;

  const title = document.createElement("h3");
  title.textContent = topic.title;

  const summary = document.createElement("p");
  summary.className = "topic-summary";
  summary.textContent = topic.summary;

  const link = document.createElement("a");
  link.className = "discover-link";
 link.href = `topic.html?id=${encodeURIComponent(topic.id)}`;
link.setAttribute("aria-label", `Read about ${topic.title}`);
link.innerHTML = 'Discover topic <span aria-hidden="true">→</span>';

  card.append(icon, category, title, summary, link);

  return card;
}

/* Display the selected topics. */

function renderTopics() {
  const searchTerm = searchInput.value.trim().toLowerCase();
  const selectedCategory = categoryFilter.value;

  const filteredTopics = topics.filter((topic) => {
    const matchesSearch =
      topic.title.toLowerCase().includes(searchTerm) ||
      topic.category.toLowerCase().includes(searchTerm) ||
      topic.summary.toLowerCase().includes(searchTerm) ||
      topic.fact.toLowerCase().includes(searchTerm);

    const matchesCategory =
      selectedCategory === "All topics" ||
      topic.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  // Remove the previous cards before rendering the new results.
  topicGrid.replaceChildren();

  // Create and display the matching cards.
  const cards = filteredTopics.map(createTopicCard);
  topicGrid.append(...cards);

  // Update the results message and count.
  const resultWord = filteredTopics.length === 1 ? "discovery" : "discoveries";

  resultsMessage.textContent =
    filteredTopics.length === 0
      ? "No matching discoveries. Try changing your search or category."
      : `Showing ${filteredTopics.length} ${resultWord}.`;

  topicCount.textContent = `${filteredTopics.length} ${
    filteredTopics.length === 1 ? "discovery" : "discoveries"
  }`;

  // Show an empty-state message if no topics match.
  emptyState.hidden = filteredTopics.length !== 0;

  // Show the clear-search button only when text is entered.
  clearSearchButton.hidden = searchInput.value.length === 0;
}

/* Open a topic's information popup. */

function openTopicDialog(topic) {
  dialogIcon.textContent = topic.icon;
  dialogCategory.textContent = topic.category;
  dialogTitle.textContent = topic.title;
  dialogSummary.textContent = topic.summary;
  dialogFact.textContent = topic.fact;

  if (typeof topicDialog.showModal === "function") {
    topicDialog.showModal();
  } else {
    // Fallback for browsers without HTML dialog support.
    window.alert(`${topic.title}\n\n${topic.summary}\n\nDid you know?\n${topic.fact}`);
  }
}

/* Close the popup. */

function closeTopicDialog() {
  if (topicDialog.open) {
    topicDialog.close();
  }
}

dialogClose.addEventListener("click", closeTopicDialog);
dialogDone.addEventListener("click", closeTopicDialog);

// Close the popup when clicking outside its content.
topicDialog.addEventListener("click", (event) => {
  if (event.target === topicDialog) {
    closeTopicDialog();
  }
});

// The Escape key also closes a native dialog automatically.

/* Search and category filters. */

searchInput.addEventListener("input", renderTopics);
categoryFilter.addEventListener("change", renderTopics);

clearSearchButton.addEventListener("click", () => {
  searchInput.value = "";
  renderTopics();
  searchInput.focus();
});

/* Reset both filters. */

function resetFilters() {
  searchInput.value = "";
  categoryFilter.value = "All topics";
  renderTopics();
}

resetFiltersButton.addEventListener("click", resetFilters);
emptyResetButton.addEventListener("click", resetFilters);

/* Render the topics immediately when the script runs. */

renderTopics();
