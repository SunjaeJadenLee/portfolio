import PageLayout from "../PageLayout";

const Introduction = () => {
    return <PageLayout>
        <div className="w-full h-full grid grid-cols-3">
            <GridItem title='정보' content={<>
                이선재<br/>1994.11.18
            </>} />
            <GridItem title='Contact' content={<>
                010-9360-7598<br />dev.sunjaelee@gmail.com
            </>} />
            <GridItem title='학력' content={<>
                Centennial College<br />Software Engineering
            </>} />
        </div>
    </PageLayout>
};

interface GridITemProps {
    title: string;
    content: React.ReactElement;
};

const GridItem: React.FC<GridITemProps>= ({ title, content }) => {
    return <div className="flex items-center justify-center text-center">
        <div className="card p-16 flex flex-col items-center justify-center h-1/2 rounded-xl">
            <div className="text-6xl font-black	 border-b-[6px] border-black pb-1">{title}</div>
            <div className="p-8 text-3xl leading-normal">
                {content}
            </div>
        </div>
    </div>;
};

export default Introduction;