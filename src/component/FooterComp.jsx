import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";

const FooterComp = () => {
  return (
    <div className="footer-comp">
      <Container>
        <Row>
          <Col>
            <h2 className="mt-5 core">Info</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2 className="md-4 mt-5 core fs-3">School :</h2>
            <h3 className="md-4">SMA Negeri 4 Surakarta</h3>
          </Col>
          <Col>
            <h2 className="md-4 mt-5 core fs-3">Contact :</h2>
            <h3 className="md-4">+6281225629968</h3>
          </Col>
          <Col>
            <h2 className="md-4 mt-5 core fs-3">Social Media :</h2>
            <h3 className="md-4">instagram.com</h3>
          </Col>
          <Row>
            <Col>
              <h4 className="text-center copyright">Copyright@2021ambalanmaco</h4>
            </Col>
          </Row>
        </Row>
      </Container>
    </div>
  );
};

export default FooterComp;
