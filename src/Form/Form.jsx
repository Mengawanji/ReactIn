import styles from "./styles.module.css"
import React from "react";
import { useFormik } from "formik";

import { signupSchema } from "../schemas";



const initialValues = {
    name: '',
    email:'',
    password:'',
    cpassword:'',
}

export default function SignUp() {
   
    const {values, handleBlur, handleChange, handleSubmit, errors, touched} = useFormik({
        initialValues,
        validationSchema: signupSchema,
        onSubmit:(values, actions) => {
            console.log(values);
            actions.resetForm(); 
        }
    });


    return(<div className={styles.container}>
              <div className={styles.authContainer}> 
                <form onSubmit={handleSubmit}> 
                    <h2>Log in</h2>
                    <label htmlFor="name"> Name</label>
                    <input
                        type="text" 
                        name="name"
                        value={values.name} 
                        onBlur={handleBlur} 
                        onChange={handleChange}
                    />
                    <div className={styles.formError}>
                        {errors.name && touched.name && (
                            <p>{errors.name}</p>
                        )}
                    </div>


                    <label htmlFor="email"> Email</label>
                    <input 
                        type="email" 
                        name="email" 
                        value={values.email} 
                        onBlur={handleBlur} 
                        onChange={handleChange}
                    />
                    <div className={styles.formError}>
                        {errors.email && touched.email && (
                            <p>{errors.email}</p> 
                        )}
                    </div>


                    <label htmlFor="password"> Password</label>
                    <input 
                        type="password" 
                        name="password" 
                        value={values.password} 
                        onBlur={handleBlur} 
                        onChange={handleChange}
                    />
                    <div className={styles.formError}>
                        {errors.password && touched.password && (
                            <p>{errors.password}</p>
                        )}
                    </div>


                    <label htmlFor="cpassword"> Confirm Password</label>
                    <input 
                        type="password" 
                        name="cpassword" 
                        value={values.cpassword} 
                        onBlur={handleBlur} 
                        onChange={handleChange}
                    /> 
                    <div className={styles.formError}>
                        {errors.cpassword && touched.cpassword && (
                            <p>{errors.cpassword}</p>
                        )}
                    </div> <br/> 
                                
                    <button type="submit">Submit</button>
                </form>
              </div>   
           </div>
        ); 
}