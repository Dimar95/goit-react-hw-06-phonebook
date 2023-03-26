import AddContact from './AddContact/AddContact';
import ContactsList from './ContactsList/ContactsList';
import ContactsFilter from './ContactsFilter/ContactsFilter';
import { AppStyled, Container, Head, ContactsStyled } from './App.styled';

const App = () => {
  // useEffect(() => {
  //   if (localStorage.getItem('localStorageContacts')) {
  //     const localStorageContacts = JSON.parse(
  //       localStorage.getItem('localStorageContacts')
  //     );
  //     setContacts(localStorageContacts);
  //   }
  // }, []);

  // useEffect(() => {
  //   if (isFirstRender.current) {
  //     isFirstRender.current = false;
  //     return;
  //   }

  //   localStorage.setItem('localStorageContacts', JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <AppStyled>
      <Container>
        <Head>Phonebook</Head>
        <AddContact />
        <ContactsStyled>Contacts:</ContactsStyled>
        <ContactsFilter />
        <ContactsList />
      </Container>
    </AppStyled>
  );
};

export default App;
