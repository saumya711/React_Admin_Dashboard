import React from 'react';
import { ChartComponent, DateTime, Inject, Legend, LineSeries, SeriesCollectionDirective, SeriesDirective, Tooltip } from '@syncfusion/ej2-react-charts';
import { LinePrimaryXAxis, LinePrimaryYAxis, lineCustomSeries } from '../../data/dummy';
import { useStateContext } from './../../contexts/ContextProvider';


const LineChart = () => {
  const { currentMode } = useStateContext();
  return (
    <ChartComponent
      id='line-chart'
      height='420px'
      primaryYAxis={LinePrimaryYAxis}
      primaryXAxis={LinePrimaryXAxis}
      chartArea={{ border: { width: 0 }}}
      tooltip={{ enable: true }}
      background={ currentMode === 'Dark' ? '#33373E' : '#fff'}
    >
      <Inject services={[LineSeries, DateTime, Legend, Tooltip]} />
      <SeriesCollectionDirective>
        {lineCustomSeries.map((item, index) => 
          <SeriesDirective key={index} {...item} />
        )}
      </SeriesCollectionDirective>
    </ChartComponent>
  )
}

export default LineChart
