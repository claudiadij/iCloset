import React, { useContext } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { Marginer } from "../../../components/Marginer/Marginer";
import { AccountContext } from "../../../components/AccountBox/accountContext";
import { 
    ComBoldLink,
    ComBoxContainer, 
    ComFormContainer, 
    ComInput, 
    ComMutedLink, 
    ComSubmitButton, 
    FieldContainer,
    FieldError
} from "../../../components/AccountBox/AccountBox.elements";

const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{7,}$/;

const validationSchema = yup.object({
    firstName: yup.string().min(2, "Please enter your first name").required("First name is required"),
    lastName: yup.string().min(2, "Please enter your last name").required("Lase name is required"),
    email: yup.string().email("Please enter a valid email address").required("This is a required field"),
    password: yup.string().matches(PASSWORD_REGEX, "Please enter a stronger password").required("This is a required field"),
    confirmPassword: yup.string().when("password", {
        is: val => (val && val.length > 0 ? true : false),
        then: yup.string().oneOf([yup.ref("password")], "Password does not match")
    }),
});

export function SignupForm(props) {
    const { switchToSignin } = useContext(AccountContext);

    const onSubmit = (values) => {
        alert(JSON.stringify(values));
    };

    const formik = useFormik({ 
        initialValues: { 
            firstName: "", 
            lastName: "", 
            email: "", 
            password:"", 
            confirmPassword: "" 
        },
        validateOnBlur: true,
        onSubmit,
        validationSchema: validationSchema,
    });

    return (
        <ComBoxContainer>
            <ComFormContainer onSubmit={formik.handleSubmit} >
                <FieldContainer>
                    <ComInput 
                    name="firstName" 
                    placeholder="First Name" 
                    value={formik.values.firstName} 
                    onChange={formik.handleChange} 
                    onBlur={formik.handleBlur}
                    />
                    <FieldError>{formik.touched.firstName && formik.errors.firstName ? formik.errors.firstName : ""}</FieldError>
                </FieldContainer>
                <FieldContainer>
                    <ComInput 
                    name="lastName" 
                    placeholder="Last Name" 
                    value={formik.values.lastName} 
                    onChange={formik.handleChange} 
                    onBlur={formik.handleBlur}
                    />
                    <FieldError>{formik.touched.lastName && formik.errors.lastName ? formik.errors.lastName : ""}</FieldError>
                </FieldContainer>
                <FieldContainer>
                    <ComInput 
                    name="email" 
                    placeholder="Email" 
                    value={formik.values.email} 
                    onChange={formik.handleChange} 
                    onBlur={formik.handleBlur}
                    />
                    <FieldError>{formik.touched.email && formik.errors.email ? formik.errors.email : ""}</FieldError>
                </FieldContainer>
                <FieldContainer>
                    <ComInput 
                    name="password" 
                    type="password" 
                    placeholder="Password" 
                    value={formik.values.password} 
                    onChange={formik.handleChange} 
                    onBlur={formik.handleBlur}
                    />
                    <FieldError>{formik.touched.password && formik.errors.password ? formik.errors.password : ""}</FieldError>
                </FieldContainer>
                <FieldContainer>
                    <ComInput 
                    name="confirmPassword" 
                    type="password" 
                    placeholder="Confirm Password" 
                    value={formik.values.confirmPassword} 
                    onChange={formik.handleChange} 
                    onBlur={formik.handleBlur}
                    />
                    <FieldError>{formik.touched.confirmPassword && formik.errors.confirmPassword ? formik.errors.confirmPassword : ""}</FieldError>
                </FieldContainer>
            </ComFormContainer>
            <Marginer direction="vertical" margin={10} />
            <Marginer direction="vertical" margin="1.6em" />    
            <ComSubmitButton type="submit">Register</ComSubmitButton>
            <Marginer direction="vertical" margin="1em" />
            <ComMutedLink href="#" onClick={switchToSignin}>
                Already have an account? 
                <ComBoldLink>Login</ComBoldLink>
            </ComMutedLink>
            <Marginer direction="vertical" margin="1em" />
        </ComBoxContainer>
    );
}