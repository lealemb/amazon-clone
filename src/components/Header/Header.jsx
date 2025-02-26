import React from 'react'

function Header() {
  return (
    
    <section>
        <section>
            <div>
                {/* Logo */}
                <a href="/">
                    <img src="https://pngimg.com/uploads/amazon/small/amazon_PNG11.png" alt="amazon logo" />
                </a>
               { /* Delivery */}
                    <span>
                        {/* icon */ }   
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
               {/* icon */}
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
            <a href="">
                <div>
                    <p>cart</p>
                    <span>0</span>
                </div>

            </div>
        </section>
    </section>
    
  )
}

export default Header