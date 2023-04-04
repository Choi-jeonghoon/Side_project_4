import React from 'react';
import BarChartSpecComponent from '../components/BarChartSpecComponent';
import chartData from '../data/data.json';

const ChartContainer = () => {
  return (
    <div style={{ border: '1px solid red', width: '30%', height: '10%' }}>
      <BarChartSpecComponent
        title={chartData.charts.BarChartSpec.title}
        datas={chartData.charts.BarChartSpec.datas}
        options={chartData.charts.BarChartSpec.options}
        spec={chartData.charts.BarChartSpec.spec}
      />
    </div>
  );
};

export default ChartContainer;
