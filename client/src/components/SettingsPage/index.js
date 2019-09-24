import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container, ActionsContainer, Form, ChangePasswordButton, EditProfileButton, DeleteAccountButton  } from "./style";
import { PrimaryHeading } from 'shared/components';
import InputGroup from "components/InputGroup";

function ChangePasswordForm({ handlePasswordFormSubmit, password, password2 }) {
    return (
        <Form onSubmit={handlePasswordFormSubmit}>
            <label>
                Current password:
                <InputGroup
                    type="password"
                    name="password"
                    {...password}
                    placeholder="Password"
                    error={false}
                    errorMsg=''
                />
            </label>
            <label>
                New password:
                <InputGroup
                    type="password"
                    name="password2"
                    {...password2}
                    placeholder="Repeat password"
                    error={false}
                    errorMsg={''}
                />
            </label>
            <ChangePasswordButton primary type="submit">Change password</ChangePasswordButton>
        </Form>
    )
}

ChangePasswordForm.propTypes = {
    handlePasswordFormSubmit: PropTypes.func.isRequired,
    password: PropTypes.object.isRequired,
    password2: PropTypes.object.isRequired,
};

function SettingsPage({ password, password2, deleteAccount, handlePasswordFormSubmit }) {
    return (
        <Container>
            <PrimaryHeading>Settings</PrimaryHeading>
            {/*<ChangePasswordForm */}
            {/*    handlePasswordFormSubmit={handlePasswordFormSubmit}*/}
            {/*    password={password}*/}
            {/*    password2={password2}*/}
            {/*/>*/}
            <ActionsContainer>
                <EditProfileButton as={Link} to="/edit-profile">Edit profile</EditProfileButton>
                <DeleteAccountButton onClick={deleteAccount}>Delete Account</DeleteAccountButton>
            </ActionsContainer>
        </Container>
    )
}

SettingsPage.propTypes = {
    password: PropTypes.object.isRequired,
    password2: PropTypes.object.isRequired,
    deleteAccount: PropTypes.func.isRequired,
    handlePasswordFormSubmit: PropTypes.func.isRequired,
};

export default SettingsPage;