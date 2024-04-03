'use client'
import Layout from '../layouts/Main';
import Link from 'next/link';
import {useState} from "react";

const RegisterPage = () => {
    const [value, setValue] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted with the following data:");
        console.log("First Name:", value.firstName);
        console.log("Last Name:", value.lastName);
        console.log("Email:", value.email);
        console.log("Password:", value.password);
    }

    return (
        <Layout>
            <section className="form-page">
                <div className="container">
                    <div className="back-button-section">
                        <Link href="/products">
                            <a><i className="icon-left"></i> Back to store</a>
                        </Link>
                    </div>

                    <div className="form-block">
                        <h2 className="form-block__title">Create an account and discover the benefits</h2>
                        <p className="form-block__description">Lorem Ipsum is simply dummy text of the printing
                            and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since
                            the
                            1500s</p>

                        <form className="form" onSubmit={handleSubmit}>
                            <div className="form__input-row">
                                <input className="form__input" placeholder="First Name" type="text"
                                       onChange={handleChange}/>
                            </div>

                            <div className="form__input-row">
                                <input className="form__input" placeholder="Last Name" type="text"
                                       onChange={handleChange}/>
                            </div>

                            <div className="form__input-row">
                                <input className="form__input" placeholder="Email" type="text"
                                       onChange={handleChange}/>
                            </div>

                            <div className="form__input-row">
                                <input className="form__input" type="Password" placeholder="Password"
                                       onChange={handleChange}/>
                            </div>

                            <div className='form__input-row'>
                                <input className='form__input' type='password' placeholder='Confirm Password'
                                       onChange={handleChange}/>
                            </div>

                            <div className="form__info">
                                <div className="checkbox-wrapper">
                                    <label htmlFor="check-signed-in" className={`checkbox checkbox--sm`}>
                                        <input name="signed-in" type="checkbox" id="check-signed-in"/>
                                        <span className="checkbox__check"></span>
                                        <p>I agree to the Google Terms of Service and Privacy Policy</p>
                                    </label>
                                </div>
                            </div>

                            <button type="button" className="btn btn--rounded btn--yellow btn-submit">Sign up</button>

                            <p className="form__signup-link">
                                <Link href="/login">
                                    <a href="#">Are you already a member?</a>
                                </Link>
                            </p>
                        </form>
                    </div>

                </div>
            </section>
        </Layout>
    )
}

export default RegisterPage
  