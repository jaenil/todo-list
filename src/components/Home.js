import React from "react";

class Home extends React.Component{
    
   Submitted = () => {
        //By default ,submit button is disabled
        document.querySelector('#submit_btn').disabled = true;

        document.querySelector('.input_text').onkeyup = function () {
            if (document.querySelector('.input_text').value.length > 3) {
                document.querySelector('#submit_btn').disabled = false;
            } else {
                document.querySelector('#submit_btn').disabled = true;
            }
        };

        const task_value = document.querySelector(".input_text").value ;

        const li_element = document.createElement('li') ;
        li_element.innerHTML= task_value ;
        document.querySelector('.output').append(li_element) ;
        
        //to ensure that the same value of task is changed to none
        document.querySelector('.input_text').value = '';
        
        document.querySelector('#submit_btn').disabled = true;
         //Stop form from Submitting
         return false;     
   }
    render() {
        return (
            
            <React.Fragment>
               <h1> To Do List </h1>
               <div className="form">
                   <form>
                       <input type="text" placeholder="Add a new task" className="input_text"/>
                       <input type="submit" id="submit_btn" onClick={this.Submitted}/>
                   </form>

               </div>
               <ul className="output">

               </ul>
            </React.Fragment>
        )
    }
}

export default Home ;