import React,{useState} from 'react';
import Contacts from './Contacts'

function Contact({contacts}){
    const [value,setValue] = useState('');
    const filterContacts = contacts.filter(contact =>{
        return(
         contact.firstName.toLowerCase().includes(value.toLowerCase()) ||
        contact.lastName.toLowerCase().includes(value.toLowerCase())
        )
    })
    return(
        <div>
            <input type = "text" placeholder = "Search" autoFocus onChange = {(event) => setValue(event.target.value)}></input>
            { filterContacts.map((contact) => {
                    return <Contacts item = {contact} key={contact.phone} />;
                })}
        </div>
    )
}

export default Contact;