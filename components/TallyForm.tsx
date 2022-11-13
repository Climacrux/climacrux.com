import { useEffect } from "react";

type FormProps = {
  tallySrc: string;
  className: string;
  height: string;
  title: string;
};

/**
 * Dirty typing for Tally coming from javascript import.
 */
abstract class Tally {
  static loadEmbeds = () => {};
}

const TallyForm = (props: FormProps) => {
  useEffect(() => {
    let d = document,
      w = "https://tally.so/widgets/embed.js",
      v = function () {
        "undefined" != typeof Tally
          ? Tally.loadEmbeds()
          : d
              .querySelectorAll("iframe[data-tally-src]:not([src])")
              .forEach(function (e: any) {
                e.src = e.dataset.tallySrc;
              });
      };
    if (d.querySelector('script[src="' + w + '"]')) v();
    else {
      let s = d.createElement("script");
      (s.src = w), (s.onload = v), (s.onerror = v), d.body.appendChild(s);
    }
  }, []);
  return (
    <iframe
      data-tally-src={props.tallySrc}
      className={props.className + " aspect-auto w-full"}
      width="100%"
      height={props.height || "100%"}
      frameBorder="0"
      marginHeight={0}
      marginWidth={0}
      title={props.title}
    ></iframe>
  );
};

export { TallyForm };
