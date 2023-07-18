
 

import { Col } from "react-bootstrap";
import { Tag } from "react-bootstrap-icons";

export const ProjectCard = ({ title, description, imgUrl,tag }) => {
  return (
    <Col size={8} sm={6} md={4}>
      <div className="proj-imgbx">
      <a href=""><img src={imgUrl} /></a>
        <div className="proj-txtx">
        <br/>
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}