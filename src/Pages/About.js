import React from 'react'
import './style.css'
function About() {
  return (
  <div style={{backgroundColor:'gray' ,height:'880px',width:'1260px'}}>
      
      <div class='about' style={{padding:'30px'}} font-size='20px'>
      <p>A good restaurant sets a high standard for its food quality and ensures 
      that guests receive the same quality with every meal. <br></br>
      Serving quality food can earn your restaurant a good reputation and compel your guests to return for repeat visits.<br></br>
       High-quality ingredients and an experienced cook are important to serving good food consistently.
        A good cook understands your guests' needs and <br></br> works well with the kitchen staff to ensure that guests receive their meal the way they ordered it every time.</p> 
           </div>
           
           <div class="main" display='flex' justify-content='space-between'>
          <img src=' https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?cs=srgb&dl=pexels-ash-376464.jpg&fm=jpg' alt='' height={'270px'} width={'308px'} padding='10px'></img>    
          <img src='https://hips.hearstapps.com/hmg-prod/images/gettyimages-1134086327.png?resize=1200:*' alt='' height={'270px'} width={'308px'}></img>
          <img src='https://img.veenaworld.com/wp-content/uploads/2019/09/10-Delicious-Maharashtrian-Dishes-that-You-Must-Try.jpg' alt='' height={'270px'} width={'308px'}></img>
          <img src='https://www.linguahouse.com/linguafiles/md5/d01dfa8621f83289155a3be0970fb0cb' alt='' height={'270px'} width={'308px'}></img>
          <img src='https://img.veenaworld.com/wp-content/uploads/2019/09/10-Delicious-Maharashtrian-Dishes-that-You-Must-Try.jpg' alt='' height={'270px'} width={'308px'}></img>
          <img src='https://www.linguahouse.com/linguafiles/md5/d01dfa8621f83289155a3be0970fb0cb' alt='' height={'270px'} width={'308px'}></img>
          </div>
        </div>
  )
}

export default About
