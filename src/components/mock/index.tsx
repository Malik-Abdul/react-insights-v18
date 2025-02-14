"use client";
import { Fragment, JSX, useState } from "react";
import T01LazyLoading from "./T01LazyLoading";
import T00CreatePortal from "./T00CreatePortal";

const Mock = () => {
  const [showMock, setShowMock] = useState(0);
  const [activeLink, setActiveLink] = useState<number | undefined>(undefined);
  const allMocks: { [key: number]: JSX.Element } = {
    0: <T00CreatePortal />,
    1: <T01LazyLoading />,
  };
  const links = [
    { title: "Mock00APIIntegration", value: 0 },
    { title: "MockT01LazyLoading", value: 1 },
  ];
  return (
    <Fragment>
      <div>
        <h1>Mock Interviews</h1>
      </div>
      <div className="pageLinks">
        {links.map((link) => (
          <a
            // {...(activeLink == link.value && { className: "active" })}
            className={activeLink == link.value ? "active" : undefined}
            key={link.value}
            onClick={() => {
              setShowMock(link.value);
              setActiveLink(link.value);
            }}
          >
            {link.title}
          </a>
        ))}
      </div>
      {allMocks[showMock]}
    </Fragment>
  );
};

export default Mock;
