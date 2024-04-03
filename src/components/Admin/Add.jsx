import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postdata } from './Admin/actions';
import './AddProduct.css'; // Import the external CSS file

const initialdata = {
  name: '',
  category: '',
  image: '',
  price: '',
};

export const Add = ({ setRen }) => {
  const [data, setData] = useState(initialdata);
  const dispatch = useDispatch();
  const ourdata = useSelector((state) => state.admin.isLoading);

  const handlechange = (e) => {
    const { name, value } = e.target;
    setData((pre) => ({ ...pre, [name]: value }));
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    const { category, image, price, name } = data;
    dispatch(postdata(data, setRen));
    setData(initialdata);
  };

  return (
    <div className='AddProductContainer'>
      <h1 className='AddProductHHEading'>Add Your Products</h1>
      <div className='AddProductContents'>
        <form onSubmit={handlesubmit}>
          <div className='AddProductInputs'>
            <input
              value={data.image}
              onChange={handlechange}
              name="image"
              type="text"
              placeholder="Image"
            />
          </div>
          <br />
          <div className='AddProductInputs'>
            <input
              value={data.name}
              onChange={handlechange}
              name="name"
              type="text"
              placeholder="Name"
            />
          </div>
          <br />
          <div className='AddProductInputs'>
            <input
              value={data.category}
              onChange={handlechange}
              name="category"
              type="text"
              placeholder="Category"
            />
          </div>
          <br />
          <div className='AddProductInputs'>
            <input
              value={data.price}
              onChange={handlechange}
              name="price"
              type="number"
              placeholder="Price"
            />
          </div>
          <br />

          {ourdata === false ? (
            <button className='AddProductSumbit' type="submit">ADD PRODUCT</button>
          ) : (
            <button type="submit" disabled>
              Adding Product...
            </button>
          )}
        </form>
      </div>
    </div>
  );
};
