import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
export default function Note({ title, description, createdAt, priority }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{createdAt}</Card.Text>
        <Card.Text>{priority}</Card.Text>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary">View Detail</Button>
      </Card.Body>
    </Card>
  );
}
