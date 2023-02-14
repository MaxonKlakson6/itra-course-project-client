import { Button, Menu, MenuItem } from '@mui/material';
import { MouseEvent, ReactNode, useState } from 'react';

interface DropdownProps {
  id: string;
  className?: string;
  buttonClassName?: string;
  children: ReactNode;
  menuItems: string[];
  saveValue: (chosen: string) => void;
}

const Dropdown = ({
  id,
  className,
  buttonClassName,
  children,
  menuItems,
  saveValue,
}: DropdownProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (index: number) => {
    setAnchorEl(null);
    if (menuItems[index]) {
      saveValue(menuItems[index]);
    }
  };

  return (
    <div className={className}>
      <Button
        className={buttonClassName}
        id={`${id}-button`}
        variant='contained'
        aria-controls={open ? `${id}-menu` : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        {children}
      </Button>
      <Menu
        id={`${id}-menu`}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': `${id}-button`,
        }}
      >
        {menuItems.map((menuItem, index) => (
          <MenuItem key={menuItem} onClick={() => handleClose(index)}>
            {menuItem}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default Dropdown;
