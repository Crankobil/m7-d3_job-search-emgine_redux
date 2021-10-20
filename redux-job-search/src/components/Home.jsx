
import { Button, Col, Container, Form, Row } from "react-bootstrap";
/* import { Redirect } from "react-router-dom";
import { connect } from "react-redux"; */
/* 
const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  setError: (error) => dispatch({ type: "SET_ERROR", payload: error }),
  setJobs: (position, location) =>
    dispatch(async (dispatch) => {
      try {
        const response = await fetch(process.env.REACT_APP_JOB_URL + "?description=" + position + "&location=" + location + "&limit=10");
        if (response.ok) {
          const jobsArray = await response.json();
          setTimeout(() => {
            dispatch({ type: "SET_JOBS", payload: jobsArray });
          }, 1000);
        } else {
          console.log("Error:" + response.statusText);
        }
      } catch (error) {
        console.log("Error:" + error);
      }
    }),
}); */
const Home = (/* { setError, setJobs } */) => {
 /*  const [position, setPosition] = useState("");
  const [location, setLocation] = useState("");
  const [search, setSearch] = useState(false);
  const handleSearch = (e) => {
    setSearch(true);
    e.preventDefault();
    setJobs(position, location);
  }; */
  return (
    
        <Container>
          <Form >
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label className='h5 text-white'>Job Title</Form.Label>
                  <Form.Control type='text' placeholder='Search...'  />
                </Form.Group>
              </Col>
               
            </Row>
            <Row className='justify-content-center'>
              <Button type='submit' className='w-25 py-3' variant='dark'>
                Search
              </Button>
            </Row>
          </Form>
        </Container>
      )
};

export default Home;
