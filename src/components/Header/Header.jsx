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
            <div></div>
        </section>
    </section>
    
  )
}

export default Header