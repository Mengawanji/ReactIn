import * as Yup from 'yup';

const passwordRegex = new RegExp(
    "^[@#](?=.{7,13}$)(?=\w{7,13})(?=[^aeiou_]{7,13})(?=.*[A-Z])(?=.*\d)"
);

export const signupSchema = Yup.object({
    name: Yup.string().min(3).required("Enter Name"),
    email:Yup.string()
        .email("Enter Valid Email")
        .required("Enter Email"),
    password: Yup.string()
        .matches(passwordRegex, "Enter Valid Password")
        .required("Enter Password"),
    cpassword: Yup.string()
        .oneOf([Yup.ref("password")], "Password do NOT match!")
        .required("Enter Confirm Password."),
    
});