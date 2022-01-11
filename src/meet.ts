const isVisible = (
  elem: HTMLElement | null | undefined,
): elem is HTMLElement => {
  return !!elem?.offsetParent;
};

const waitFor = <T extends HTMLElement>(
  selector: () => T | null | undefined,
  ifInvisible?: () => Promise<void> | void,
) => {
  const wont = selector();
  if (isVisible(wont)) {
    return Promise.resolve(wont);
  }

  return new Promise<T>(async (resolve, reject) => {
    let limit = 10;
    const fn = () => {
      const target = selector();
      if (isVisible(target)) {
        resolve(target);
        return;
      }

      if (limit-- > 0) {
        setTimeout(fn, 100);
      } else {
        reject(Error("doesn't visible element"));
      }
    };
    await ifInvisible?.();
    fn();
  });
};

const findIcon = (text: string) => {
  const icons = document.querySelectorAll('.google-material-icons');
  return Array.from(icons).find((icon) => icon.textContent === text) as
    | HTMLElement
    | undefined;
};

const querySelectors = <T extends HTMLElement>(...selectors: string[]) => {
  const found = selectors.find(
    (s) => document.querySelector(s),
  );
  if (!found) return null;
  return document.querySelector<T>(found);
}

export const sendMessage = async (text: string) => {
  const textarea = await waitFor(
    () =>
      querySelectors<HTMLTextAreaElement>(
        'textarea[aria-label="参加者全員にメッセージを送信"]',
        'textarea[aria-label="Send a message to everyone"]',
      ),
    () => {
      const chatIcon = findIcon('chat');
      chatIcon?.dispatchEvent(new Event('click', { bubbles: true }));
    },
  );

  textarea.value = text;

  const ev = document.createEvent('Event');
  ev.initEvent('input', true, true);
  textarea.dispatchEvent(ev);

  const sendIcon = waitFor(() =>
    querySelectors<HTMLTextAreaElement>(
      'button[aria-label="参加者全員にメッセージを送信"]:not([disabled])',
      'button[aria-label="Send a message to everyone"]:not([disabled])',
    ),
  );
  (await sendIcon).dispatchEvent(new Event('click', { bubbles: true }));
};
