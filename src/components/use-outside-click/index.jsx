import { useEffect } from "react";

export default function useOutsideClick(ref, handler) {
  useEffect(() => {
    function listener(event) {
      // If clicked inside the element, do nothing
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      // If clicked outside, run handler
      handler(event);
    }

    // ✅ Attach listeners correctly
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    // ✅ Cleanup listeners on unmount
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}
