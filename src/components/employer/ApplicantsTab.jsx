import React, { useState } from 'react';
import styles from './styles/ApplicantsTab.module.css';

const ApplicantsTab = (props) => {
  const [activeTab, setActiveTab] = useState('ALL');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    props.onClick(tabName);
  };

  return (
    <div>
      <button
        className={` ${activeTab === 'ALL' ? styles.activeTab : styles.inactiveTab}`}
        name='all'
        onClick={() => handleTabClick('ALL')}
      >
        ALL
      </button>
      <button
        className={` ${activeTab === 'ACCEPTED' ? styles.activeTab : styles.inactiveTab}`}
        name='accepted'
        onClick={() => handleTabClick('ACCEPTED')}
      >
        ACCEPTED
      </button>
      <button
        className={` ${activeTab === 'REJECTED' ? styles.activeTab : styles.inactiveTab}`}
        name='rejected'
        onClick={() => handleTabClick('REJECTED')}
      >
        REJECTED
      </button>
      
    </div>
  );
}

export default ApplicantsTab;
