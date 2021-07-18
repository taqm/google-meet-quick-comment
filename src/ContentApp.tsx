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
  return (
    <div className={styles.popup}>
      <Item text="👍" />
      <Item text="🆗" />
      <Item text="🙌" />
      <Item text="🎉" />
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
