import Introduction from "@/app/components/layout/Introduction";
import PageLayout from "@/app/components/PageLayout";

export default function Home () {
    return <div className="w-full flex flex-col overflow-y-scroll">
        <Introduction />
        <PageLayout></PageLayout>
        <PageLayout></PageLayout>
    </div>;
}