import {useState} from 'react'

function List({contacts}) {
    const [filteredText, setFilteredText] = useState("");

    const filtered = contacts.filter((item) => {
        return Object.keys(item).some((key) => 
        item[key]
        .toString()
        .toLowerCase()
        .includes(filteredText.toLowerCase()) 
        );
    });
    console.log(filtered);
  return (
    <div className='container-sm mt-5 '>
        <div className='row'>
        <div className='col-md-8 offset-md-2'>
        <input 
        className='form-control mb-5 '
        placeholder='Filter Contact' 
        value={filteredText} 
        onChange={ (e) => setFilteredText(e.target.value)}/></div></div>
        <div className='row'>
        <ul className='list-group col-md-6 offset-md-3'>
        {
            filtered.map((contact, i) => (
            <li key={i} className="list-group-item d-flex justify-content-between align-items-center " >{contact.fullname} 
            <span className='badge bg-primary rounded-pill'>{contact.phone_number}</span> </li> 
        ))}
        </ul>
        </div>
    </div>
  )
}

export default List;