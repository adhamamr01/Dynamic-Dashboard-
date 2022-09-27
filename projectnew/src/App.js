import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Box from "@mui/material/Box";
import ModalBox from "./Components/ModalBox";
import ContentBox from "./Components/ContentBox";

const loops = 4;

const boxStyle = {
  bgcolor: "orange",
  py: 13,
  margin: "auto",
  textAlign: "center",
  mb: 3,
  width: 600,
  height: 300,
};

const array = [];
for (var i = 1; i <= loops; i++) {
  array.push({
    id: i,
    chart: "bar",
    x: "10",
    y: "100",
    start: "2021-01-01",
    end: "2022-12-31",
    filled: false,
  });
}

function App() {
  const [items, setItems] = useState(array);
  // const [selectedItem, setSelectedItem] = useState(
  //   items.find((thing) => thing.id == 1)
  // );
  const [selectedItem, setSelectedItem] = useState();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const setActualData = (data) => {
    setItems(items.map(item=> (item.id === data.id) ? data : item));
  };
  return (
    <React.Fragment>
      <h1>Dynamic Dashboard Page (Hopefully)</h1>
      <br />
      <Container fluid>
        <Row>
          {items.map((item) => (
            <Col key={item.id}>
              <Box sx={boxStyle}>
                {item.filled ? (
                  <ContentBox data={item} />
                ) : (
                  <button
                    onClick={() => {
                      setModalIsOpen(true);
                      setSelectedItem(item);
                    }}
                    style={{
                      backgroundColor: "transparent",
                      border: "1px solid transparent",
                    }}
                  >
                    <FontAwesomeIcon icon={faCirclePlus} size="5x" />{" "}
                  </button>
                )}
              </Box>
            </Col>
          ))}
        </Row>
        {modalIsOpen && (
          <ModalBox
            modalIsOpen = {modalIsOpen}
            setActualData={setActualData}
            setModalIsOpen = {setModalIsOpen}
            setSelectedItem = {setSelectedItem}
            data={selectedItem}
          />
        )}
      </Container>
    </React.Fragment>
  );
}

export default App;
