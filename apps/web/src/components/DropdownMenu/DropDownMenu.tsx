'use client'
import { useState, useRef, useEffect } from 'react';
import styles from './DropDownMenu.module.css';
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
                contentRef.current.classList.add(styles.open);
            } else {
                contentRef.current.classList.remove(styles.open);
            }
        }
    }, [open]);

    function handleClick(e: React.MouseEvent) {
        localStorage.setItem(menuKey, (!open).toString());
        setOpen(!open);
    }

    return (
        <div className={styles.dropdown}>
            <div className={styles.dropbtn} onClick={handleClick}>
                <IconWrapper IconComponent={icon} className={styles.icon} />
                <p>{text}</p>{open ? <ChevronUp /> : <ChevronDown />}
            </div>
            <div ref={contentRef} className={styles.dropdownContent}>
                {children}
            </div>
        </div>
    );
}

export default DropDownMenu;
