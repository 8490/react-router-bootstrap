import { Row, Col, Container } from "react-bootstrap";
import MyCard from "./MyCard";

const Courses = ({ data }) => {
  return (
    <Container className="text-center mt-4 height:500px">
      <h1 className="mb-3">Courses</h1>
      <Row className="d-flex justify-content-center">
        {data.map((course) => {
          return (
            <Col
              key={course.id}
              className="mb-5 d-flex justify-content-center"
              xs={12}
              md={6}
              lg={4}
            >
              <MyCard course={course} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Courses;
