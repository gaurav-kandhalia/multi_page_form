import { useState } from "react";
import Btn from './button'
import Heading from './heading'


const Your_info = ({visibilty,visibilty2,visibilty3,handle_data}) => {
  let heading = 'Your info'
  let btn_type = 'Next step'
  let desc = 'please provide your name,email and phone number'

  const [form_data, setFormData] = useState({
    name: '',
    email: '',
    number: ''
  });

  const handleChange = (e) => {
    // e.preventDefault();
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    // onFormDataChange(form_data); 
  };

  const testing = ()=>{
    handle_data(form_data)
  }

  return (
  <>
    <div className="flex flex-col   ">

      <Heading heading={heading} desc={desc} />
      <form action="#">
        <div className="flex flex-col mt-3">
          <label htmlFor="name">Name</label>
          <div className={`text-red-700 text-end ${visibilty}`}>this field is required</div>

          <input onChange={handleChange} name="name"value={form_data.name} className=" apperance-none focus:border-blue-100 border-2 border-[#d6d9e6] rounded-lg  p-2 " type="text" placeholder="e.g Stephen King " />
        </div>

        <div className="flex flex-col mt-3">
          <label htmlFor="email">email</label>
          <div className={`text-red-700 text-end ${visibilty2}`}>this field is required</div>
          <input onChange={handleChange} name="email" className="border-1 border-2 border-[#d6d9e6] rounded-lg focus:border-[#7D6A4D] p-2   " type="text" placeholder="e.g stephen@gmail.com"  value={form_data.email}/>
        </div>
        <div className="flex flex-col mt-3">
          <label htmlFor="number">Phone number</label>
          <div className={`text-red-700 text-end ${visibilty3}`}>this field is required</div>
          <input onChange={handleChange} name="number" c value={form_data.number} className="border-1 border-2 border-[#d6d9e6] rounded-lg focus:border-[#7D6A4D] p-2 " type="text" placeholder="e.g +1 234567890" />
        </div>

    <div className=" flex justify-end"><Btn btn_type={btn_type} btn_color={'#02295a'} click_btn={testing} btn_visibilty={'hidden'}  ></Btn>
   </div>
         
      </form>
    </div>
  </>)
}
export default Your_info;