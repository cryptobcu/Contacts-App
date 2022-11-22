import {useState} from 'react'

function Form({ addContact, contacts }) {

    const [form, setForm] = useState({ fullname:"", phone_number:"" });

    const onChangeInput = (e) => {
        setForm({ ...form,[e.target.name]:e.target.value });
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if(form.fullname === "" || form.phone_number === ""){
            return false;
        }
        addContact([...contacts,form]);
        
        setForm({ fullname:"", phone_number:"" });
    }
  return (
    <form className='container' onSubmit={onSubmit}>
        <div className='row'>
            <div className='mb-3 mt-5 col-md-8 offset-md-2'>
                <input 
                className='form-control' 
                name='fullname' 
                placeholder='Full Name' 
                onChange={onChangeInput}
                value={form.fullname} />
            </div>

            <div className='mb-3 col-md-8 offset-md-2'>
                
                <input 
                className='form-control' 
                name='phone_number' 
                placeholder='Phone Number' 
                onChange={onChangeInput}
                value={form.phone_number} />
                    
                    <div className='form-text'>
                    Please do not leave blank..
                    </div>
            </div>
            <div className='mb-3 d-grid gap-2 col-6 mx-auto'>
                <button type='button' className='btn btn-primary' onClick={onSubmit} >Add New Contact</button>
            </div>
        </div>
    </form>
  )
}

export default Form;