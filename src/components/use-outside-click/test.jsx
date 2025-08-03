// \components\use-outside-click\test.jsx
import { useRef, useState } from "react";
import useOutsideClick from ".";

export default function UseOnclickOutsideTest() {
  const [showContent, setShowContent] = useState(false);
  const ref = useRef();
  useOutsideClick(ref, ()=>setShowContent(false));
  return (
    <div>
      {showContent ? (
        <div ref={ref} style={{border:'1px solid'}}>
          <h2>THis is a random content</h2>
          <p>
            Please click outside of this. It wont close if you click inside of
            this content
          </p>
        </div>
      ) : (
        <button onClick={() => setShowContent(true)}>Show Content</button>
      )}
    </div>
  );
}

