chrome.runtime.onMessage.addListener((_message, _sender, sendResponse) => {
  sendResponse([
    { id: 'test1', data: '👍' },
    { id: 'test2', data: '🆗' },
    { id: 'test3', data: '🙌' },
    { id: 'test3', data: '🎉' },
    { id: 'test4', data: 'お疲れさまです' },
  ]);
});
