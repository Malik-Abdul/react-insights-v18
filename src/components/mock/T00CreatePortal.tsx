import { FC, Fragment } from "react";
import { createPortal } from "react-dom";

const T00CreatePortal: FC = () => {
  return (
    <Fragment>
      <div>createPortal</div>

      <div style={{ border: "2px solid black" }}>
        <div>
          createPortal lets you render some children into a different part of
          the DOM.
        </div>
        <p>This child is placed in the parent div.</p>
        {createPortal(
          <p>This child is placed in the document body.</p>,
          document.body
        )}
      </div>
    </Fragment>
  );
};
export default T00CreatePortal;
