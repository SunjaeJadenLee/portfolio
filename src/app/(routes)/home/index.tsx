import Introduction from "@/app/components/layout/Introduction";
import PageLayout from "@/app/components/PageLayout";
import Skill from "@/app/components/layout/Skill";

export default function Home () {
    return <div className="w-full flex flex-col overflow-y-auto box-content">
        <Introduction />
        <Skill />
        <PageLayout></PageLayout>
    </div>;
}