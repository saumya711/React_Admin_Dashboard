import React from 'react';
import { ChartComponent, DateTime, Inject, Legend, SeriesCollectionDirective, SeriesDirective, SplineAreaSeries } from '@syncfusion/ej2-react-charts';
import { useStateContext } from '../../contexts/ContextProvider';
import { areaCustomSeries, areaPrimaryXAxis, areaPrimaryYAxis } from '../../data/dummy';
import { Header } from '../../components';


const AreaChart = () => {
  const { currentMode } = useStateContext();
  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <Header category="Area" title="Inflation Rate in Precentage" />
      <ChartComponent
        id='area-chart'
        height='420px'
        primaryYAxis={areaPrimaryYAxis}
        primaryXAxis={areaPrimaryXAxis}
        chartArea={{ border: { width: 0 }}}
        tooltip={{ enable: true }}
        background={ currentMode === 'Dark' ? '#33373E' : '#fff'}
      >
        <Inject services={[SplineAreaSeries, DateTime, Legend]} />
        <SeriesCollectionDirective>
          {areaCustomSeries.map((item, index) => 
            <SeriesDirective key={index} {...item} />
          )}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  )
}

export default AreaChart
