interface IconWrapperProps {
    IconComponent: React.ReactNode;
    className: string;
}

const IconWrapper: React.FC<IconWrapperProps> = ({ IconComponent, className }) => {
    return (
        <div className={className}>
            {IconComponent}
        </div>
    );
};

export default IconWrapper;
