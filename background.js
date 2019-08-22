// When the extension is installed or upgraded ...
chrome.runtime.onInstalled.addListener(() => {
  // Replace all rules ...
  chrome.declarativeContent.onPageChanged.removeRules(undefined, () => {
    // With a new rule ...
    chrome.declarativeContent.onPageChanged.addRules([
      {
        // That fires when a page's URL contains a pattern listed below ...
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { urlMatches: '(staging|www|bot|charts|ticktrade|developers|webtrader)\.binary.com' },
          }),
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { urlMatches: '(www|bot|charts|ticktrade|webtrader)\.binary.me' },
          }),
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { urlMatches: '.github.io/binary-(static|bot)/' },
          }),
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { urlMatches: '.binary.sx' },
          }),
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { urlMatches: 'binary.bot' },
          }),
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { urlMatches: 'deriv.app' },
          }),
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { urlMatches: '.github.io/deriv-app/' },
          }),
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { urlMatches: 'deriv.com' },
          }),
        ],
        // And shows the extension's page action.
        actions: [ new chrome.declarativeContent.ShowPageAction() ]
      }
    ]);
  });
});

const select = element => document.querySelector(element);


