import React, { useCallback, useContext } from "react";

import "../scss/components/Tabs.scss";
import { Context } from "../contexts/Context";

function Tabs({ children }) {
  const { activeTab, setActiveTab } = useContext(Context);
  const handleActiveTab = useCallback((label) => setActiveTab(label), []);

  const tabs = children.map((child) => (
    <button
      ref={child.props.ref}
      onClick={(e) => {
        e.preventDefault();
        handleActiveTab(child.props.label);
      }}
      className={
        child.props.label === activeTab
          ? ["tabs__tab", "tabs__tab-active"].join(" ")
          : "tabs__tab"
      }
      key={child.props.label}
    >
      {child.props.tabName}
    </button>
  ));

  const tabContent = children.filter(
    (child) => child.props.label === activeTab
  );

  return (
    <div>
      <div className="tabs__box">{tabs}</div>
      <div className={children.className}>{tabContent}</div>
    </div>
  );
}

function Tab(props) {
  return <>{props.children}</>;
}

export { Tabs, Tab };
