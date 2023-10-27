import { useState } from "react";
import CountUp from "react-countup";
import { InView } from "react-intersection-observer";

const Count = ({ number, text, add_style, style_3 , profile_counter}) => {
  const [focus, setFocus] = useState(false);
  const visibleChangeHandler = (isVisible) => {
    if (isVisible) {
      if (!focus) {
        setFocus(true);
      }
    }
  };
  return (
    <>
      <CountUp start={focus ? 0 : null} end={number} duration={1}>
        {({ countUpRef }) => (
          <div className={`d-flex ${add_style ? 'align-items-center' : ''} ${style_3 ? "" : "justify-content-center"}`}>
            <span ref={countUpRef} />
            <InView
              as="span"
              onChange={(inView) =>
                visibleChangeHandler(inView)
              }
            >
              {text}

            </InView>
          </div>
        )}
      </CountUp>
    </>
  );
};

export default Count;