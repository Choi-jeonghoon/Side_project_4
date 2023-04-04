import React from 'react';
import BubbleChartSpecComponent from '../components/BubbleChartSpecComponent';
import BarChartSpecComponent from '../components/BarChartSpecComponent';
import PieChartSpecComponet from '../components/PieChartSpecComponet';
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
      <BubbleChartSpecComponent
        title={chartData.charts.BubbleChartSpec.title}
        datas={chartData.charts.BubbleChartSpec.datas}
        options={chartData.charts.BubbleChartSpec.options}
        spec={chartData.charts.BubbleChartSpec.spec}
      />
      <PieChartSpecComponet
        title={chartData.charts.PieChartSpec.title}
        datas={chartData.charts.PieChartSpec.datas}
        options={chartData.charts.PieChartSpec.options}
        spec={chartData.charts.PieChartSpec.spec}
      />
    </div>
  );
};

export default ChartContainer;
