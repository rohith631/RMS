import "../App.css"
import { Link } from "react-router-dom";
import Heading from "./Heading";
import "./front.css"
function front()
{
return(
   
        <>
          <section className='hero'>
            <div className='container'>
                <center>
              <Heading title='Search Your Next Home ' subtitle='Find new & featured property located in your local city.' />
              </center>
            </div>
          </section>
        </>
    

);
}
export default front;