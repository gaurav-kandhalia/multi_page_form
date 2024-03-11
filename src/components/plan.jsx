import { useState } from "react"
import user from '../assets/icon/user.svg'
import game from '../assets/icon/game.svg'
import pro from '../assets/icon/pro.svg'
import Btn from './button'
import Heading from './heading'
const Plan = ({click_btn,go_back}) => {


  let heading = 'Select Your Plan'
  let desc = 'You have the option of monthly or yearly billing'
  let icon_name = 'arcade'
  let money = '$9/m'
  let btn_type = 'Next step'
  const [visible, setvisible] = useState('hidden')
  const [visible1, setvisible1] = useState('block')
  const [btn, setbtn] = useState('')
  const [month, setmonth] = useState(true)
  const [year, setyear] = useState(false)

  const  move_btn = ( ) => {
    console.log('monthly selected')
    if (!year) {
      setbtn('end');
      setmonth(false);
      setyear(true);
      setvisible('block')
      setvisible1('hidden')

    } else {
      setbtn('start')
      setyear(false);
      setvisible('hidden')
      setvisible1('block')


    }

  }
  return (
    <>

<Heading heading={heading} desc={desc}/>
      <div className=" grid grid-cols-3 gap-3 mt-6">
      
        <Card visible={visible} visible1={visible1} svg={user} icon_name={icon_name} money={'$9/m'} />
        <Card visible={visible} visible1={visible1} svg={game} icon_name={'Advanced'} money={'$12/m'}/>
        <Card visible={visible} visible1={visible1} svg={pro} icon_name={'Pro'} money={'$15/m'}/>

      </div>

      <div className="border-2 flex gap-6 p-3 justify-center mt-6 rounded-xl bg-[#efeff1]">
        <p className="font-[500]">Monthly</p>
        <div className={`border-2 w-12 h-6 p-1 rounded-full bg-[#03295B] flex transition-all duration-300 ease-in justify-${btn}`}><span onClick={move_btn} className="text-white bg-white text-[1px] w-[13px] h-[14px] rounded-full">h</span></div>
        <p className="font-[500]">Yearly</p>
         
      </div>

   
      <Btn btn_type={btn_type} btn_color={'#02295a'} click_btn={click_btn}btn_visibilty={'block'} go_back={go_back}></Btn>


    </>
  )
}
const Card = ({visible,visible1,svg,icon_name,money}) => {
  
  return <div className="border-2 rounded-lg min-h-[100px] p-4">
    <div className="">
     <img src={svg} alt="" />
    </div>
    <div className=" mt-6">
      <p className="text-[#142C49] font-[500]">{icon_name}</p>
      <p className={`text-[#9F9FAA] ${visible1}`} >{money}</p>
      <p className={`text-[#9F9FAA]  ${visible}`} >$150/yr</p>
      <p className={`text-[12px] ${visible} text-nowrap mt-2`}>2 months free</p>
    </div>
  </div>
}


export default Plan;