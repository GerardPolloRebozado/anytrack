'use client'
import { useState } from 'react';
import styles from './tabs.module.css';
export default function Tabs({ children }: { children: any }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <div >
        {children.map((child: any, index: any) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`${styles.tabButton} ${index === activeTab ? styles.activeTab : ''}`}
          >
            {child?.props?.id}
          </button>
        ))}
      </div>
      <div>
        {children[activeTab]}
      </div>
    </div>
  );
}
