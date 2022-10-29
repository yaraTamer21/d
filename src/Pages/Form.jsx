import React, { useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom'

import { toast } from 'react-toastify'

import AddForm from './AddForm'


const Increment = () => {
    return <AddForm />
}
const inials={
    name:"",
    numbermadant:"",
    numberbox:"",
    region:"",
    nationalid1:"",
    nationalid2:"",
    phone:"",
    fullname:"",
    states:"",
    claess:"",
    certifcation:""
}
const Form = () => {
    const [list, setList] = useState([]);
    const [form,setForm]=useState(inials);
    const {name,numberbox,numbermadant,nationalid1,nationalid2,region,phone,fullname,states,claess,certifcation}=form;
    const history=useHistory()
    
    const Add = () => {
        setList([...list, <Increment />])
    };


     const handleData=(e)=>{
        const {value,name}=e.target;
        setForm({...form,[name]:value})

     }
   console.log(form)
    const HandleSubmit=(e)=>{
     e.preventDefault();
       if(name==="" ||numbermadant===""||numberbox===""||nationalid1===""||nationalid2===""||region==="" ||fullname===""||states===""||claess===""||certifcation===""){

        toast.error("pleas enter all fields");

       }
       else{
        toast.success("you are registered successfull :)")
        setForm(inials);
         history.push("/success")
       }
    }

    

    
    return (
        <>
            
            <div className="form m-auto col-md-4 px-5 py-5">
            <div className='bg-primary d-flex align-items-center  mb-3 justify-content-end py-1'>
                <NavLink  to='/'>
                <i class="fa-solid fa-chevron-left ps-3 mt-2 text-white "></i>

                </NavLink>
             </div>
                <h2 className='text-primary'>بيانات ولي الامر (  المساهم  )</h2>
                <form onSubmit={HandleSubmit} className='my-4'>
                    <input name='name' value={name||""} onChange={handleData} type='text' className="py-3 form-control" placeHolder="الاسم"  />
                    <input  name='numbermadant' value={numbermadant||""} onChange={handleData} type='number' className="py-3 form-control mt-4" placeHolder="رقم المدني" />
                    <input name='numberbox' value={numberbox||""} onChange={handleData} type='number' className="py-3 form-control mt-4" placeHolder="رقم الصندوق" />

                    <div>
                        <h3 className='mt-3 text-primary'>المنطقة</h3>

                        <div className='row'>
                            <div className="col-6">
                                <div  className='d-flex align-items-center' style={{ width: "fit-content" }}>
                                    <input  name="region"  onChange={handleData} value="الروضة" type="radio" className='mb-0'  />
                                    <label class="container fs-5 fw-bolder text-primary ">الروضة</label>

                                </div>
                            </div>

                            <div className="col-6">

                                <div  className='d-flex align-items-center' style={{ width: "fit-content" }}>
                                    <input name="region" value="الحولي" onChange={handleData} type="radio" className='mb-0'  />
                                    <label class="container fs-5 fw-bolder text-primary">حولي</label>

                                </div>
                            </div>

                        </div>
                    </div>


                    <div className='mt-5'>
                        <h3 className='mt-3 text-primary'>صوره البطاقة المدنية</h3>

                        <div className='row'>
                            <div className="col-6">
                                <div className='d-flex align-items-center' style={{ width: "fit-content" }}>
                                    <div className="parent-images ">
                                        <div className="child-image ">
                                            <img src='./images/image (1) 2.png' />
                                        </div>
                                        <input name='nationalid1' onChange={handleData} value={nationalid1}     type="file" />

                                    </div>

                                </div>
                                <p className='text-muted mt-2'>الصوره الاماميه</p>
                            </div>

                            <div className="col-6">
                                <div className='d-flex align-items-center' style={{ width: "fit-content" }}>
                                    <div className="parent-images ">
                                        <div className="child-image ">
                                            <img src='./images/image (1) 2.png' />
                                        </div>
                                        <input name='nationalid2' onChange={handleData} value={nationalid2} type="file" />

                                    </div>

                                </div>
                                <p className='text-muted mt-2'>الصوره الخلفيه</p>
                            </div>

                        </div>
                    </div>


                    <div className='my-5'>
                        <input  name='phone' onChange={handleData} value={phone} type='number' className="py-3 form-control mt-4" placeHolder="الهاتف" />

                    </div>
                    <hr />
                    <div className='my-5'>
                        <h3 className='text-primary'>بيانات الابناء  المتفوقين والفائيقات</h3>
                        <input name='fullname' onChange={handleData} value={fullname}  type='text' className="py-3 form-control mt-4" placeHolder="الاسم الثلاثي" />

                    </div>


                    <div>
                        <h3 className='text-primary mb-3'>المرحلة الدراسية 2021 - 2021  ( السابقة )</h3>
                        <div className='d-flex align-items-center mb-3' style={{ width: "fit-content" }}>
                            <input name="states" value="ابتدائي" onChange={handleData} type="radio" className='mb-0' />
                            <label class="container fs-5 fw-bolder text-primary">ابتدائي </label>

                        </div>


                        <div className='d-flex align-items-center mb-3' style={{ width: "fit-content" }}>
                            <input name="states" value="متوسظ" onChange={handleData} type="radio" className='mb-0' />
                            <label class="container fs-5 fw-bolder text-primary">متوسظ</label>

                        </div>


                        <div className='d-flex align-items-center mb-3' style={{ width: "fit-content" }}>
                            <input  type="radio" className='mb-0' name="states" value="ثانوي" onChange={handleData} />
                            <label class="container fs-5 fw-bolder text-primary">ثانوي</label>

                        </div>


                        <div className='d-flex align-items-center mb-3' style={{ width: "fit-content" }}>
                            <input type="radio" className='mb-0' name="states" value="دبلوم" onChange={handleData} />
                            <label class="container fs-5 fw-bolder text-primary">دبلوم</label>

                        </div>

                        <div className='d-flex align-items-center' style={{ width: "fit-content" }}>
                            <input type="radio" className='mb-0' name="states" value="درسات عليا" onChange={handleData} />
                            <label class="container fs-5 fw-bolder text-primary">الجامعه والدرسات العليا</label>

                        </div>
                    </div>


                    <div className='my-5'>
                        <h3 className='text-primary'>الصف الدراسي 2021 - 2021  ( السابقة )</h3>
                        <select value={claess} name="claess" onChange={handleData} class="form-select mt-4 py-3" aria-label="Default select example">
                            <option selected>يرجي  اختيار  الفصل الدراسي</option>
                            <option value="1">الاول</option>
                            <option value="2">التاني </option>
                        </select>
                    </div>


                    <div className='my-5'>
                        <h3 className='text-primary'>صورة الشهادة الدراسية للعام الدراسي 2021-2022</h3>
                        <div >
                            <div className='d-flex  align-items-center'>
                                <div className="parent-images ">
                                    <div className="child-image ">
                                        <img src='./images/image (1) 2.png' />
                                    </div>
                                    <input name='certifcation' value={certifcation} onChange={handleData} type="file" />

                                </div>

                            </div>
                            <p className='text-muted mt-2 '> صوره الشهاده</p>
                        </div>
                    </div>



                    <div className='d-flex text-primary align-items-center justify-content-between' >
                        <h5 className="add-text">اضافة فائق / فائقة اخرى</h5>

                        <h2 className='bg-primary plus_icon    text-white rounded-circle ' onClick={Add}>
                            <span className='fs-3 cursor-pointer' >+</span>
                        </h2>

                    </div>


                     <div className='text-center mt-4'>
                     <button type='submit' className='btn btn-primary mt-3 w-100 px-5 '>ارسال</button>

                     </div>
                </form>

            </div>
            {list}
        </>
    )
}

export default Form