import React, { FC, Fragment, Suspense } from "react";

const HeavyComponent = React.lazy(() => import("./utils/T01HeavyComponent"));

const T01LazyLoading: FC = () => {
  return (
    <Fragment>
      <h2>LazyLoading</h2>
      <Suspense fallback={<div>...Loading</div>}>
        <HeavyComponent />
      </Suspense>
    </Fragment>
  );
};
export default T01LazyLoading;
