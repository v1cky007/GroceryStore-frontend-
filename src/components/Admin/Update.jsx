import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updatedata } from './Admin/actions';
import './Update.css'; // Import the external CSS file

const initialdata = {
  id: '',
  name: '',
  category: '',
  image: '',
  price: '',
};

export const Update = ({ setRen }) => {
  const [data, setData] = useState(initialdata);
  const dispatch = useDispatch();
  const handlechange = (e) => {
    const { name, value } = e.target;
    setData((pre) => ({ ...pre, [name]: value }));
  };
  const ourdata = useSelector((state) => state.update.isLoading);

  const handlesubmit = (e) => {
    e.preventDefault();
    const { id, category, image, name, price } = data;
    if (id && category && image && name && price) {
      dispatch(updatedata(id, data, setRen));
      setData(initialdata);
    } else {
      alert('Ohh! you are not providing complete data');
    }
  };

  return (
    <div>
      <h1 className="update-heading">Update Your Products</h1>
      <div className="update-container">
        <form onSubmit={handlesubmit}>
          <div>
            <input
              value={data.id}
              onChange={handlechange}
              name="id"
              type="number"
              placeholder="Please Enter Id here"
              className="update-input"
            />
          </div>
          <br />
          <div>
            <input
              value={data.image}
              onChange={handlechange}
              name="image"
              type="text"
              placeholder="Image"
              className="update-input"
            />
          </div>
          <br />
          <div>
            <input
              value={data.name}
              onChange={handlechange}
              name="name"
              type="text"
              placeholder="Name"
              className="update-input"
            />
          </div>
          <br />
          <div>
            <input
              value={data.category}
              onChange={handlechange}
              name="category"
              type="text"
              placeholder="Category"
              className="update-input"
            />
          </div>
          <br />
          <div>
            <input
              value={data.price}
              onChange={handlechange}
              name="price"
              type="number"
              placeholder="Price"
              className="update-input"
            />
          </div>
          <br />
          {ourdata === false ? (
            <button className="update-button" type="submit">
              UPDATE
            </button>
          ) : (
            <button className="update-button" disabled>
              Updating...
            </button>
          )}
        </form>
      </div>
    </div>
  );
};
