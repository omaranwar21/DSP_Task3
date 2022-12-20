import { Row, Col } from "react-bootstrap";

import style from "./style.module.css";

const BottomRepresenation = () => {
  return (
    <Row className={style.repersenationPanel}>
      <Col className={style.repersenationSection}>
        <h3>Headline</h3>
        <li>
          First Point: Lorem Ipsum is simply dummy text of the printing and
          typesetting industry.
        </li>
        <li>
          Second Point: Lorem Ipsum is simply dummy text of the printing and
          typesetting industry.
        </li>
        <li>
          Third Point: Lorem Ipsum is simply dummy text of the printing and
          typesetting industry.
        </li>
        <li>
          Forth Point: Lorem Ipsum is simply dummy text of the printing and
          typesetting industry.
        </li>
      </Col>
      <Col className={style.repersenationSection}>
        <img
          className={style.customImage}
          src="https://www.faberacoustical.com/wpblog/wp-content/uploads/2015/05/Spectrogram3D1024.png"
          alt=""
        />
      </Col>
    </Row>
  );
};

export default BottomRepresenation;
