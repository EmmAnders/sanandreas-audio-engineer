import React, { useState, useCallback } from "react"

function Tabs({ children }) {
  const initialTab = children[0].props.label
  const [activeTab, setActiveTab] = useState(initialTab)
  const handleActiveTab = useCallback(label => setActiveTab(label), [])

  const tabs = ‘tabs here’;
  const tabContent = ‘tabcontent’s here’;
  
  return (
    <div>
      <div className="tabs__box">{tabs}</div>
      <div>{tabContent}</div>
    </div>
  );
}

export { Tabs };