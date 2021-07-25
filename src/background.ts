const getItems = (): MyItem[] => {
  return [
    { key: 'test1', data: '👍' },
    { key: 'test2', data: '🆗' },
    { key: 'test3', data: '🙌' },
    { key: 'test4', data: '🎉' },
  ];
};

chrome.runtime.onMessage.addListener((_message, _sender, sendResponse) => {
  sendResponse(getItems());
});
