import React from "react";

function ContentBox({data}) {
  return (
    <div>
      chart type : {data.chart}
      <br /> x-value : {data.x}
      <br /> y-value : {data.y}
      <br /> Period: From: {data.start} <br /> To: {data.end}
      {""}
    </div>
  );
}
export default ContentBox;
