import React, {useState} from 'react';
import { validateEmail} from '../../utils/helpers';

const Contact = () => {
    const [formState, setFormState] = useState({name: '', email: '', message: ''});
    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message}= formState;

    const submit = (e) => {
        e.preventDefault();
        if(!errorMessage) {
            setFormState({ [e.target.name]: e.target.value});
            console.log('Form', formState);
        }
    };

    const handleCharge = (e) => {
        if(e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if(!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if(!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
    };
    return (
<div className="container mt-5">
	<div className="row d-flex justify-content-center">
		<div className="col-md-3 message">
			<div className="contact-info">
				<img src="https://image.ibb.co/kUASdV/contact-image.png" alt="image"/>
				<h2>Contact Me</h2>
				<h4>I would love to hear from you!</h4>
			</div>
		</div>
		<div className="col-md-9 customForm">
			<form className="contact-form" onSubmit={submit}>
				<div className="form-group">
				  <label className="control-label col-sm-2" htmlFor="fname">Name:</label>
				  <div className="col-sm-10">          
					<input type="text" className="form-control" id="name" placeholder="Enter Full Name" name="name" defaultValue={name} onBlur={handleCharge}/>
				  </div>
				</div>
				<div className="form-group">
				  <label className="control-label col-sm-2" htmlFor="email">Email:</label>
				  <div className="col-sm-10">
					<input type="email" className="form-control" id="email" placeholder="Enter email" name="email" defaultValue={email} onBlur={handleCharge}/>
				  </div>
				</div>
				<div className="form-group">
				  <label className="control-label col-sm-2" htmlFor="message">Message:</label>
				  <div className="col-sm-10">
					<textarea className="form-control" rows="5" id="message" name="message" defaultValue={message} onBlur={handleCharge}></textarea>
				  </div>
				</div>
                {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
                )}
				<div className="form-group">        
				  <div className="col-sm-offset-2 col-sm-10">
					<button type="submit" className="btn btn-default">Submit</button>
				  </div>
				</div>
			</form>
		</div>
	</div>
</div>
    );
}

export default Contact;