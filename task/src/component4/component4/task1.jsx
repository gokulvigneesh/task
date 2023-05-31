import React from 'react'
import "./web.css"
import image from './asset/image/logo.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser ,faFileInvoice,faWallet,faCog, faQuestionCircle, faSignOutAlt,faFileAlt,faPaperPlane,faHdd,faCalendar} from '@fortawesome/free-solid-svg-icons';
import ChartComponent from './chartcomponents.jsx'
import DonutChart from './piechart.jsx' 


function Website() {
  return (
    <div>
         <div className='container'>
            <div className='header'>
                <h2 className='headtext'>DashBoard<br/>
                  Design</h2>

            </div>
            <div className='vector'>
              <div >
                <img className='logo1' src="https://static.vecteezy.com/system/resources/previews/018/930/588/non_2x/dribble-logo-dribbble-icon-transparent-free-png.png" alt="" />
              </div>
            </div>
            <div className='link'>
                  <a href='/#'>dribbble.com/geekyv30</a>
                </div>
                
                <div className='content'>
                  <div className='content1'>
                      <h3>Dashboard</h3>
                       <p>Information about your current plan and usages</p>   
                  </div>
                  <div className='content2'>
                     <div className='conlogo'>
                     <FontAwesomeIcon className='doclogo' icon={faFileAlt} size="1x" />
                     </div>
                     <div className='pro'>
                      <span>Profile</span>
                      <p>3</p>
                     </div>
                     <hr className='ruler1'/>

                     <div className='conlogo1'>
                     <FontAwesomeIcon className='reqlogo' icon={faPaperPlane} size="1x" />
                     </div>
                     <div className='req'>
                      <span>Request</span>
                      <p>3456</p>
                     </div>
                     <hr className='ruler2'/>

                     <div className='conlogo2'>
                     <FontAwesomeIcon className='userlogo' icon={faUser} size="1x" />
                     </div>
                     <div className='user'>
                      <span>Users</span>
                      <p>3</p>
                     </div>
                     <hr className='ruler3'/>

                     <div className='conlogo3'>
                     <FontAwesomeIcon className='stologo' icon={faHdd} size="1x" />
                     </div>
                     <div className='store'>
                      <span>Storage</span>
                      <p>128/500 GB</p>
                     </div>

                  </div>
                  <div className='content3'>
                    <ChartComponent />
                  </div>
                  <div className='content4'>
                    <div className='tex'>
                      <h5>P&L</h5>
                      <p>Total profit growth of 25%</p>
                    </div>
                    <div className='li'>
                    <ul>
                      <li className='red'>Re-Used APIs</li>
                      <li className='blue'>Webhooks</li>
                      <li className='grey'>API call</li>
                    </ul>
                    </div>
                    
                    <div className='boxes'>
                    <DonutChart/>
                    </div>
                    
                   </div>

                   < div className='content5'>
                   <div className='tex1'>
                      <h5>Current Plans</h5>
                      <p className='tex2'>Information and usages of your current plan</p>
                      <div className='texlogo'>
                     <FontAwesomeIcon className='userlogo1' icon={faUser} size="1x" />
                     </div>
                     <div className='texx'>
                      <p>Team Plan</p>
                      <h4>$99/mo</h4>

                     </div>
                     <h6 className='texp'>Project</h6>
                     <hr className='hr'>
                     </hr>
                     <hr className='hr1'></hr>

                     <h6 className='usertx'>User</h6>
                     <hr className='hr2'>
                     </hr>
                     <hr className='hr3'></hr>
                    </div>

                     
                  </div>

                  <div className='content6'>
                    <h4 className='act'>Activity</h4>
                    <di className='circle'>
                    <FontAwesomeIcon className='circle1' icon={faUser} size="1x" />
                    </di>
                    <div className='para'>
                      <h5>James Anderson</h5>
                         <p>
                             Called “Books-API” with <br/>the JavaScript <br/>webhook and commented. </p>
                    </div>
                    <hr className='hrr'></hr>
                    <di className='circle2'>
                    <FontAwesomeIcon className='circle3' icon={faUser} size="1x" />
                    </di>
                    <div className='para1'>
                      <h5>Vector Sam</h5>
                         <p>
                             Called “Books-API” with <br/>the JavaScript <br/>webhook and commented. </p>
                    </div>
                  </div>

                  

                   <div className='box1'>
                    <div className='logobox'>
                    <img className='logo2' src={image} alt="" />
                    </div>
                      <div className='list'>
                        <h6><FontAwesomeIcon icon={faUser} /> Profile</h6><br/><br/>
                        <h6 className='bill'><FontAwesomeIcon  icon={faFileInvoice} /> Billing</h6><br/><br/>
                        <h6><FontAwesomeIcon icon={faWallet} /> Invoices</h6><br/><br/><hr className='ruler'></hr>
                        <h6><FontAwesomeIcon icon={faCog} /> Setting</h6><br/><br/>
                        <h6><FontAwesomeIcon icon={faQuestionCircle} /> Help</h6><br/><br/>
                        <h6><FontAwesomeIcon icon={faSignOutAlt} /> Logout</h6><br/><br/>

                      </div>
                      <div className='content7'>
                     <div className='boxes3'>
                     <FontAwesomeIcon className='canlogo' icon={faCalendar} size="1x"/> Friday,19 May 2023 
                     </div>
                  </div>
                     
                    </div>
                    
                   </div> 
                   
         </div>
    </div>
   
  )
}

export default Website
