// When the extension is installed or upgraded ...
chrome.runtime.onInstalled.addListener(() => {
  // Replace all rules ...
  chrome.declarativeContent.onPageChanged.removeRules(undefined, () => {
    // With a new rule ...
    chrome.declarativeContent.onPageChanged.addRules([
      {
        // That fires when a page's URL contains a '.binary.com' ...
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { urlMatches: '(staging|www|app|ticktrade|developers|webtrader)\.binary.com' },
          }),
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { urlMatches: '.github.io/binary-(static|bot)/' },
          }),
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { urlMatches: '.binary.sx' },
          }),
        ],
        // And shows the extension's page action.
        actions: [ new chrome.declarativeContent.ShowPageAction() ]
      }
    ]);
  });
});

const select = element => document.querySelector(element);


