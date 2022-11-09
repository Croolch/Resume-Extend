/// <reference types="chrome">
chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: <number>tab.id },
    files: ['content.ts']
  });
});