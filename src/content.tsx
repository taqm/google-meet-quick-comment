import * as ReactDOM from 'react-dom';
import ContentApp from './ContentApp';

const mainObserver = new MutationObserver(() => {
  const selfNameElem = document.querySelector('[data-self-name]')!;

  if (!selfNameElem) return;

  const mainCol =
    selfNameElem?.parentElement?.parentElement?.parentElement?.parentElement!;

  mainCol.classList.add('myapp-parent');
  const myapp = document.createElement('div');
  mainCol.appendChild(myapp);

  ReactDOM.render(<ContentApp />, myapp);
  mainObserver.disconnect();
});

mainObserver.observe(document.body, {
  childList: true,
  subtree: true,
});
