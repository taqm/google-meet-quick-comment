import * as React from 'react';
import Draggable from 'react-draggable';
import { produce } from 'immer';

import MyWindow, { titleBarSelector } from './MyWindow';
import { sendMessage } from './meet';
import * as styles from './ContentApp.styles';

type NomarlContentProps = {
  items: MyItem[];
  onEditButtonClick: () => void;
};

const NomarlContent: React.VFC<NomarlContentProps> = ({
  items,
  onEditButtonClick,
}) => {
  return (
    <>
      {items.map((v) => (
        <div
          key={v.key}
          className={styles.normalItem}
          onClick={() => sendMessage(v.data)}
          title={v.data}
        >
          <div>{v.data}</div>
        </div>
      ))}
      <div className={styles.editButtonArea}>
        <button className={styles.editButton} onClick={onEditButtonClick}>
          Edit
        </button>
      </div>
    </>
  );
};

type EditModeContentProps = {
  items: MyItem[];
  onClickSaveButton: (newItems: MyItem[]) => void;
};

const EditModeContent: React.VFC<EditModeContentProps> = ({
  items,
  onClickSaveButton,
}) => {
  const [editItems, setEditItems] = React.useState([...items]);

  return (
    <form
      onSubmit={(ev) => {
        ev.preventDefault();
        onClickSaveButton(editItems);
      }}
    >
      {editItems.map((v, idx) => (
        <div key={v.key} className={styles.editableItem}>
          <input
            value={v.data}
            required
            onChange={(ev) => {
              setEditItems(
                produce(editItems, (draft) => {
                  draft[idx]!.data = ev.target.value;
                }),
              );
            }}
          />
        </div>
      ))}
      <div className={styles.editButtonArea}>
        <button type="submit" className={styles.editButton}>
          Save
        </button>
      </div>
    </form>
  );
};

const initialItems = () => {
  const defaultItems = [
    { key: 'data1', data: '👍' },
    { key: 'data2', data: '🆗' },
    { key: 'data3', data: '🙌' },
    { key: 'data4', data: '🎉' },
  ];
  try {
    const str = localStorage.getItem('quick-repray.items')!;
    if (!str) return defaultItems;
    return JSON.parse(str);
  } catch (_) {}
  return defaultItems;
};

const saveItems = (items: MyItem[]) => {
  localStorage.setItem('quick-repray.items', JSON.stringify(items));
};

const ContentApp: React.VFC = () => {
  const [editMode, setEditMode] = React.useState(false);
  const [items, setItems] = React.useState<MyItem[]>(initialItems);

  const handleSaveButtonClick = (newItems: MyItem[]) => {
    setItems(newItems);
    saveItems(newItems);
    setEditMode(false);
  };

  return (
    <div id="myapp" className={styles.myapp}>
      <Draggable bounds="parent" handle={titleBarSelector}>
        <div className={styles.content}>
          <MyWindow>
            {!editMode ? (
              <NomarlContent
                items={items}
                onEditButtonClick={() => setEditMode(true)}
              />
            ) : (
              <EditModeContent
                items={items}
                onClickSaveButton={handleSaveButtonClick}
              />
            )}
          </MyWindow>
        </div>
      </Draggable>
    </div>
  );
};

export default ContentApp;
