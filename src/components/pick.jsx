import Heading from './heading'
import Btn from './button'
import { useState } from 'react'
const Pick = ({click_btn,go_back})=>{
    let heading = 'Pick add-ons'
    let desc = 'Add ons help enhance your gaming exprience'
   let btn_type = 'Next step'
    return (
        <>
        <Heading heading={heading} desc={desc}/>
         <Card heading1={'Online Services'} money={'$51/m'} des={'Acess to multiplayer games'}/>
         <Card heading1={'Large storage'} money={'$52/m'} des={'Extra 1Tb of cloud save'}/>
         <Card heading1={'Customizabel Services'} money={'$52/m'} des={'Custom theme on your profile'}/>

      
         <Btn btn_type={btn_type} btn_color={'#02295a'} click_btn={click_btn} go_back={go_back} btn_visibilty={'block'}>h</Btn>


      
        </>
    )
}
const Card = ({heading1,money,des})=>{
    const[checked,setchecked] = useState(false);
   const [b_color,setcolor] = useState('');
   const[bg_color,setbg] = useState('')
    // const checking = ()=>{
    //   if(checked){
    //     setchecked(false);
    //     setcolor('none')
    //     setbg('none')
    //   }else{
    //     setchecked(true)
    //     setcolor('#473dff')
    //     setbg('#adbeff')
    //   }
 
    // }
    return (
        <>
         <div className={`border-2 flex justify-start mt-5 rounded-xl p-1 border-[${b_color}] bg-[${bg_color}]`} >
    <div className=' flex gap-2  items-center w-[85%]'>
    {/* <input type="checkbox" checked={checked} className='' onClick={checking} /> */}
    {/* <input type="checkbox" checked={checked}  /> */}
    <div>
    <p className='text-[12px] font-[700] text-[#0E2549]'>{heading1}</p>
    <p className='text-[12px] font-[400] text-[#A1A1AB]'>{des}</p>

    </div>
       </div>
    <div className='flex justify-center items-center'>
        <p className='text-[12px] font-[500] text-[#473dff]'>{money}</p>
    </div>
    <div>
       
    </div>
            </div>
        </>
    )
   
}
export default Pick;