import * as ReactDOM from 'react-dom';
import ContentApp from './ContentApp';

const mainObserver = new MutationObserver(() => {
  const selfNameElem = document.querySelector('[data-self-name]')!;

  if (!selfNameElem) return;

  const myapp = document.createElement('div');
  document.body.appendChild(myapp);

  ReactDOM.render(<ContentApp />, myapp);
  mainObserver.disconnect();
});

mainObserver.observe(document.body, {
  childList: true,
  subtree: true,
});
