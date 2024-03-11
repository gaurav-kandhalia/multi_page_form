import { useState } from 'react'
import Heading from './heading'
import Btn from './button'
const Finishing = ({click_btn,go_back})=>{
    let duration = ('yearly')
    let duration1 = ('per year')
    let heading = 'Finishing Up';
    let total_money = '$360/yr'
    let desc = 'Double check everything looks Ok before confirm'
  const btn_type = 'confirm'
    const btn_color = '#473DFF'
    return (
        <>
    <Heading heading={heading} desc={desc} />
    <div className=' bg-[#f0f6ff] mt-8'>
<Card1 heading={'Arcade '}  money={'$90/yr'} duration={duration} />
<div className='  py-2 mt-1 '>
    <div className='border-b-2 border-[#9699ab] w-[90%] mx-auto'></div>
</div>
<Card2 heading={'Online services'} money={'$120/yr'}visible={'hidden'} />
<Card2 heading={'Large Storage'} money={'$150/yr'}visible={'hidden'}/>

</div>

<div className='flex justify-between px-1 mt-2 '>
 <div>
 <p className='text-[#9699ab]'>Total{`(${duration1})`}</p>
 </div>
 <div><p className='font-[500] text-[16px] text-[#473dff]'>{total_money}</p></div>

</div>


<div className='mt-20'>
<Btn btn_type={btn_type} btn_color={btn_color} click_btn={click_btn} btn_visibilty={'block'} go_back={go_back}/>
</div>

        </>
    )
}

export default Finishing;


const Card1 = ({heading,money,visible,duration})=>{

          return (
            <>
              <div className='flex justify-between items-center px-1'>
            <div >
            <p className='font-[500] text-[#02295a]'>{heading}{`(${duration})`}</p>
             <p className={`text-[12px]  ${visible}`}>change</p>
            </div>
            <div>
             < p className='text-[12px] font-[500] text-[#02295a]'>{money}</p>
            </div>
         </div>
         </>
          )
}
const Card2 = ({heading,money,visible,duration})=>{

          return (
            <>
              <div className='flex justify-between mt-2 px-1'>
            <div className=''>
            <p className='text-[#9699ab] font-[500] '>{heading}</p>
            
            </div>
            <div className=''>
             <p className='text-[12px] font-[500]'>{money}</p>
            </div>
         </div>
         </>
          )
}