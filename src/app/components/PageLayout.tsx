interface PageLayoutProps {
    children?: React.ReactElement;
    style?: React.CSSProperties;
};

const PageLayout: React.FC<PageLayoutProps> = ({ children, style }) => {
    return <div className="w-full h-screen" style={style}>
        {children ? children : <></>}
    </div>;
};

export default PageLayout;