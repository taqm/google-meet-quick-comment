import classnames from 'classnames';
import * as React from 'react';

import { sendMessage } from './meet';
import * as styles from './styles';

const Item: React.VFC<{ text: string }> = ({ text }) => {
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
      <Item text="お疲れさまです" />
    </div>
  );
};

const ContentApp: React.VFC = () => {
  const [popupOpen, setPopupOpen] = React.useState(true);

  const togglePopup: JSX.IntrinsicElements['button']['onClick'] = (ev) => {
    ev.preventDefault();
    setPopupOpen(!popupOpen);
  };

  return (
    <div id="myapp" className={styles.myapp}>
      <button className={styles.button} onClick={togglePopup}>
        <i className={classnames('google-material-icons', styles.mainIcon)}>
          start
        </i>
      </button>
      {popupOpen && <Popup />}
    </div>
  );
};

export default ContentApp;
