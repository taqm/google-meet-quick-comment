import * as React from 'react';
import classnames from 'classnames';

import * as styles from './MyWindow.style';

type Props = {
  children: React.ReactNode;
};

export const titleBarSelector = `.${styles.titleBar}`;

const MyWindow: React.VFC<Props> = ({ children }) => {
  const [minimize, setMinimize] = React.useState(false);

  const toggleMinimize = () => {
    setMinimize((v) => !v);
  };

  const handleClickMinimizeButton: React.MouseEventHandler = (ev) => {
    ev.stopPropagation();
    toggleMinimize();
  };

  return (
    <div className={styles.root}>
      <div className={styles.titleBar} onDoubleClick={toggleMinimize}>
        <button
          className={classnames(styles.winSizeButton, {
            minimize,
          })}
          onClick={handleClickMinimizeButton}
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
