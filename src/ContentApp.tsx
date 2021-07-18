import classnames from 'classnames';
import * as React from 'react';

import { sendMessage } from './meet';
import * as styles from './styles';

type ItemProps = {
  text: string;
};

const Item: React.VFC<ItemProps> = ({ text }) => {
  const handleClick = () => {
    sendMessage(text);
  };
  return (
    <div className={styles.item} onClick={handleClick}>
      {text}
    </div>
  );
};

const Popup: React.VFC = () => {
  const [items, setItems] = React.useState<MyItem[]>([]);

  React.useEffect(() => {
    chrome.runtime.sendMessage('get items', (res: MyItem[]) => {
      if (res) {
        setItems(res);
      } else {
        console.error(Error('res is falsy'));
      }
    });
  }, [setItems]);

  return (
    <div className={styles.popup}>
      {items.map((v) => (
        <Item key={v.key} text={v.data} />
      ))}
    </div>
  );
};

const ContentApp: React.VFC = () => {
  const [popupOpen, setPopupOpen] = React.useState(false);

  const togglePopup = () => {
    setPopupOpen(!popupOpen);
  };

  return (
    <div id="myapp" className={styles.myapp}>
      <button className={styles.button} onClick={togglePopup}>
        <i className={classnames('google-material-icons', styles.mainIcon)}>
          {popupOpen ? 'close' : 'star'}
        </i>
      </button>
      {popupOpen && <Popup />}
    </div>
  );
};

export default ContentApp;
