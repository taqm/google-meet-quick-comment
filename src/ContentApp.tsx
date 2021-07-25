import * as React from 'react';
import Draggable from 'react-draggable';

import MyWindow from './MyWindow';
import { sendMessage } from './meet';
import * as styles from './ContentApp.styles';

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

const ContentApp: React.VFC = () => {
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
    <div id="myapp" className={styles.myapp}>
      <Draggable>
        <div className={styles.content}>
          <MyWindow>
            {items.map((v) => (
              <Item key={v.key} text={v.data} />
            ))}
          </MyWindow>
        </div>
      </Draggable>
    </div>
  );
};

export default ContentApp;
