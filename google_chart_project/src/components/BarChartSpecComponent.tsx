import React from 'react';
import { Chart } from 'react-google-charts';
import LodingCommon from '../common/LodingCommon';

type BarChartSpecProps = {
  title: string;
  datas: any[][];
  options: any;
  spec: { x: number; y: number; width: string; height: string };
};

const BarChartSpecComponent: React.FC<BarChartSpecProps> = ({ datas, options, spec }) => {
  return (
    <Chart
      chartType='BarChart'
      loader={<LodingCommon />}
      data={datas}
      options={options}
      width={spec.width}
      height={spec.height}
      chartWrapperParams={{ style: { left: spec.x, top: spec.y } }}
    />
  );
};

export default BarChartSpecComponent;
