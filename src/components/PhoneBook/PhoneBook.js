import React from "react";
import shortid from 'shortid';
import ContactForm from "../ContactForm/ContactForm";
import Filter from "../Filter/Filter";
import ContactList from "../ContactList/ContactList";
import style from '../PhoneBook/PhoneBook.module.css';

export default class PhoneBook extends React.Component {
  state = {
    contacts: [],
    filter: '',
  };

  inputIds = {
    nameId: shortid.generate(),
    numberId: shortid.generate(),
    finedId: shortid.generate(),
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    const { contacts } = this.state;
    return this.setState({
      contacts: [...contacts, e]
    })
  };

  deleteContact = e => {
    const { id } = e.target;
    const { contacts } = this.state;
    this.setState({ contacts: contacts.filter(contact => contact.id !== id) });
  };

  render() {
    const { contacts, filter } = this.state;
    const { nameId, numberId, finedId } = this.inputIds;
    const filterContacts = contacts.filter(contact => {
      const nameContact = contact.name;
      return nameContact.toLowerCase().includes(filter.toLowerCase());
    });
    return (
      <section className={style.section}>
        <h1 className={style.title}>Phonebook</h1>
        <ContactForm
          onSubmit={this.handleSubmit}
          htmlFor={{ nameId, numberId }}
        />
        <h2 className={style.subTitle}>Contacts</h2>
        <Filter onChange={this.handleChange} htmlFor={finedId} value={filter} />
        <ContactList
          filterContacts={filterContacts}
          onClickDelete={this.deleteContact}
        />
      </section>
    );
  }
}