import * as React from 'react';
import classnames from 'classnames';

import * as styles from './MyWindow.style';

type Props = {
  children: React.ReactNode[];
};

const MyWindow: React.VFC<Props> = ({ children }) => {
  const [minimize, setMinimize] = React.useState(false);

  return (
    <div className={styles.root}>
      <div className={styles.titleBar}>
        <button
          className={classnames(styles.winSizeButton, {
            minimize,
          })}
          onClick={() => setMinimize(!minimize)}
        >
          -
        </button>
        <span className={styles.titleText}>QuicklyRepray</span>
      </div>
      <div
        className={classnames(styles.content, {
          minimize,
        })}
      >
        {children}
      </div>
    </div>
  );
};

export default MyWindow;
