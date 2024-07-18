'use client'
import { Tab } from "@/global/types"
import styles from "./tabs.module.css";
import { useState } from "react";
import Image from "next/image";

type TabsPropsType = {
  children?: HTMLElement[]
  tabs: Tab[]
}

export default function Tabs({ children, tabs }: TabsPropsType) {
  const [activeTab, setActiveTab] = useState<Tab>(tabs[0])

  const handleTabChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newActiveTab = tabs.find(({ type }) => type === e.target.value)

    if (newActiveTab) {
      setActiveTab(newActiveTab)
    }
  }

  const renderTabs = (tabs: Tab[]) => {
    return tabs.map(({ title, type, icon }) => {
      const isActiveTab = activeTab.type === type;

      return <div key={type} className={`${styles.tab} ${isActiveTab && styles.active}`}>
        <input
          className={styles.radio_input}
          type="radio"
          value={type}
          onChange={handleTabChange}
          checked={isActiveTab}
        />
        {icon && <Image className={styles.tab_icon} width={24} height={24} src={icon} alt='' />}
      </div>
    })
  }

  return <div className={styles.tabs}>
    {renderTabs(tabs)}
  </div>
}
