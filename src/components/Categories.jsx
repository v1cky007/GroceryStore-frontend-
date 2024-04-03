import React from 'react';
import './Categories.css'
import { Link } from 'react-router-dom';

const Categories = () => {
  return (
    <div className="Catcontainer">
      <div className="Catcard">
        <div className="Catbox">
          <div className="Catcontent">
          <img class="Catbox-image" src="https://4.imimg.com/data4/AY/TE/IMOB-27708947/c__data_users_defapps_appdata_internetexplorer_temp_sav.jpg" alt=""></img>
          <h3>Vegetables</h3>
          <p>Upto 45% Off</p>
          <Link to="/">Buy Now</Link>
          <h2>01</h2>
            </div>
            </div>
            </div>
      <div className="Catcard">
        <div className="Catbox">
          <div className="Catcontent">
          <img class="Catbox-image" src="https://images.unsplash.com/photo-1573246123716-6b1782bfc499?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZydWl0c3xlbnwwfHwwfHx8MA%3D%3D" alt=""></img>
            <h3 >Fresh Fruits</h3>
            <p>Upto 45% Off</p>
            <Link to="/">Buy Now</Link>
            <h2>02</h2>
            
          </div>
        </div>
      </div>

      <div className="Catcard">
        <div className="Catbox">
          <div className="Catcontent">
          <img class="Catbox-image" src="https://etimg.etb2bimg.com/photo/87617927.cms" alt=""></img>
            <h3>Dairy Products</h3> 
             <p>Upto 45% Off</p>
             <Link to="/">Buy Now</Link>
             <h2>03</h2>
          </div>
        </div>
      </div>
      <div className="Catcard">
        <div className="Catbox">
          <div className="Catcontent">
          <img class="Catbox-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRer9Eh3xFu-Vxw5ZAt0oqFB6EKBWN1ox_NWA&usqp=CAU" alt=""></img>
            <h3>Freshh Meat</h3> 
             <p>Upto 45% Off</p>
             <Link to="/">Buy Now</Link>
             <h2>04</h2>
          </div>
        </div>
      </div>
      
      
    </div>
  );
}

export default Categories;
