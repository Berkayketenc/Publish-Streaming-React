import React, { useState,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Segment, Form, Header, Button, Icon, Message, } from "semantic-ui-react";
import { Link , withRouter} from "react-router-dom";
import { registerUserUdateProfile } from "./authSlice";
import { unwrapResult } from '@reduxjs/toolkit';
import styles from "./auth.module.css";
import "./auth.css";


const SignUp = ({history}) => {
    const dispatch = useDispatch();
    const { loading,currentUser } = useSelector((state) => state.auth);


    const [username, setUsername] = useState("");
    const [email, SetEmail] = useState("");
    const [gender, SetGender] = useState("male");
    const [password, SetPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [errors, SetErrors] = useState([]);

    useEffect (() =>{

        if(currentUser) {
            history.push('/');
        }
         /* eslint-disable react-hooks/exhaustive-deps */
    },[currentUser]);

    const handleSubmit = (event) => {
        event.preventDefault();

        SetErrors([]);

        if (isFormValid()) {

            dispatch(
                registerUserUdateProfile({ username, email, password, gender }))
                .then(unwrapResult)//unwrapresult => then ve catch özellıklerı donduruyor
                .then(user => {})
                .catch((error) => {

                    SetErrors((prevErrors) => [...prevErrors, error]);
                });
        }

    };

    const isEmpty = () => ![username, email, password, passwordConfirm, gender].every(Boolean);

    const isFormValid = () => {
        let error;

        if (!isEmpty() && !passNotMatch()) {

            return true;
        }
        if (isEmpty()) {

            error = {
                code: "empty_fields",
                message: "Form empty",
            };
        } else if (passNotMatch()) {
            error = {
                code: "passwords_not_match",
                message: "passwords not match",
            };
        }
        SetErrors((prevErrors) => [...prevErrors, error]);
        return false;
    }

    const passNotMatch = () => password !== passwordConfirm;

    const displayErrors = () =>
        errors.map((error, key) => <p key={key}> {error.message}</p>);




    return (
        <Grid textAlign="center" verticalAlign="middle" className={styles.form}>

            <Grid.Column style={{ maxWidth: 450 }}>

                <Header as="h2" color="black" icon>

                    <Icon name="play" />
                    {"Register Now!"}
                </Header>

                <Form >
                    <Segment >
                        <Form.Field>

                            <Form.Input fluid placeholder="Your Name" onChange={e => setUsername(e.target.value)}
                                icon="users"
                                iconPosition="left"
                                name="username"
                                type="text"
                            />
                        </Form.Field>

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

                        <Form.Field>

                            <Form.Input fluid placeholder="Confirm Password" onChange={e => setPasswordConfirm(e.target.value)}
                                icon="lock"
                                iconPosition="left"
                                name="passwordConfirmation"
                                type="password"
                            />
                        </Form.Field>

                    </Segment>

                    <Segment>

                        <Form.Group inline >

                            <label>What's your gender ?</label>
                            <Form.Radio
                                label="Male"
                                name="radioGroup"
                                value="male"
                                checked={gender === "male"}
                                onChange={(e, { value }) => SetGender(value)}
                            />

                            <Form.Radio
                                label="Female"
                                name="radioGroup"
                                value="female"
                                checked={gender === "female"}
                                onChange={(e, { value }) => SetGender(value)}
                            />
                            <Form.Radio
                                label="Other"
                                name="radioGroup"
                                value="other"
                                checked={gender === "other"}
                                onChange={(e, { value }) => SetGender(value)}
                            />

                        </Form.Group>

                    </Segment>

                    <Button color="black" fluid size="large" loading={loading === "pending"} onClick={handleSubmit}>Register</Button>

                   

                </Form>
                {errors.length > 0 && <Message error>{displayErrors()}</Message>}
                    <Message>
                        <Icon name="help" />
                    Do you have an account , {""}
                        <Link to="/login">Login Here!</Link>
                    </Message>

            </Grid.Column>

        </Grid>
    );
};

export default withRouter(SignUp);
