import React from "react";
import { Accordion, Row } from "react-bootstrap";
import { question } from "../data";

function QAList({ data, deleteOneItem }) {
  const dataLocal = JSON.parse(localStorage.getItem("items"));
  //delete one item from array
  const onDeleteItem = (id) => {
    if (localStorage.getItem("items") != null) {
      const index = question.findIndex((item) => item.id === id);
      question.splice(index, 1);
      deleteOneItem(question);
    }
  };
  return (
    <Row>
      <Accordion>
        {localStorage.getItem("items") != null ? (
          dataLocal.map((item, index) => {
            return (
              <Accordion.Item eventKey={item.id} key={index}>
                <Accordion.Header>
                  <div className="m-auto">{item.q}</div>
                </Accordion.Header>
                <Accordion.Body className="text-end">
                  <div className="px-3 d-inline ">{item.a}</div>
                  <button
                    className="btn-color"
                    onClick={() => onDeleteItem(item.id)}
                  >
                    {" "}
                    مسح السؤال
                  </button>
                </Accordion.Body>
              </Accordion.Item>
            );
          })
        ) : (
          <h2 className="fs-4 text-center p-5">لا يوجد اسئله الان</h2>
        )}
      </Accordion>
    </Row>
  );
}

export default QAList;
