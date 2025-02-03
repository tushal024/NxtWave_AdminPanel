import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { deleteDataUser, getDataUser } from '../Redux/Reducers/LoginReducer/action'
import Skeleton from './Skeleton'

function UserData() {

    var dispatch = useDispatch()
    var [view, setview] = useState([])

    var navigat = useNavigate()

    useEffect(() => {
        dispatch(getDataUser)
    }, [])

    var dataa = useSelector(st => st.loginReducer)

    console.log(dataa.isLoding);

    function handelDelet(delId){
        console.log(delId);
        dispatch(deleteDataUser(delId))
      }
      
    function handelEdite(editeId){
        // console.log(editeId);
        localStorage.setItem("userEditId",editeId)
        localStorage.setItem("chaki",true)

        // alert("ALERT")
        navigat("/user")
      }

      const [isModalOpen, setIsModalOpen] = useState(false);

      const openModal = (e) => {
          //    setview([e]);
          console.log(e);
          let ss = dataa.user.filter((el) => {
  
              if (el.id == e) {
  
                  return el
              }
          })
  
          setview(ss)
          console.log(view);
  
  
  
          setIsModalOpen(true);
      }
      const closeModal = () => setIsModalOpen(false);
  

      
  return (
    <div className='w-[100%] h-[700px]'>
            <div   id='nnj' className='rounded-[10px] w-[100%]  overflow-y-auto'>
                <div className='w-[100%] h-[75px] flex items-center border-[#808080]  justify-between p-[20px] border-t border-b '>
                    <h1 className='text-[25px] font-bold '>User Details</h1>
                            <button onClick={()=>{navigat("/signup")}} className='sidebtn me-[10px] '>Add Product</button>
                </div>
                <div className='p-[20px] w-[1500px] 2xl:w-[100%] '>
                    <div className=' rounded-[10px]   bg-[#19191C]  w-[100%] h-[80px]  border-[#808080] justify-between p-[20px] flex'>
                        <div className='w-[10%] h-[100%] flex items-center justify-center   '>
                            <h1 className='text-[18px] font-medium'>User Name</h1>
                        </div>
                        <div className='w-[18%] h-[100%] flex items-center justify-center'>
                            <h1 className='text-[18px] font-medium'>User Email</h1>
                        </div>
                        <div className='w-[15%] h-[100%] flex items-center justify-center'>
                            <h1 className='text-[18px] font-medium'>User Password</h1>
                        </div>
                        <div className='w-[10%] h-[100%] flex items-center justify-center'>
                            <h1 className='text-[18px] font-medium'>Edit</h1>
                        </div>
                        <div className='w-[10%] h-[100%] flex items-center justify-center'>
                            <h1 className='text-[18px] font-medium'>Delete</h1>
                        </div>
                        <div className='w-[12%] h-[100%] flex items-center justify-center'>
                            <h1 className='text-[18px] font-medium'>More</h1>
                        </div>
                    </div>

                    {/* cart  */}
                    <div id='derr'  className='scroll-smooth   overflow-auto  h-[500px] ' >
                    {dataa.isLoding?<><Skeleton/><Skeleton/><Skeleton/></> :
                       dataa.user.map((el) => {
                            return <div key={el.id}  id='koko' className='w-[100%]  rounded-[10px] mt-[5px] h-[80px]  border-[#808080] border-b  justify-between p-[20px] flex'>
                                <div className='w-[10%] h-[100%] flex items-center justify-center'>
                                    <h1 className='text-[18px]'>{el.user}</h1>
                                </div>
                                <div className='w-[18%] h-[100%] flex items-center justify-center'>
                                    <h1 className='text-[18px]'>{el.email}</h1>
                                </div>
                                <div className='w-[15%] h-[100%]  flex items-center justify-center'>
                                    <h1 className='text-[18px]'>₹{el.pass}</h1>
                                </div>
                                <div className='w-[10%] h-[100%] flex items-center justify-center'>
                                    {/* <Link to={`/product/${el.id}`}>  */}
                                        <button id='btn1' onClick={()=>handelEdite(el.id)}>Edite</button>
                                    {/* </Link> */}
                                </div>
                                <div className='w-[10%] h-[100%]  flex items-center justify-center'>
                                    <button id='btn2'onClick={()=>handelDelet(el.id)}>Delete</button>
                                </div>
                                <div className='w-[12%] h-[100%] flex items-center justify-center'>
                                    <h1 onClick={() => openModal(el.id)} className='text-[18px] text-[blue] font-medium cursor-pointer underline underline-offset-8 '>View More</h1>
                                </div>
                            </div>
                        })
                    }
                    </div>
                </div>
            </div>
            {isModalOpen && (
                <div style={modalBackdropStyle}>



                    <div className='w-[450px] bg-[#171717] h-[450px] flex flex-wrap justify-center items-evenly border-1'>
                        {/* <img src={view[0].URL} alt="" className='absolute mt-[1%] mb-[1%]  w-[250px] h-[230px] z-30 ' /> */}
                        <div className='absolute mt-[1%] mb-[1%] mt-[50px]  w-[160px] h-[160px] z-30 border flex-wrap justify-center items-center rounded-[50%]'>
                            <p className='text-[100px] uppercase text-center'>{view[0].email.slice(0,2)}</p>
                        </div>
                        <div className='w-[100%] mt-[50%] h-[5%]  flex items-center justify-center   z-20 '>
                           <p className=''> {view[0].user} </p>
                        </div>
                        <div className='w-[100%] ms-3  h-[5%] flex items-center justify-center'>
                            {view[0].email}
                        </div>
                        <div className='w-[59%]  flex items-center justify-center text-center mb-[10px] ' >
                            <p>

                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, dolores.
                            </p>
                        </div>
                        <div className='w-[50%] h-[5%]   flex items-center justify-center'>
                            {/* <img src="\Assets\rating.png" alt="" className='w-[45%]' /> */}
                            <i class="   text-[gold] fa-solid fa-star"></i>
                            <i class="   text-[gold] fa-solid fa-star"></i>
                            <i class="   text-[gold] fa-solid fa-star"></i>
                            <i class="   text-[gold] fa-solid fa-star"></i>
                            <i class="   text-[gold] fa-solid fa-star-half-stroke"></i>
                        </div>
                    </div>
                    <div style={modalStyle}>

                        {/* Close button */}
                        <button onClick={closeModal} style={closeButtonStyle}>X</button>
                    </div>
                </div>
            )}
        </div>

  )
}

const modalBackdropStyle = {
    position: 'fixed',
    width: "100%",
    top: 0,
    left: 0,
    color: "white",
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.47)',
    color: "white",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
};

const modalStyle = {
    backgroundColor: '',
    padding: '0px',

    border: "1px solid red",
    borderRadius: '8px',
    width: '1px',
    textAlign: 'center',
    position: 'relative',
};

const closeButtonStyle = {
    position: 'absolute',
    top: '-200px',
    right: '20px',
    background: 'transparent',
    border: 'none',
    fontSize: '20px',
    cursor: 'pointer',
};

export default UserData