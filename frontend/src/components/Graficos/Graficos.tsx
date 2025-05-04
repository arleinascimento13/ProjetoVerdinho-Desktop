import { BarChart } from '@mui/x-charts/BarChart';

export default function ChartsOverviewDemo() {
      console.log("pegou essa pragraaaaaaaaa")
      return (
        <div className='w- h-full flex items-center justify-center'>

          <BarChart
          
            series={[
              { data: [35, 44, 24, 34, 36] },
              { data: [51, 6, 49, 30, 85] },
              { data: [15, 25, 30, 50, 45] },
              { data: [600, 50, 15, 25,   1000] },
            ]}
            height={290}
            xAxis={[{ data: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'] }]}
            borderRadius={8}
          />
        </div>
      );
}