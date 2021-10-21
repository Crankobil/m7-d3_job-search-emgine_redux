
import { Button, Col, Container, Form, Row, Table } from "react-bootstrap";
import { useState, useEffect } from "react";
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
const [jobs, setJobs] = useState([])

const getJobs = async () => {
try {
    const response = await fetch('https://strive-jobs-api.herokuapp.com/jobs?limit=20')
    if(response.ok){
        const jobData = response.json()
        console.log("data", jobData.data)
        setJobs(jobData)
    }
} catch (error) {
    console.log(error)
}
}

useEffect(() => {
    getJobs()
}, [])

console.log("jobs:", jobs)
  


  return (
    <>
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
          
          <Table striped bordered hover>          
<thead>
  <tr>
    <th>#</th>
    <th>First Name</th>
    <th>Last Name</th>
    <th>Username</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>1</td>
    <td>Mark</td>
    <td>Otto</td>
    <td>@mdo</td>
  </tr>
  <tr>
    <td>2</td>
    <td>Jacob</td>
    <td>Thornton</td>
    <td>@fat</td>
  </tr>
  <tr>
    <td>3</td>
    <td colSpan="2">Larry the Bird</td>
    <td>@twitter</td>
  </tr>
</tbody>
</Table>
        </Container>


</>
      )
};

export default Home;
