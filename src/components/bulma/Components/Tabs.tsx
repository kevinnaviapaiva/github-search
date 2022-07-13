import { useState } from 'react';

export interface TabsOption {
  label: string,
  tab: string,
}

interface TabsProps {
  className?: string,
  options: TabsOption[],
  onClick?: (tab: TabsOption) => void,
}


export const Tabs = ({ className, options, onClick } : TabsProps) => {
  const [selectedTab, setSelectedTab] = useState<string>(options[0]?.tab ?? '');

  return (
    <div className={`tabs ${className ?? ''}`}>
      <ul>
        {options.map(option => {
          return (
            <li className={`${selectedTab === option.tab ? 'is-active' : ''}`} key={option.tab}>
              <a className="is-primary" onClick={() => {
                setSelectedTab(option.tab);
                if(onClick) {
                  onClick(option);
                }
              }}>
                {option.label}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );  
};