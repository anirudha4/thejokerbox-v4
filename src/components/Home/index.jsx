import React, { useState } from 'react'
import styled from 'styled-components';
import { Card } from 'antd';
import { Container, Field, Space, CustomTabs, Button } from '@components/custom';
import Input from '@components/custom/Input';
import { colors, styles } from '@themes';
import { useNavigate, Navigate } from 'react-router-dom';

const FormContainer = styled(Card)`
    && {
        max-width: 600px;
        border-radius: ${styles.borderRadius};
        margin: 0 auto;
        padding: 1.5em;
        position: relative;
        &::before {
            content: '';
            position: absolute;
            top:0;
            width: 100%;
            height: 100%;
            left: 0;
            background-color: ${colors.primary};
            transform: rotate(4deg) scale(1);
            z-index: -100;
            border-radius: ${styles.borderRadius};
        }
    }
`;

export default function Home({ authStore }) {
    const { user, signUpWithEmailAndPassword, loginWithEmailAndPassword, loginWithPopUp } = authStore;
    const navigate = useNavigate();
    const { TabPane } = CustomTabs;
    const [signInLoading, setSignInLoading] = useState(false);
    const [signUpLoading, setSignUpLoading] = useState(false);
    const [googleLoading, setGoogleLoading] = useState(false);
    const [loginForm, setLoginForm] = useState({
        email: '',
        password: ''
    })
    const [signUpForm, setSignUpForm] = useState({
        email: '',
        password: ''
    });
    const isLogInDisabled = () => {
        if(!loginForm.email || !loginForm.password) {
            return true
        }
        return false;
    }
    const isSignUpDisabled = () => {
        if(!signUpForm.email || !signUpForm.password) {
            return true
        }
        return false;
    }
    const handleManualLogin = async (e) => {
        e.preventDefault();
        setSignInLoading(true);
        await loginWithEmailAndPassword(loginForm.email, loginForm.password);
        setSignInLoading(false);
        navigate('/dashboard?key=1', { replace: true })
    }
    const handleManualSignUp = async (e) => {
        e.preventDefault();
        setSignUpLoading(true);
        await signUpWithEmailAndPassword(signUpForm.email, signUpForm.password);
        setSignUpLoading(false);
        navigate('/dashboard?key=1', { replace: true })
    }

    const handleLoginChange = e => {
        setLoginForm({
            ...loginForm,
            [e.target.name]: e.target.value
        });
    };
    const handleSignUpChange = e => {
        setSignUpForm({
            ...signUpForm,
            [e.target.name]: e.target.value
        });
    };
    const handlePopUpLogin = async (e) => {
        try {
            setGoogleLoading(true);
            await loginWithPopUp();
            setGoogleLoading(false);
            navigate('/dashboard?key=1', { replace: true })
        } catch(err) {
            setGoogleLoading(false);
        }
    }
    if(user) {
        return <Navigate to="/dashboard?key=1" />
    }
    return (
        <Container>
            <Space top="5em" />
            <FormContainer>
                <CustomTabs 
                tabBarExtraContent={{
                    right: <Button disabled={googleLoading} onClick={handlePopUpLogin} size="fontSmall" type='primary'>Continue With Google</Button>
                }}
                defaultActiveKey='1'>
                    <TabPane key="1" tab="Log In">
                        <form onSubmit={handleManualLogin}>
                            <Space top="1em" />
                            <Field>
                                <label htmlFor="email">
                                    Email
                                </label>
                                <Input autoComplete="off" name="email" value={loginForm.email} onChange={handleLoginChange} type="email" placeholder="Eg. johndoe@mail.com" />
                            </Field>
                            <Field>
                                <label htmlFor="password">
                                    Password
                                </label>
                                <Input name="password" value={loginForm.password} onChange={handleLoginChange} type="password" placeholder="*********" />
                            </Field>
                            <Space top="2em" />
                            <Button disabled={isLogInDisabled() || signInLoading} fontSize="fontMedium" type="primary" width="100%">Log In</Button>
                        </form>
                    </TabPane>
                    <TabPane key="2" tab="Sign Up">
                        <form onSubmit={handleManualSignUp}>
                            <Space top="1em" />
                            <Field>
                                <label htmlFor="email">
                                    Email
                                </label>
                                <Input autoComplete="off" name="email" value={signUpForm.email} onChange={handleSignUpChange} type="email" placeholder="Eg. johndoe@mail.com" />
                            </Field>
                            <Field>
                                <label htmlFor="password">
                                    Password
                                </label>
                                <Input name="password" value={signUpForm.password} onChange={handleSignUpChange} type="password" placeholder="*********" />
                            </Field>
                            <Space top="2em" />
                            <Button disabled={isSignUpDisabled() || signUpLoading} fontSize="fontMedium" type="primary" width="100%">Sign Up</Button>
                        </form>
                    </TabPane>
                </CustomTabs>
            </FormContainer>
        </Container>
    )
}