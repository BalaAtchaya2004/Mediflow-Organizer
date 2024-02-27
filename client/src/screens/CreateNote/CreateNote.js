import { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import MainScreen from "../../components/MainScreen";
import ReactMarkdown from "react-markdown";
import { useDispatch, useSelector } from "react-redux";
import { createNoteAction } from "../../actions/notesActions";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "../../components/ErrorMessage";
import Loading from "../../components/Loading";

const CreateNote = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");

  const dispatch = useDispatch();
  const noteCrate = useSelector((state) => state.noteCrate);
  const { loading, error, note } = noteCrate;

  const navigate = useNavigate();

  const resetHandler = () => {
    setTitle("");
    setContent("");
    setCategory("");
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!title || !content || !category) return;
    dispatch(createNoteAction(title, content, category));

    resetHandler();
    navigate("/mynotes");
  };

  return (
    <div>
      <center>
      <MainScreen title="Add an Appointment here">
        <Card>
          <Form onSubmit={submitHandler}>
            {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
            
            <Form.Group controlId="title">
              <Form.Label><h4>Appointment Name</h4></Form.Label>
              <Form.Control
                type="title"
                value={title}
                class=""
                placeholder="Enter your Appointment name"
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="content">
              <Form.Label><h4>Doctor Name</h4> </Form.Label>
              <Form.Control
                type="title"
                value={content}
                placeholder="Enter the Doctor Name"
                rows={4}
                onChange={(e) => setContent(e.target.value)}
              />
            </Form.Group>

            {/* {content && (
              <Card>
                <Card.Header>Note Preview</Card.Header>
                <Card.Body>
                  <ReactMarkdown>{content}</ReactMarkdown>
                </Card.Body>
              </Card>
            )} */}

            <Form.Group controlId="content">
              <Form.Label><h4>Date</h4></Form.Label>
              <Form.Control
                type="content"
                value={category}
                placeholder="Enter the Date of appointment"
                onChange={(e) => setCategory(e.target.value)}
              />
            </Form.Group>
            {loading && <Loading size={50} />}
            <Button type="submit" variant="primary">
              Create 
            </Button>
            <Button className="mx-2" onClick={resetHandler} variant="danger">
              Reset Fields
            </Button>
          </Form>
          <Card.Footer className="text-muted">
            Creating on - {new Date().toLocaleDateString()}
          </Card.Footer>
        </Card>
      </MainScreen>
      </center>
    </div>
  );
};
export default CreateNote;
