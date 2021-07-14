import classnames from 'classnames';
import * as React from 'react';

import { sendMessage } from './meet';
import * as styles from './styles';

type ItemProps = {
  text: string;
  onClick: () => void;
};

const Item: React.VFC<ItemProps> = ({ text, onClick }) => {
  const handleClick = () => {
    sendMessage(text);
    onClick();
  };
  return (
    <div className={styles.item} onClick={handleClick}>
      {text}
    </div>
  );
};

type PopupProps = {
  onItemClick: () => void;
};
const Popup: React.VFC<PopupProps> = ({ onItemClick }) => {
  return (
    <div className={styles.popup}>
      <Item onClick={onItemClick} text="👍" />
      <Item onClick={onItemClick} text="🆗" />
      <Item onClick={onItemClick} text="🙌" />
      <Item onClick={onItemClick} text="🎉" />
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
          start
        </i>
      </button>
      {popupOpen && <Popup onItemClick={togglePopup} />}
    </div>
  );
};

export default ContentApp;
