document.getElementById('fetch-title').addEventListener('click', () => {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      const currentTab = tabs[0];
      const tabTitle = currentTab.title;
      document.getElementById('tab-title').textContent = `Current Tab: ${tabTitle}`;
    });
  });
  