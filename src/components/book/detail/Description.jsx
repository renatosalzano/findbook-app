import { createRef, memo, useLayoutEffect, useState } from "react";

const Description = ({ text, max_length }) => {
  const [expand, setExpand] = useState(false);
  const boxRef = createRef(null);

  const toggle_expand = () => {
    setExpand((state) => !state);
  };

  useLayoutEffect(() => {
    let { textContent } = boxRef.current;
    if (boxRef.current.textContent.length > max_length && !expand) {
      boxRef.current.textContent = textContent.slice(0, max_length);
    } else {
      boxRef.current.textContent = text;
    }
  }, [boxRef, expand, text, max_length]);
  return (
    <div className="description">
      <span ref={boxRef}>{text}</span>
      {text.length >= max_length && (
        <span className="expand_text" onClick={toggle_expand}>
          {expand ? "[Chiudi]" : "...Continua"}
        </span>
      )}
    </div>
  );
};

export default memo(Description);
