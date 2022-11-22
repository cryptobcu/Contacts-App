import {useState , useEffect} from 'react'
import List from './List'
import Form from './Form'

function Contacts() {
  const [contacts , setContacts] = useState([
    {
      fullname: "Eren Jaeger",
      phone_number: "606-599-8233"
    },{
      fullname: "Tony Stark",
      phone_number: "347-310-9461"
    }
  ]);

  useEffect(()=>{
    console.log(contacts);
  }, [contacts]);

  return (
    <div>
      <h1 className='display-1' style={{textAlign: "center"}} >Contacts App</h1>
        <Form addContact={setContacts} contacts={contacts} />
        <List contacts={contacts} />
    </div>
  )
}

export default Contacts;