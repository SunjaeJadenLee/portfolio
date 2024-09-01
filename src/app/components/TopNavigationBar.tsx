'use client';

import { usePathname } from "next/navigation";

const routes: { [key: string]: string } = {
    '/page1': 'Introduction',
    '/page2': 'Skill',
    '/page3': 'Project',
    '/page4': 'Career'
};

const TopNavigationBar: React.FC = () => {
    const paths = Object.keys(routes);
    return <div className="flex flex-row w-full justify-between items-center fixed left-0 top-0 z-1">
        <div className="text-3xl font-bold leading-loose px-4">Sunjae's Portfolio</div>
        <div className="flex flex-row">
            {paths.map((route: string) => <NavItem key={route} path={route} text={routes[route]} onClick={() => {}}/>)}
        </div>
        <div></div>
    </div>;
}


interface NavItemProps {
    path: string;
    text: string;
    onClick: () => void;
};

const NavItem: React.FC<NavItemProps> = ({ path, text, onClick }) => {
    return <div onClick={onClick} className="text-black flex flex-auto max-w-60 items-center justify-center px-8 py-4">{text}</div>
};

export default TopNavigationBar;