import React, { useState } from 'react';
import styles from './styles/ApplicantsTab.module.css';

const ApplicantsTab = () => {
  const [activeTab, setActiveTab] = useState('all');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div>
      <button
        className={` ${activeTab === 'all' ? styles.activeTab : styles.inactiveTab}`}
        name='all'
        onClick={() => handleTabClick('all')}
      >
        ALL
      </button>
      <button
        className={` ${activeTab === 'accepted' ? styles.activeTab : styles.inactiveTab}`}
        name='accepted'
        onClick={() => handleTabClick('accepted')}
      >
        ACCEPTED
      </button>
      <button
        className={` ${activeTab === 'rejected' ? styles.activeTab : styles.inactiveTab}`}
        name='rejected'
        onClick={() => handleTabClick('rejected')}
      >
        REJECTED
      </button>
      
    </div>
  );
}

export default ApplicantsTab;
