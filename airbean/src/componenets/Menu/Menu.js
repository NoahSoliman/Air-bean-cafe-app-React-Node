import React, { useState, useEffect } from 'react';
import Nav from '../Nav/Nav'




function Menu() {  
    const [menuData, setMenuData] = useState('');

    useEffect(async () => {
        const response = await fetch(`http://localhost:5000/api/beans`);
        const data = await response.json();
        // console.log(data)
        setMenuData(data.menu)

    }, [])

    console.log(menuData)


    return (
        <div>
            {/* <ul>
                {​​​​menuData.map((item) => {​​​​
                    return (
                        <li key={item.id}>
                            <span>{​​​​item.title}​​​​</span>
                            <span>{​​​​item.price}​​​​</span>
                            <h6>{​​​​item.desc}​​​​</h6>
                        </li>
                    )}​​​​)}​​​​
            </ul> */}
        </div>
    )
​​​​};

export default Menu;