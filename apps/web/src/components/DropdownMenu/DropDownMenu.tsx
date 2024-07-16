'use client'
import React, { useState, useRef, useEffect } from 'react';
import IconWrapper from '../IconWrapper/IconWrapper';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { usePathname } from 'next/navigation';

interface DropDownMenuProps {
  children: React.ReactNode;
  text: string;
  icon: React.ReactNode;
  menuKey: string;
}

const DropDownMenu: React.FC<DropDownMenuProps> = ({ children, text, icon, menuKey }) => {
  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const path = usePathname();

  useEffect(() => {
    const storedState = localStorage.getItem(menuKey);
    if (storedState) {
      setOpen(storedState === 'true');
    }
  }, [menuKey, path]);

  useEffect(() => {
    if (contentRef.current) {
      if (open) {
        contentRef.current.classList.add('max-h-[500px]');
      } else {
        contentRef.current.classList.remove('max-h-[500px]');
      }
    }
  }, [open]);

  function handleClick(e: React.MouseEvent) {
    localStorage.setItem(menuKey, (!open).toString());
    setOpen(!open);
  }

  return (
    <div className="flex flex-col w-full items-center justify-center text-lg">
      <div className="w-[70%] flex flex-row items-center justify-center m-2 p-2 hover:bg-accent rounded-lg" onClick={handleClick}>
        <IconWrapper IconComponent={icon} className="pr-2" />
        <p>{text}</p>{open ? <ChevronUp className='ml-1' /> : <ChevronDown className='ml-1' />}
      </div>
      <div ref={contentRef} className="max-h-0 overflow-hidden transition-[max-height] duration-[0.3s] ease-[ease-out]">
        {React.Children.map(children, (child) => (
          <div className='my-2 p-2 hover:bg-accent rounded-lg flex flex-col w-full items-center justify-center '>{child}</div>
        ))}
      </div>
    </div>
  );
}

export default DropDownMenu;
