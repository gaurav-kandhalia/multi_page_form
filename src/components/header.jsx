import Your_info from "./your_info";
import Plan from './plan'
import Pick from './pick'
import Finishing  from "./finishing";
import Thanks from './Thanks'

import { useState } from "react";

const Header = () => {
   const [count,setcount] = useState(1)
   const [visibilty,setvisibility] = useState('hidden');
   const [visibilty2,setvisibility2] = useState('hidden');
   const [visibilty3,setvisibility3] = useState('hidden');

  
    const handle_data  = (data) => {

      if(click_btn(data))
         setcount(count+1)
      
      else{
         alert("Error")
      }
   
      };

      

const click_btn = (data,e)=>{
   e.preventDefault();
 
   if(data.email==''){
      setvisibility2(()=>{
         console.log('email')
         return "block"
      })
      console.log("email")
      return false;

      }
      if(data.name == ''){

      setvisibility(()=>{
         console.log("name")
         return "block"
      })
return false;
      }
      if(data.number == ''){
         setvisibility3(()=>{
        
            console.log("email")
            return "block"
         })
         console.log("number")
         return false;
     
 }

return true


}

const go_back = ()=>{
   setcount(count-1);

}

   return (
      <>
         <section className="min-h-screen    flex justify-center items-center bg-[#f0f6ff] font-ubuntu">
            <div className="p-2 flex border-2 bg-white border-black min-w-[50%] gap-6 " >
               <div className=" bg-[url('./assets/desktop_sidebar.svg')] bg-cover bg-center p-5 rounded-xl w-[35%]">
                  < div >
                     <div className="flex  justify-center items-center mt-3 gap-2">
                        <div className="border-2 border-white w-8 h-8 rounded-full flex justify-center items-center "> <p>1</p>
                        </div>
                        <div className=" text-[12px] leading-tight text-[#9896FE] font-[400]" ><p> STEP 1</p>
                           <p className="text-white leading-tight text-[16px] font-[500]">YOUR INFO</p></div>
                     </div>
                     <div className="flex  justify-center items-center mt-3 gap-2">
                        <div className="border-2 border-white w-8 h-8 rounded-full flex justify-center items-center "> <p>2</p>
                        </div>
                        <div className=" text-[12px] leading-tight text-[#9896FE] font-[400]" ><p> STEP 1</p>
                           <p className="text-white leading-tight text-[16px] font-[500]">YOUR INFO</p></div>
                     </div>
                 
                     <div className="flex   justify-center items-center mt-3 gap-2">
                        <div className="border-2 border-white w-8 h-8  rounded-full flex justify-center items-center "> <p>3</p>
                        </div>
                        <div className=" leading-tight  "><p className="text-[12px] text-[#9896FE]">STEP 3</p>
                           <p className="text-white">ADD ONES</p></div>
                     </div>
                     <div className="flex  justify-center items-center mt-3 gap-2">
                        <div className="border-2 border-white w-8 h-8  rounded-full flex justify-center items-center  "> <p>4</p>
                        </div>
                        <div className="  leading-tight "><p className="text-[12px] text-[#9896FE]">STEP 4</p>
                           <p className="text-white">SUMMARY</p></div>
                     </div>

                  </div>

               </div>
               <div className="border-2 border-black w-[65%] px-10 pt-8 pb-4 ml-2">
              
                      {
                        count==1 ? <Your_info handle={handle_data } click_btn={click_btn} visibilty={visibilty} visibilty2={visibilty2} visibilty3={visibilty3} /> : count==2 ? <Plan click_btn={click_btn} go_back={go_back}/>: 
                        count==3 ? <Pick click_btn={click_btn} go_back={go_back}/> : count==4 ? <Finishing click_btn={click_btn} go_back={go_back}/>: null
                      }
               </div>
            </div>
         </section>
      </>
   )
}

export default Header;