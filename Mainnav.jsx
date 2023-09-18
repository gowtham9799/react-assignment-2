import React from 'react';
import im1 from "../images/im1.jpg";
import im2 from "../images/im2.jpeg";
import im3 from "../images/im3.jpg";
import im4 from "../images/im4.jpeg";
import im5 from "../images/im5.jpg";
import im6 from "../images/im6.jpg";
import im7 from "../images/im7.jpeg";
import im8 from "../images/im8.png";
import im9 from "../images/im9.jpg";
import im10 from "../images/im10.png";
import im11 from "../images/im11.jpg";
import im12 from "../images/im12.jpg";
import im13 from "../images/im13.jpg";
import im14 from "../images/im14.jpg";
import { GrMail } from 'react-icons/gr';
import { FaFilter } from 'react-icons/fa';
import { MdOutlineLocationOn } from 'react-icons/md';
import { AiOutlineTwitter } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import { BiLogoLinkedin } from 'react-icons/bi';
import { FaTelegramPlane } from 'react-icons/fa';
function Mainnav() {
  return (
    <container-fluid className="nav" style={{}}>
    <div className="navbar" style={{display: 'flex', backgroundColor: 'white', width: '100%', height: '80px'}}>
      <div>
        <h1 style={{width: '130px', fontSize: '32px', color: '#0084ff', paddingLeft: '80px', paddingTop: '5px',marginBottom:'0px',marginTop:'0px'}}><a href="./intex.html">EDYODA</a></h1>
        <h6 style={{fontWeight: 500, fontStyle: 'italic', font: 'raleway', margin: 0, paddingLeft: '110px', paddingTop: '1px', fontSize: '20px'}}>stories</h6>
      </div>
      <div className="dropdown" style={{marginLeft: '50px', marginTop: '15px'}}>
        <button onclick="myFunction()" className="dropbtn">Explore Categories<i style={{paddingLeft: '8px', color: 'black', width: '15px', height: '15px'}} className="fa-sharp fa-solid fa-caret-down" /></button>
      </div>
      <div>
        <h1 className='navh1'>EdYoda is a learning and knowledge <br/>
sharing platform for techies</h1>
      </div>
     <button className='navbutt' >Go to my website</button>
    </div>



    <div style={{display:'flex',backgroundColor:' #f2f6ff'}}>
       
 <div style={{marginTop:'125px',marginLeft:'200px'}}>
 <h1 className='homepage1'>Trending posts</h1>
    <img style={{height:"500px"}} src='https://edyoda.s3.amazonaws.com/media/blog-images/ace-soft-skills-small.jpg'></img>
</div>
<div style={{marginTop:'125px',marginLeft:'20px'}}>
    <img  style={{height:'248px',marginTop:'85px'}} src='https://edyoda.s3.amazonaws.com/media/blog-images/aptitude-small.jpg'></img>
    <img style={{height:'248px',width:'374px'}} src='https://edyoda.s3.amazonaws.com/media/blog-images/learn_cloud_computing.jpeg' ></img>
</div>
 </div>

 <div style={{ backgroundColor: ' #f2f6ff', paddingTop: '120px'}}>
     <h3 className='homepage2'>Latest posts</h3>
          <h1 style={{width: '40px', fontSize: '32px', color: '#0084ff', paddingLeft: '170px',display:'inline-block'}}> <div><FaFilter/></div> </h1> 
          <h1 style={{fontSize: '14px', fontWeight: 600, paddingTop: '0px' ,paddingLeft:'0px',display:'inline-block'}}>Filter By Category</h1>
        
        <div className style={{display: 'flex', backgroundColor: ' #f2f6ff', width: '100%', height: '120px', paddingTop: '10px'}}>
          <div className="dropdown" style={{marginLeft: '170px', marginTop: '15px'}}>
            <a className="fil" href="./intex.html">All</a>
            <a className="fil" href="./nav1.html">Artificial Intelligence</a>
            <a className="fil" href="./nav2.html">Cloud Computing</a>
            <a className="fil" href="./nav3.html">Devops</a>
            <a className="fil" href="./nav4.html">Programming Languages</a>
            <a className="fil" href="./nav5.html">Mobile Application Development</a>
            <a className="fil fillchange" href="./nav6.html">Technology And Tools</a><br/>
            <div style={{marginTop:"30px"}}>
            <a className="fil fillchange" href="./nav7.html">Get a job in a Tech Company</a>
            <a className="fill" href="./nav7.html">Others</a>
            </div>
          </div>
        </div>
        </div>


     
        <main id="container">
          <div className="card1">
            <figure className="cardImage">
              <img  src={im1} width="300px" height="200px" />
            </figure>
            <h1 className="cardTitle">
              Getting started with Artificial Intelligence
            </h1>
            <div style={{
      display: "flex",
     paddingLeft:'15px'
    }} >
<p class="cardPara1" > Arman Ahmed</p>
<p class="cardPara2" > |05 Jul 2019</p>
</div>
            <p className="cardPara">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, vitae
              recusandae? Quibusdam, assumenda eligendi! Enim nulla culpa, explicabo
              odio vitae accusantium in cumque assumenda dolorum repudiandae minima,
              asperiores reiciendis vel.
            </p>
          </div>

          <div className="card">
            <figure className="cardImage">
              <img width="300px" height="200px" src={im2} />
            </figure>
            <h1 className="cardTitle">
              Getting started with Artificial Intelligence
            </h1>
            <div style={{
      display: "flex",
     paddingLeft:'15px'
    }} >
<p class="cardPara1" > Arman Ahmed</p>
<p class="cardPara2" > |05 Jul 2019</p>
</div>
            <p className="cardPara">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, vitae
              recusandae? Quibusdam, assumenda eligendi! Enim nulla culpa, explicabo
              odio vitae accusantium in cumque assumenda dolorum repudiandae minima,
              asperiores reiciendis vel.
            </p>
          </div>

          <div className="card">
            <figure className="cardImage">
              <img src={im3} width={300} height={200} className="im1" />
            </figure>
            <h1 className="cardTitle">
              Amazon Web Services (AWS) Cloud Day
            </h1>
            <div style={{
      display: "flex",
     paddingLeft:'15px'
    }} >
<p class="cardPara1" > Arman Ahmed</p>
<p class="cardPara2" > |05 Jul 2019</p>
</div>
            <p className="cardPara">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, vitae
              recusandae? Quibusdam, assumenda eligendi! Enim nulla culpa, explicabo
              odio vitae accusantium in cumque assumenda dolorum repudiandae minima,
              asperiores reiciendis vel.
            </p>
          </div>

          <div className="card">
            <figure className="cardImage">
              <img src={im4} width={300} height={200} className="im1" />
            </figure>
            <h1 className="cardTitle">
              Learn cloud computing- an introduction
            </h1>
            <div style={{
      display: "flex",
     paddingLeft:'15px'
    }} >
<p class="cardPara1" > Arman Ahmed</p>
<p class="cardPara2" > |05 Jul 2019</p>
</div>
            <p className="cardPara">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, vitae
              recusandae? Quibusdam, assumenda eligendi! Enim nulla culpa, explicabo
              odio vitae accusantium in cumque assumenda dolorum repudiandae minima,
              asperiores reiciendis vel.
            </p>
          </div>

          <div className="card">
            <figure className="cardImage">
              <img src={im5} width={300} height={200} />
            </figure>
            <h1 className="cardTitle">
              From identity crisis to the Success Story
            </h1>
            <div style={{
      display: "flex",
     paddingLeft:'15px'
    }} >
<p class="cardPara1" > Arman Ahmed</p>
<p class="cardPara2" > |05 Jul 2019</p>
</div>
            <p className="cardPara">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, vitae
              recusandae? Quibusdam, assumenda eligendi! Enim nulla culpa, explicabo
              odio vitae accusantium in cumque assumenda dolorum repudiandae minima,
              asperiores reiciendis vel.
            </p>
          </div>

          <div className="card">
            <figure className="cardImage">
              <img src={im6} width={300} height={200} />
            </figure>
            <h1 className="cardTitle">
              Understanding DevOps holistic approach to the end-to-end
            </h1>
            <div style={{
      display: "flex",
     paddingLeft:'15px'
    }} >
<p class="cardPara1" > Arman Ahmed</p>
<p class="cardPara2" > |05 Jul 2019</p>
</div>

            <p className="cardPara">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, vitae
              recusandae? Quibusdam, assumenda eligendi! Enim nulla culpa, explicabo
              odio vitae accusantium in cumque assumenda dolorum repudiandae minima,
              asperiores reiciendis vel.
            </p>
          </div>
          <div className="card">
            <figure className="cardImage">
              <img src={im7} width={300} height={200} />
            </figure>
            <h1 className="cardTitle">
              Learn these Programming Languages in 2019
            </h1>
            <p className="cardPara">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, vitae
              recusandae? Quibusdam, assumenda eligendi! Enim nulla culpa, explicabo
              odio vitae accusantium in cumque assumenda dolorum repudiandae minima,
              asperiores reiciendis vel.
            </p>
          </div>

          <div className="card">
            <figure className="cardImage">
              <img src={im8} width={300} height={200} />
            </figure>
            <h1 className="cardTitle">
              A Primer on Python Programming Tutorial 
            </h1>
            <div style={{
      display: "flex",
     paddingLeft:'15px'
    }} >
<p class="cardPara1" > Arman Ahmed</p>
<p class="cardPara2" > |05 Jul 2019</p>
</div>
            <p className="cardPara">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, vitae
              recusandae? Quibusdam, assumenda eligendi! Enim nulla culpa, explicabo
              odio vitae accusantium in cumque assumenda dolorum repudiandae minima,
              asperiores reiciendis vel.
            </p>
          </div>

          <div className="card">
            <figure className="cardImage">
              <img src={im9} width={300} height={200} />
            </figure>
            <h1 className="cardTitle">
              Why you should accelerate your knowledge
            </h1>
            <div style={{
      display: "flex",
     paddingLeft:'15px'
    }} >
<p class="cardPara1" > Arman Ahmed</p>
<p class="cardPara2" > |05 Jul 2019</p>
</div>
            <p className="cardPara">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, vitae
              recusandae? Quibusdam, assumenda eligendi! Enim nulla culpa, explicabo
              odio vitae accusantium in cumque assumenda dolorum repudiandae minima,
              asperiores reiciendis vel.
            </p>
          </div>
          <div className="card">
            <figure className="cardImage">
              <img src={im10} width={300} height={200} />
            </figure>
            <h1 className="cardTitle">
              beauty of nature! Breaking the confusion
            </h1>
            <div style={{
      display: "flex",
     paddingLeft:'15px'
    }} >
<p class="cardPara1" > Arman Ahmed</p>
<p class="cardPara2" > |05 Jul 2019</p>
</div>
            <p className="cardPara">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, vitae
              recusandae? Quibusdam, assumenda eligendi! Enim nulla culpa, explicabo
              odio vitae accusantium in cumque assumenda dolorum repudiandae minima,
              asperiores reiciendis vel.
            </p>
          </div>
          <div className="card">
            <figure className="cardImage">
              <img src={im11} width={300} height={200} />
            </figure>
            <h1 className="cardTitle">
              Fresh Graduate or IT professional Looking
            </h1>
            <div style={{
      display: "flex",
     paddingLeft:'15px'
    }} >
<p class="cardPara1" > Arman Ahmed</p>
<p class="cardPara2" > |05 Jul 2019</p>
</div>
            <p className="cardPara">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, vitae
              recusandae? Quibusdam, assumenda eligendi! Enim nulla culpa, explicabo
              odio vitae accusantium in cumque assumenda dolorum repudiandae minima,
              asperiores reiciendis vel.
            </p>
          </div>
        
          <div className="card">
            <figure className="cardImage">
              <img src={im12} width={300} height={200} />
            </figure>
            <h1 className="cardTitle">
              Industry 4.0 - The Prospects &amp; Journey ahead!
            </h1>
            <div style={{
      display: "flex",
     paddingLeft:'15px'
    }} >
<p class="cardPara1" > Arman Ahmed</p>
<p class="cardPara2" > |05 Jul 2019</p>
</div>
            <p className="cardPara">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, vitae
              recusandae? Quibusdam, assumenda eligendi! Enim nulla culpa, explicabo
              odio vitae accusantium in cumque assumenda dolorum repudiandae minima,
              asperiores reiciendis vel.
            </p>
          </div>
       
          <div className="card">
            <figure className="cardImage">
              <img src={im13} width={300} height={200} />
            </figure>
            <h1 className="cardTitle">
              Master your General Aptitude Job Interview
            </h1>
            <p className="cardPara">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, vitae
              recusandae? Quibusdam, assumenda eligendi! Enim nulla culpa, explicabo
              odio vitae accusantium in cumque assumenda dolorum repudiandae minima,
              asperiores reiciendis vel.
            </p>
          </div>

          <div className="card">
            <figure className="cardImage">
              <img src={im14} width={300} height={200} />
            </figure>
            <h1 className="cardTitle">
              Ace your Soft Skills - crack the job interview
            </h1>
            <div style={{
      display: "flex",
     paddingLeft:'15px'
    }} >
<p class="cardPara1" > Arman Ahmed</p>
<p class="cardPara2" > |05 Jul 2019</p>
</div>
            <p className="cardPara">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, vitae
              recusandae? Quibusdam, assumenda eligendi! Enim nulla culpa, explicabo
              odio vitae accusantium in cumque assumenda dolorum repudiandae minima,
              asperiores reiciendis vel.
            </p>
          </div>
        </main>
    


        <div className='footer-img' style={{ height: '530px'}}>
          <div style={{display: 'flex'}}>
            


          <div style={{width: '16%', height: '350px'}}> 
              <div style={{display: 'flex'}}>
                <h4 style={{fontSize: '17px', lineHeight: '30px', letterSpacing: '1px', paddingLeft: '90px', paddingTop: '60px', color: 'hsla(0,0%,100%,.5)'}}>EDYODA </h4>
              </div>
              <h4 style={{color: 'white', fontSize: '13px', letterSpacing: '1px', paddingLeft: '90px', fontWeight: 600, lineHeight: '20px'}}>About Us</h4>

              <h4 style={{color: 'white', fontSize: '13px', letterSpacing: '1px', paddingLeft: '90px', fontWeight: 600, lineHeight: '20px'}}>Careers</h4>
             
              <h4 style={{color: 'white', fontSize: '13px', letterSpacing: '1px', paddingLeft: '90px', fontWeight: 600, lineHeight: '20px'}}>Contact Us</h4>
             
              <h4 style={{color: 'white', fontSize: '13px', letterSpacing: '1px', paddingLeft: '90px', fontWeight: 600, lineHeight: '20px'}}>Terms of Use</h4>
            
              <h4 style={{color: 'white', fontSize: '13px', letterSpacing: '1px', paddingLeft: '90px', fontWeight: 600, lineHeight: '20px'}}>Privacy Policy</h4>
            
            </div>
      
      
            <div style={{width: '16%', height: '350px'}}> 
              <div style={{display: 'flex'}}>
                <h4 style={{fontSize: '17px', lineHeight: '30px', letterSpacing: '1px', paddingTop: '60px', color: 'hsla(0,0%,100%,.5)'}}>CAREER TRACKS </h4>
              </div>
              <h4 style={{color: 'hsla(0,0%,100%,.5)', fontSize: '13px', letterSpacing: '1px', fontWeight: 600, lineHeight: '20px'}}>TECH</h4>

<h4 style={{color: 'white', fontSize: '13px', letterSpacing: '1px', fontWeight: 600, lineHeight: '20px'}}>React Developer</h4>

<h4 style={{color: 'white', fontSize: '13px', letterSpacing: '1px',   fontWeight: 600, lineHeight: '20px'}}>Full Stack Developer</h4>

<h4 style={{color: 'white', fontSize: '13px', letterSpacing: '1px',  fontWeight: 600, lineHeight: '20px'}}>Data Scientist</h4>

<h4 style={{color: 'white', fontSize: '13px', letterSpacing: '1px',   fontWeight: 600, lineHeight: '20px'}}>Software Development Engineer</h4>

<h4 style={{color: 'hsla(0,0%,100%,.5)', fontSize: '17px', letterSpacing: '1px',   fontWeight: 600, lineHeight: '20px',paddingTop: '20px'}}>BUSINESS</h4>

<h4 style={{color: 'white', fontSize: '13px', letterSpacing: '1px', fontWeight: 600, lineHeight: '20px'}}>Business Development Associate</h4>
            </div>


            <div style={{width: '18%', height: '350px'}}> 
              <div style={{display: 'flex'}}>
                <h4 style={{fontSize: '17px', lineHeight: '30px', letterSpacing: '1px', paddingLeft: '30px', paddingTop: '60px', color: 'hsla(0,0%,100%,.5)'}}>MICRO DEGREE </h4>
              </div>
              <h4 style={{color: 'hsla(0,0%,100%,.5)', fontSize: '13px', letterSpacing: '1px', paddingLeft: '30px', fontWeight: 600, lineHeight: '20px'}}>TECH</h4>

              <h4 style={{color: 'white', fontSize: '13px', letterSpacing: '1px', paddingLeft: '30px', fontWeight: 600, lineHeight: '20px'}}>AI ML Micro Degree</h4>
             
              <h4 style={{color: 'white', fontSize: '13px', letterSpacing: '1px', paddingLeft: '30px', fontWeight: 600, lineHeight: '20px'}}>ReactJS Micro Degree</h4>
             
              <h4 style={{color: 'white', fontSize: '13px', letterSpacing: '1px', paddingLeft: '30px', fontWeight: 600, lineHeight: '20px'}}>Web Development Micro Degree</h4>
            
              <h4 style={{color: 'white', fontSize: '13px', letterSpacing: '1px', paddingLeft: '30px', fontWeight: 600, lineHeight: '20px'}}>Python For Data Science</h4>

              <h4 style={{color: 'hsla(0,0%,100%,.5)', fontSize: '17px', letterSpacing: '1px', paddingLeft: '30px', paddingTop: '20px', fontWeight: 600, lineHeight: '20px'}}>BUSINESS</h4>

              <h4 style={{color: 'white', fontSize: '13px', letterSpacing: '1px', paddingLeft: '30px', fontWeight: 600, lineHeight: '20px'}}>Digital Marketing Micro Degree</h4>

              <h4 style={{color: 'white', fontSize: '13px', letterSpacing: '1px', paddingLeft: '30px', fontWeight: 600, lineHeight: '20px'}}>Business Development Professional</h4>
            </div>


            <div style={{width: '13%', height: '350px'}}> 
              <div style={{display: 'flex'}}>
                <h4 style={{fontSize: '17px', lineHeight: '30px', letterSpacing: '1px', paddingLeft: '20px', paddingTop: '60px', color: 'hsla(0,0%,100%,.5)'}}>RESOURCES </h4>
              </div>
              <h4 style={{color: 'white', fontSize: '13px', letterSpacing: '1px', paddingLeft: '20px', fontWeight: 600, lineHeight: '20px'}}>Jobs</h4>

              <h4 style={{color: 'white', fontSize: '13px', letterSpacing: '1px', paddingLeft: '20px',fontWeight: 600, lineHeight: '20px'}}>Learning Paths</h4>
             
              <h4 style={{color: 'white', fontSize: '13px', letterSpacing: '1px', paddingLeft: '20px',fontWeight: 600, lineHeight: '20px'}}>Courses</h4>
             
              <h4 style={{color: 'white', fontSize: '13px', letterSpacing: '1px', paddingLeft: '20px', fontWeight: 600, lineHeight: '20px'}}>Learning Videos</h4>

              <h4 style={{color: 'white', fontSize: '13px', letterSpacing: '1px', paddingLeft: '20px', fontWeight: 600, lineHeight: '20px'}}>Educators</h4>

              <h4 style={{color: 'white', fontSize: '13px', letterSpacing: '1px', paddingLeft: '20px', fontWeight: 600, lineHeight: '20px'}}>EdYoda Stories</h4>

              <h4 style={{color: 'white', fontSize: '13px', letterSpacing: '1px', paddingLeft: '20px', fontWeight: 600, lineHeight: '20px'}}>University</h4>
            </div>


            <div style={{width: '15%', height: '350px'}}> 
              <div style={{display: 'flex'}}>
                <h4 style={{fontSize: '17px', lineHeight: '30px', letterSpacing: '1px', paddingTop: '60px', color: 'hsla(0,0%,100%,.5)'}}>FOR ENTERPRISES </h4>
              </div>
              <h4 style={{color: 'white', fontSize: '13px', letterSpacing: '1px', fontWeight: 600, lineHeight: '20px'}}>Hire EdYoda Graduates</h4>

              <h4 style={{color: 'white', fontSize: '13px', letterSpacing: '1px', fontWeight: 600, lineHeight: '20px'}}>Train Your Employees</h4>
             
              <h4 style={{color: 'hsla(0,0%,100%,.5)', fontSize: '17px', letterSpacing: '1px', paddingTop: '20px', fontWeight: 600, lineHeight: '20px'}}>QUICK LINKS</h4>
             
              <h4 style={{color: 'white', fontSize: '13px', letterSpacing: '1px', fontWeight: 600, lineHeight: '20px'}}>Learn and Earn</h4>

              <h4 style={{color: 'white', fontSize: '13px', letterSpacing: '1px', fontWeight: 600, lineHeight: '20px'}}>Become a Learning-Enabler</h4>

              <h4 style={{color: 'white', fontSize: '13px', letterSpacing: '1px', fontWeight: 600, lineHeight: '20px'}}>Tips for Learning-Enabler</h4>

              <h4 style={{color: 'white', fontSize: '13px', letterSpacing: '1px', fontWeight: 600, lineHeight: '20px'}}>Request New Topic</h4>

              <h4 style={{color: 'white', fontSize: '13px', letterSpacing: '1px', fontWeight: 600, lineHeight: '20px'}}>Certification</h4>

              <h4 style={{color: 'white', fontSize: '13px', letterSpacing: '1px', fontWeight: 600, lineHeight: '20px'}}>Affiliate Progam</h4>
            </div>


            <div style={{width: '18%', height: '350px'}}>
              <div style={{display: 'flex'}}>
                <h4 style={{fontSize: '17px', lineHeight: '30px', letterSpacing: '1px', paddingTop: '60px', color: 'hsla(0,0%,100%,.5)'}}>CONTACT US</h4>

              </div>
              <div style={{display: 'flex'}}>

                <h4 style={{fontSize: '13px', lineHeight: '20px', letterSpacing: '1px',color: 'white', fontFamily: '"Dosis", sans-serif'}}>1st Floor,
Gopalan Millennium Tower,
ITPL Main Road, Brookefield,
Bengaluru, Karnataka-560037,
India</h4>
              </div>

              <div style={{display: 'flex'}}>
                <div>
              <GrMail style={{width: '30px', height: '30px', color: 'rgb(248, 247, 247)', marginTop: '25px',display:'inline-block'}} /> 
                
                </div>
                <h4 style={{fontSize: '13px', lineHeight: '20px', letterSpacing: '1px', paddingLeft: '10px', paddingTop: '10px', color: 'white', fontFamily: '"Dosis", sans-serif'}}>gowthamduraisamy97@gmail.com</h4>
              </div>
          
          <div style={{display: 'flex'}}>
          <MdOutlineLocationOn style={{width: '30px', height: '30px', color: 'rgb(248, 247, 247)', marginTop: '25px',display:'inline-block'}} /> 
          <AiOutlineTwitter style={{width: '30px', height: '30px', color: 'rgb(248, 247, 247)', marginTop: '25px',display:'inline-block',marginLeft:'10px'}} /> 
          <FaFacebookF style={{width: '30px', height: '30px', color: 'rgb(248, 247, 247)', marginTop: '25px',display:'inline-block',marginLeft:'10px'}} /> 
          <BiLogoLinkedin style={{width: '30px', height: '30px', color: 'rgb(248, 247, 247)', marginTop: '25px',display:'inline-block',marginLeft:'10px'}} /> 
          <FaTelegramPlane style={{width: '30px', height: '30px', color: 'rgb(248, 247, 247)', marginTop: '25px',display:'inline-block',marginLeft:'10px'}} /> 
          </div>
            </div>
          </div>
          
        </div>
    

  </container-fluid>

  )
}

export default Mainnav