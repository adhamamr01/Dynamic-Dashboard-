import Modal from "react-modal";
import React, { useState } from "react";

function ModalBox({
  data,
  setActualData,
  modalIsOpen,
  setModalIsOpen,
  setSelectedItem,
}) {
  const id = data.id
  const [chartvar, setChart] = useState(data.chart);
  const [xvar, setX] = useState(data.x);
  const [yvar, setY] = useState(data.y);
  const [startvar, setStart] = useState(data.start);
  const [endvar, setEnd] = useState(data.end);

  const handleChangeChart = (event) => {
    setChart(event.target.value);
  };
  const handleChangeX = (event) => {
    setX(event.target.value);
  };
  const handleChangeY = (event) => {
    setY(event.target.value);
  };
  const handleChangeStart = (event) => {
    setStart(event.target.value);
  };
  const handleChangeEnd = (event) => {
    setEnd(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let data = {
      id: id,
      chart: chartvar,
      x: xvar,
      y: yvar,
      start: startvar,
      end: endvar,
      filled: true,
    };
    setActualData(data);
    setModalIsOpen(false);
  };
  return (
    <React.Fragment>
      <Modal
          ariaHideApp={false}

        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          overlay: {
            backgroundColor: "grey",
          },
          content: {
            color: "blue",
          },
        }}
      >
        <form onSubmit={handleSubmit}>
          <h2>HI {data.id}</h2>
          <Dropdown
            label="Please Enter Chart type: "
            options={[
              { label: " Bar Chart ", value: "bar"},
              { label: " Pie chart ", value: "pie"},
              { label: " Histogram ", value: "histogram" },
            ]}
            value={chartvar}
            onChange={handleChangeChart}
          />
          <br />
          <br />
          <p> Chart type : {chartvar}</p>
          <Dropdown
            label="Please Enter X-value: "
            options={[
              { label: " 10 ", value: "10" },
              { label: " 20 ", value: "20" },
              { label: " 30 ", value: "30" },
            ]}
            value={xvar}
            onChange={handleChangeX}
          />
          <br />
          <br />
          <p> X-value : {xvar}</p>
          <Dropdown
            label="Please Enter Y-value: "
            options={[
              { label: " 100 ", value: "100" },
              { label: " 200 ", value: "200" },
              { label: " 300 ", value: "300" },
            ]}
            value={yvar}
            onChange={handleChangeY}
          />
          <br />
          <br />
          <p> Y-value : {yvar}</p>
          <label>
            {" "}
            <strong>Please Enter Period: </strong>
          </label>
          <br />
          <br />
          <label> Start Date: </label>
          <br />
          <input
            type="date"
            value={startvar}
            onChange={handleChangeStart}
          ></input>
          <br />
          <br />
          <p> From : {startvar}</p>
          <label> End Date: </label>
          <br />
          <input type="date" value={endvar} onChange={handleChangeEnd}></input>
          <br />
          <br />
          <p> To : {endvar}</p>
          <br />
          <button type="submit">Submit</button>
        </form>
      </Modal>
    </React.Fragment>
  );
}
const Dropdown = ({ label, value, options, onChange }) => {
  return (
    <label>
      <strong> {label} </strong>
      <br />
      <br />

      <select value={value} onChange={onChange}>
        {options.map((option) => (
          <option key = {option.value} value={option.value}>{option.label}</option>
        ))}
      </select>
    </label>
  );
};
export default ModalBox;
