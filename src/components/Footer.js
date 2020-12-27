import React from 'react'
import {ReactComponent as Hrd} from '../assets/Group 2563.svg';
import {ReactComponent as Msm} from '../assets/Group 2564.svg';



import { FaFacebook ,FaInstagram ,FaYoutube ,FaTwitter , FaPhone ,FaMapMarked , FaWhatsapp , FaClock ,FaEnvelopeOpenText} from 'react-icons/fa'
function Footer() {
    return (
       <div className="Footer">
           <div className="Footer-top">
               <div className="item">
                   <h5>Powered By</h5>
                   <Hrd/>
                   <Msm/>

               </div>
               <div className="item ">
               <h5>تسجيل دخول الطالب</h5>
                   <input type="text" />
                   <input type="text" />
                   <button type="submit"> ارسال</button>
               </div>
               <div className="item">
                   <h5>موقع المكتب</h5>
                   <h6> مبنى جمعية المعلمين الدسمة بلوك 3 سالم A1 العميان الكويت <span><FaMapMarked/></span> </h6>
                   <h6>+96522064446  <span> <FaPhone/></span> </h6>
                   <h6>  +96563707676 <span><FaWhatsapp/></span></h6>
                   <h6> +96563707676 <span><FaEnvelopeOpenText/></span> </h6>
                   <h4> 08:00 مساء 09:30 صباحا <span><FaClock/></span> </h4>

               </div>
               <div></div>
               <div></div>
           </div>
           <div className="Footer-bottom">
               <ul>
                   <li><a herf='#'> <FaFacebook/> </a></li>
                   <li><a herf='#'><FaInstagram/> </a></li>
                   <li><a herf='#'><FaTwitter/></a></li>
                   <li><a herf='#'><FaYoutube/></a></li>
               </ul>
               <span>Copyright 2020 MFC-Kuwait.com. Designed By One Solution</span>
           </div>
       </div>
    )
}

export default Footer
