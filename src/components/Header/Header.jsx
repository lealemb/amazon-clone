import classes from "./Header.module.css";
import { SlLocationPin } from 'react-icons/sl'
import { BsSearch } from 'react-icons/bs'
import { BiCart } from 'react-icons/bi'

function Header() {
  return (
    
    <>
        <section>
            <div className={classes.header_container}>
                {/* Logo */}
                <a href="/">
                    <img src="https://pngimg.com/uploads/amazon/small/amazon_PNG11.png" alt="amazon logo" />
                </a>
               { /* Delivery */}
                    <span>
                        { SlLocationPin}   
                    </span>
                    <div>
                        <p>Deliverd to</p>
                        <span>Ethiopia</span>
                    </div>
            </div>
            <div>
               { /*search bar */}
               <select name="" id="">
                    <option value="">All</option>
               </select>
               <input type="text" name="" id="" placeholder='search product' />
               { BsSearch}
            </div>
            {/* right side link*/}
            <div>

            <div>
                <img src="https://cdn.britannica.com/33/4833-050-F6E415FE/Flag-United-States-of-America.jpg" alt="" />
                <section>
                    <option value="">EN</option>
                </section>
            </div>

            {/* three componenets */}

            <a href="">
                <div>
                    <p>Sign In</p>
                    <span> Account & Lists</span>
                </div>
            </a>
            {/* orders */}
            <a href="">
                <p>returns</p>
                <span>& Orders</span>
            </a>
            {/* cart */}
            <a to={"/cart"}>
            {BiCart}    
                <span>0</span>
            </a>

            </div>
        </section>
    </>
    
  )
}

export default Header