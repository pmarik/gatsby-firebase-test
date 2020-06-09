import React, { useEffect, useContext, useRef } from 'react';
import { GlobalStateContext  } from '../../context/GlobalContextProvider';
import { ButtonSubmit } from '../Button/Button.component';

const FooterForm = () => {

    const state = useContext(GlobalStateContext);

    const nameRef = useRef();
    const emailRef = useRef();
    const messageRef = useRef();

    /** 
     * Check window location if loading page externally to #contact will focus first input
     * of contact form, will also focus if clicking on contact nav link 
     **/
    useEffect(() => {
        if(window.location.hash == "#contact" || state.contactActive) nameRef.current.focus();
    });

    // press enter from name input will focus next ref (the email input)
    const firstKeyDown = (e) => {
        if (e.key === "Enter") emailRef.current.focus();
    }

    //press enter from email input will focus next ref (the textarea input)
    const secondKeyDown = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            messageRef.current.focus();
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('footer form submitted')
    }

    return (
        <form className="footer-form" onSubmit={handleSubmit}>
            <div className="input-wrap">
                <label>
                    <span className="form-label-text">Name</span>
                    <input required type="text" ref={nameRef} onKeyDown={firstKeyDown} placeholder="enter your name"/>
                </label>

                <label>
                    <span className="form-label-text">Email</span>
                    <input required type="email" ref={emailRef} onKeyDown={secondKeyDown} placeholder="enter your email"/>
                </label>
            </div>

            <label className='textarea-wrap'>
                <span className="form-label-text">Message</span>
                <textarea required ref={messageRef}  placeholder="type your message"/>
            </label>

            <ButtonSubmit
                textColor="#ffffff"
                outlineColor="#ffffff" 
                fillColor="#5ab5cc"
                hoverTextColor="#2193B0"
                hoverFillColor="#ffffff"
             >
                SEND MESSAGE
            </ButtonSubmit>
        </form>
    )
}

export default FooterForm;

