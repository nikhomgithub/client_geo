import React from 'react'

import {RiLogoutBoxRLine,RiLogoutCircleRLine} from 'react-icons/ri'
import {FaHome,FaWarehouse,FaUserEdit,FaUsers,FaChartLine,FaCalculator} from 'react-icons/fa';
import {MdSettingsApplications,MdShoppingCart} from 'react-icons/md';
import {Link} from 'react-router-dom';
import {MainContext} from '../../context/MainContext';

import './Navbar.css';

export default function Navbar() {
 
    const refHome=React.createRef()
    const refCalculator=React.createRef()

    return (
    <div className="navFrame flex-center-center jc-space-between">

            <div id="1" className="h-100" 
                 style={{
                         position:"absolute",top:"0",left:"0",
                         width:"87%",display:"flex",alignItems:"center",
                         justifyContent:"start",overflowX:"auto",overflowY:"hidden"}}>
        
                <div className="navLink" onClick={e=>refHome.current.click()}> 
                    <div className="navIconBox">
                        <FaHome className="navIcon"/>
                    </div>
                    <div className="navTextBox">
                        <p className="navText">หน้าหลัก</p>
                    </div>
                </div>
               
                <div className="navLink" onClick={e=>refCalculator.current.click()}> 
                    <div className="navIconBox">
                        <FaCalculator className="navIcon"/>
                    </div>
                    <div className="navTextBox">
                        <p className="navText">CNC</p>
                    </div>
                </div>
            </div>    


            <div className="d-none">
                <Link ref={refHome} to="/home"/>
                <Link ref={refCalculator} to="/geo/calculator"/>

            </div>
    </div>
        //renderNavbar()
    )

}






 /*
import {Link} from 'react-router-dom';
<Link ref={refTransactionLog} to="/pagetransactionlog"/>


    const checkscroll=()=>{
        let stopY= 0;
        let currentY=0;

        //true="down", false="up"
        let movedown = true;
        let premovedown = true;

        //คอยฟังการขยับของ window จากการ scroll
        window.addEventListener("scroll", (e)=>{    
            //เมื่อหน้าจอมีการขยับในแนวดิ่ง 
            currentY = window.pageYOffset;
                //ถ้าค่า y ที่ได้ต่ำกว่า ค่าเดิม 5 แสดงว่า มีการเคลื่อนที่ลง
                if(currentY>(stopY+5)){
                    stopY=currentY; 
                    movedown=true;
                }
                //ถ้าค่า y ที่ได้น้อยกว่า ค่าเดิม 5 แสดงว่า มีการเคลื่อนที่ขึ้น
                else if(currentY<(stopY-5)){
                    stopY=currentY;
                    movedown=false;
                }
                //ค่าระหว่าง +5 และ -5 ไม่นำมาพิจารณาเพราะอาจเกิด bouncing
                //ดังนั้นค่า movedown เหมือนเดิม
              
                //เราจะจำกัดการเปลี่ยนค่า showNave ตามเงื่อนไขที่กำหนดไว้เท่านั้น
                //ถ้ามีการเปลี่ยนแปลงทิศทางการเคลื่อนที่ 
                //และการเคลื่อนที่ปัจจบัน เป็น การเคลื่อนที่ลง ไม่ต้องแสดง navbar
                //แต่ถ้ากำลังเคลื่อนที่ขึ้น ให้แสดง navbar 
                if(movedown!=premovedown){
                    //console.log('change')
                    if(movedown){
                        //setShowNav(false);
                    }
                    else{
                        //setShowNav(true)
                    }
                    //ทำการบันทึกการเคลื่อนที่ของรอบนี้ไว้เทียบกับของรอบหน้า
                    premovedown=movedown
                }
        })
    }

    
    const showMouseCoor=()=>{
        window.addEventListener("mousemove", (e)=>{    
            console.log(`x:${e.pageX}, y:${e.pageY}`)
        })
    }
    showMouseCoor()
    */
