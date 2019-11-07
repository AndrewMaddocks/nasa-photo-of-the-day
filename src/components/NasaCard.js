import React from "react";
import {
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Col
} from "reactstrap";
import styled from "styled-components";
const Ct = styled(CardTitle)`
  idth: calc(97% - 22px);
  height: 92px;
  color: #000;
  text-shadow: -2px -2px 0 #ffd54e, -2px -1px 0 #ffd54e, -2px 0 0 #ffd54e,
    -2px 1px 0 #ffd54e, -2px 2px 0 #ffd54e, -1px -2px 0 #ffd54e,
    -1px -1px 0 #ffd54e, -1px 0 0 #ffd54e, -1px 1px 0 #ffd54e,
    -1px 2px 0 #ffd54e, 0 -2px 0 #ffd54e, 0 -1px 0 #ffd54e, 0 0 0 #ffd54e,
    0 1px 0 #ffd54e, 0 2px 0 #ffd54e, 1px -2px 0 #ffd54e, 1px -1px 0 #ffd54e,
    1px 0 0 #ffd54e, 1px 1px 0 #ffd54e, 1px 2px 0 #ffd54e, 2px -2px 0 #ffd54e,
    2px -1px 0 #ffd54e, 2px 0 0 #ffd54e, 2px 1px 0 #ffd54e, 2px 2px 0 #ffd54e;
  font-size: 50px;
  font-family: "Bowlby One SC", cursive;
  line-height: 86%;
  caret-color: #ffd54e;
  letter-spacing: normal;
`;
const Cd = styled.div`
  background-color: transparent;

  padding: 15px;
`;
const Cdb = styled(CardBody)`
  background-color: transparent;
  color: #fbd54e;
`;
const CI = styled(CardImg)`
  width: 720px;
  height: 480px;
`;
const CText = styled(CardText)`
  color: #4bd5ee;
`;
const NasaCard = props => {
  return (
    <Col>
      <Cd>
        <Cdb>
          <Ct>{props.Info.title}</Ct>
          <CardSubtitle>{props.Info.date}</CardSubtitle>
          <CText>{props.Info.explanation}</CText>
        </Cdb>
        <CI width="1080" height="720" src={props.Info.url} alt="space stuff" />
      </Cd>
    </Col>
  );
};
export default NasaCard;

// <div>
/* <div>
        {props.Info.media_type === "video" ? (
          <iframe
            title="video of something"
            width="1080"
            height="720"
            alt="space stuff"
            src={props.Info.url}
          />
        ) : (
          <img src={props.Info.url} alt="a pic" />
        )}
      </div> */

//   <div>
//     <p>{props.Info.date}</p>
//     <h1>{props.Info.title}</h1>
//     <p> {props.Info.explanation}</p>
//   </div>
// </div>
