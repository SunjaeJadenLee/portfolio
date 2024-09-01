interface PageLayoutProps {
    children?: React.ReactElement;
};

const PageLayout: React.FC<PageLayoutProps> = ({children}) => {
    return <div className="w-full h-screen bg-blue-300">
        {children ? children : <></>}
    </div>;
};

export default PageLayout;