import { ReactNode } from 'react';

interface TabPanelProps {
  children: ReactNode;
  className?: string;
  index: number;
  value: number;
}

const TabPanel = ({ children, className, index, value }: TabPanelProps) => (
  <div className={className}>{index === value && children}</div>
);

export default TabPanel;
