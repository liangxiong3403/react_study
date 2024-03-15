import React from "react";

// props是形式参数(可以任意名称)
const Contact = props => {
    // 解构contactForm属性
    const { contactForm } = props;

    const formList = contactForm.map(contact => {
        return contact.age < 50 ? (
            <div className="ContactForm" key={contact.id}>
                <div>{contact.name}</div>
                <div>{contact.age}</div>
                <div>{contact.sex}</div>
            </div>) : null;
    });
    console.log(contactForm);

    return (
        <div className="ContactForm">
            {formList}
        </div>
    );
}

export default Contact;