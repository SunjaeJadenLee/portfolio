import PageLayout from "../PageLayout";

const Skill: React.FC = () => {
   return <PageLayout style={{backgroundColor: '#0093E9', backgroundImage: 'linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)'}}>
        <div className="w-full h-full grid grid-cols-3">
            <GridItem icon='flutter' title="Flutter" content={<>
                <Section title='상태관리' content={['bloc vs getx']} />
                <Section title='패키지' content={['firebase', 'google maps', 'sso login', 'background service']} />
            </>} />
            <GridItem icon='react' title="React" content={<>
                <Section title='상태관리' content={['Redux vs zustand', 'hooks']} />
                <Section title='Next.js' content={['Material UI', 'sso login', 'firebase']} />
                <Section title='React Native' content={['libraries']} />
            </>}/>
            <GridItem icon='react' title="Etc." content={<>
                <Section title='Node.js' content={['Nest.js']} />
                <Section title='store 배포' content={['app store', 'play store']} />
                <Section title='서버 배포' content={['GCP', 'AWS']} />
            </>}/>
        </div>
    </PageLayout>;
};

interface SectionProps {
    title: string;
    content: string[];
}

const Section: React.FC<SectionProps> = ({ title, content }) => {
    return <div className="flex flex-col gap-4">
        <div className="text-4xl font-bold">{title}</div>
        <div className="flex flex-col text-2xl">{content.map(ctnt=> <div key={`_${ctnt}`} className="flex items-center justify-start py-3 gap-4"><Icon icon='link' size={30}/>{ctnt}</div>)}</div>
    </div>;
};

interface GridItemProps {
    title: string;
    icon?: string;
    content: React.ReactElement;
};

const GridItem: React.FC<GridItemProps> = ({ title, icon, content }) => {
    return <div className="flex items-center justify-center text-center">
        <div className="card p-8 flex flex-auto flex-col items-center justify-center h-4/5 rounded-xl gap-8">
            <div className="flex items-center justify-center text-6xl font-black	 border-black pb-1">{icon && <Icon icon={icon} />}{title}</div>
            <div className="p-8 w-full h-full text-3xl leading-normal bg-white rounded-xl gap-8 flex-col flex">
                {content}
            </div>
        </div>
    </div>;
};

interface IconProps {
    icon: string;
    size?: number;
}

const Icon: React.FC<IconProps> = ({ icon, size = 80 }) => {
    return <img src={`ic_${icon}.png`} style={{ width: `${size}px`, height: `${size}px`}} />;
};


export default Skill;