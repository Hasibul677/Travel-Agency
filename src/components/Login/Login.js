import React from "react";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../hooks/useAuth";
import { Col, Container, Row } from 'react-bootstrap';

const Login = () => {
    const {googleSignIn, setUser, setError} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_url= location?.state?.from || '/';

    const handleLogin=()=>{
        googleSignIn()
        .then(result=>{
            setUser(result.user);
            history.push(redirect_url);
        }).catch(error=>{
            setError(error.message)
        })
    }
  return (
    <div className="text-center">
        <Container>
        <Row>
          <Col xs={12} md={6} lg={6} xl={6} className="mx-auto">
            <div className="login-container p-5 my-5 rounded-1 bg-dark text-white">
              <h2 className="font-monospace fw-bold text-center">LogIn Form</h2>
              <br />
            <div className="text-center">
                <button onClick={handleLogin} className="btn btn-danger rounded-pill"><i className="fab fa-google"></i> Google Sign in</button>      
              </div> 
              </div>       
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
