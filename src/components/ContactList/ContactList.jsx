import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'components/Redux/phonebookSlice';
import { ListItem, DeleteBtn, List } from './ContactList.styled';
import {getContacts, getFilteredContacts} from 'components/Redux/selectors'

export const ContactList = () => {
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilteredContacts);

    const dispatch = useDispatch();

    const filtered = contacts.filter(contactItem =>
        contactItem.name.toLowerCase().includes(filter)
    );

    const deleteContacts = id => {
        return dispatch(deleteContact(id));
    };

    return (
        <>
            {filtered?.length > 0 && (
                <List>
                    {filtered.map(({ id, name, number }) => (
                        <ListItem key={id}>
                            {name}: {number}
                            <DeleteBtn
                                type="button"
                                onClick={() => deleteContacts(id)}
                            >
                                Delete
                            </DeleteBtn>
                        </ListItem>
                    ))}
                </List>
            )} 
        </>
    );
};