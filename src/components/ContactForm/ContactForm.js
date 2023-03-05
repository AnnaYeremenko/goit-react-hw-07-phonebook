import { useDispatch, useSelector } from 'react-redux';
import { InputTitle, InputText, Button} from './ContactForm.styled';
import { addContact } from 'redux/operations';
import { selectContacts } from 'redux/contactsSlice';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = event => {
    event.preventDefault();
    const { name, number } = event.target.elements;
    // console.log(name, number);
    const toLowerCaseName = name.value.toLowerCase().trim();

    const searchName = contacts.find(
      contact => contact.name.toLowerCase().trim() === toLowerCaseName
    );

    if (searchName) {
      return alert(`${toLowerCaseName} is already in contacts`);
    }
    // console.log(name.value, number.value);
    dispatch(addContact({ name: name.value, number: number.value }));
    event.target.reset();
  };
    return (
        <form onSubmit={handleSubmit}>
            <InputTitle>Name </InputTitle>
            <InputText
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <InputTitle>Number </InputTitle>
          <InputText
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          />
            <Button type="submit">Add contact</Button>
        </form>
    );
};