import React, { Component } from "react";

class Contact extends Component {
    render() {
        const { contactForm } = this.props;

        const formList = contactForm.map(contact => {
            return (
                <div className="ContactForm" key={contact.id}>
                    <div>{contact.name}</div>
                    <div>{contact.age}</div>
                    <div>{contact.sex}</div>
                </div>);
        });
        console.log(contactForm);

        return (
            <div className="ContactForm">
                {formList}
            </div>
        );
    }
}

export default Contact;