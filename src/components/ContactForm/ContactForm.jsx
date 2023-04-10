import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addContact } from 'components/Redux/phonebookSlice';
import { getContacts } from 'components/Redux/selectors';
import { FormContainer, FormTitle, Input, Button } from './ContactForm.styled';

export const ContactForm = () => {
    const contacts = useSelector(getContacts);
    const dispatch = useDispatch();

    const handleSubmit = event => {
        event.preventDefault();
        const { name, number } = event.target.elements;

        contacts.find(contactItem =>
            contactItem.name.toLowerCase() === name.value.toLowerCase())
            ? alert(`${name.value} is already in contacts`)
            : dispatch(
                addContact({
                    id: nanoid(),
                    name: name.value,
                    number: number.value
                })
            )
        name.value = '';
        number.value = '';
    };

    return (
        <FormContainer>
            <form onSubmit={handleSubmit}>
                <FormTitle>Name</FormTitle>
                <Input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />

                <FormTitle>Number</FormTitle>
                <Input
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />

                <Button type="submit">Add contact</Button>
            </form>
        </FormContainer>
    );
};