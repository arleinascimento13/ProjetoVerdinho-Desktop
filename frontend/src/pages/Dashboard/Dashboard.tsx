import { Card } from "../../components/Card/Card";
import GraficosCard from "../../components/Graphics/Graficos";
import ReportCard from "../../components/Relatorio/Report";

export const Dashboard = () => {
    return (
        <div className="flex flex-col w-full h-screen ">
            <div className="flex flex-col px-5 w-full mt-4">
            <p className="font-extrabold text-5xl">DashBoard</p>
                <div className="flex justify-between pb-4 ">
                    <div className="shadow-md rounded-lg">
                        <Card
                            type="domestico"
                            title="Animais Domésticos"
                            count={1234}
                            onClick={() => console.log('Domésticos clicked')}
                            />
                    </div>
                    <div className="shadow-md rounded-lg">
                        <Card
                            type="silvestre"
                            title="Animais Silvestres"
                            count={5678}
                            onClick={() => console.log('Silvestres clicked')}
                            />    
                    </div>
                    <div className="shadow-md rounded-lg">
                        <Card
                            type="pessoas"
                            title="Pessoas"
                            count={91011}
                            onClick={() => console.log('Pessoas clicked')}
                            />
                    </div>
                </div>

                <div className="mb-4 shadow-md">
                    <GraficosCard />
                </div>

                <div className="mb-4">
                    <ReportCard />
                </div>
            </div>
        </div>
    );
}