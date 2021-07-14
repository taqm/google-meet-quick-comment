const waitAppendAndVisible = <T extends HTMLElement>(
  selector: () => T | null | undefined,
  action: () => Promise<void> | void = () => {},
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
        reject(Error("does'nt visible elemnt"));
      }
    };
    await action();
    fn();
  });
};

const isVisible = (
  elem: HTMLElement | null | undefined,
): elem is HTMLElement => {
  return !!elem?.offsetParent;
};

const findIcon = (text: string) => {
  const icons = document.querySelectorAll('.google-material-icons');
  return Array.from(icons).find((icon) => icon.textContent === text) as
    | HTMLElement
    | undefined;
};

export const sendMessage = async (text: string) => {
  const textarea = await waitAppendAndVisible(
    () =>
      document.querySelector<HTMLTextAreaElement>(
        'textarea[aria-label="参加者全員にメッセージを送信"]',
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

  const sendIcon = waitAppendAndVisible(() =>
    document.querySelector<HTMLTextAreaElement>(
      'button[aria-label="参加者全員にメッセージを送信"]:not([disabled])',
    ),
  );
  (await sendIcon).dispatchEvent(new Event('click', { bubbles: true }));
};
