import React, { memo } from "react";
import CommonHeader from "../common/CommonHeader";
import MainContainer from "../containers/MainContainer";

const MainPage = () => {
  return (
    <>
      <CommonHeader />
      <MainContainer />
    </>
  );
};

export default memo(MainPage);
