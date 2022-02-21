import React, {useState} from 'react';
import { validateEmail} from '../../utils/helpers';

const Contact = () => {
    const [formState, setFormState] = useState({name: '', email: '', message: ''});
    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;

    const submit = (e) => {
        e.preventDefault();
        if(validateEmail(e.target.email.value) && e.target.name.value && e.target.message.value) {
			console.log(e.target.name.value, e.target.email.value, e.target.message.value);
            setFormState({ name: '', email: '', message:''});
            console.log('Form', formState);
			document.querySelector(".contact-form").reset();
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
<div className="container">
	<div className="section-title text-center mb-5">
		<h1>Contact</h1>
	</div>
	<div className="row d-flex justify-content-center" data-aos="zoom-in">
		<div className="col-md-3 message">
			<div className="contact-info text-center">
				<img src="https://image.ibb.co/kUASdV/contact-image.png" alt="message"/>
				<h2>Contact Me</h2>
				<h4>Feel free to check out:</h4>
				<div className='mt-3'>
					<a href="https://www.instagram.com/andrewyu22" target="_blank" rel="noreferrer"><i className="bx bxl-instagram bx-md"></i></a>
					<a href="https://github.com/andrewyu22" target="_blank" rel="noreferrer"><i className="bx bxl-github bx-md"></i></a>
					<a href="https://www.linkedin.com/in/andrew-yu-b03181125" target="_blank" rel="noreferrer" ><i className="bx bxl-linkedin bx-md"></i></a>
				</div>
			</div>
		</div>
		<div className="col-md-9 customForm">
			<form className="contact-form" onSubmit={submit}>
				<div className="form-group">
				  <label className="control-label col-sm-2" htmlFor="fname">Name:</label>
				  <div className="col-sm-10">          
					<input type="text" className="form-control" id="name" placeholder="Enter Full Name" name="name" defaultValue={name} onChange={handleCharge}/>
				  </div>
				</div>
				<div className="form-group">
				  <label className="control-label col-sm-2" htmlFor="email">Email:</label>
				  <div className="col-sm-10">
					<input type="email" className="form-control" id="email" placeholder="Enter email" name="email" defaultValue={email} onChange={handleCharge}/>
				  </div>
				</div>
				<div className="form-group">
				  <label className="control-label col-sm-2" htmlFor="message">Message:</label>
				  <div className="col-sm-10">
					<textarea className="form-control" rows="5" id="message" name="message" defaultValue={message} onChange={handleCharge}></textarea>
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