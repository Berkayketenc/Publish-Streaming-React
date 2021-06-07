import React ,{useState,useEffect}from 'react'
import { Grid, Segment, Form, Header, Button, Icon, Message, } from "semantic-ui-react";
import { Link,withRouter } from "react-router-dom";
import styles from "./auth.module.css";
import { unwrapResult } from '@reduxjs/toolkit';
import { loginUser } from "./authSlice";
import { useDispatch, useSelector } from 'react-redux';
import  "./auth.css";



const Login = ({history}) => {
    const dispatch = useDispatch();
    const {loading,currentUser} = useSelector((state) => state.auth);
    const [password, SetPassword] = useState("");
    const [email, SetEmail] = useState("");
    const [errors,SetErrors] = useState("");

    const displayErrors = () =>
    errors.map((error, key) => < p key={key} > {error.message}</p >);

    useEffect (() =>{

        if(currentUser) {
            history.push('/');
        }

         /* eslint-disable react-hooks/exhaustive-deps */
     
    },[currentUser]);

    const handleSubmit = (event) => {
        event.preventDefault();
        SetErrors([]);

        if(isFormValid()){

            dispatch(loginUser({email,password}))
            .then(unwrapResult)
            .then(loginInUser => {


            })
            .catch(error => {
                SetErrors(prevErrors => [...prevErrors,error]);
            })
        }
    };
     const isFormValid = () => Boolean(email) && Boolean(password);

    return (
        <Grid textAlign="center"  verticalAlign="middle" className={styles.form}>

            <Grid.Column style={{ maxWidth: 450 }}>

                <Header as="h2" color="black" icon>

                    <Icon name="play" />
                    {"Sign In!"}
                </Header>

                <Form >
                    <Segment >
                       
                        <Form.Field>

                            <Form.Input fluid placeholder="Your Email" onChange={e => SetEmail(e.target.value)}
                                icon="mail"
                                iconPosition="left"
                                name="email"
                                type="email"
                            />
                        </Form.Field>

                        <Form.Field>

                            <Form.Input fluid placeholder="Your Password" onChange={e => SetPassword(e.target.value)}
                                icon="lock"
                                iconPosition="left"
                                name="password"
                                type="password"
                            />
                        </Form.Field>

                        

                    </Segment>

                 
                    <Button color="black" fluid size="large" loading={loading ==="pending"} onClick={handleSubmit}>Login</Button>
                        
                  

                </Form>
                {errors.length > 0 && <Message error>{displayErrors()}</Message>}
                <Message>
                    <Icon name="help" />
                    don't you have an account , {""}
                    <Link to="/register">Register Here!</Link>
                </Message>
                
            </Grid.Column>

        </Grid>
    )
}

export default withRouter(Login);
