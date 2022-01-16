import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { detailsItem,updateMenu } from '../actions/menuactions';
import MessageBox from '../components/messagebox';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
import {MENU_UPDATE_RESET} from '../constants/menuconstants'

function Menuedit(props) {
  const {id} = useParams();
  const history=useNavigate();
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');

  const itemDetails = useSelector((state) => state.itemdetail);
  const { loading, error, item } =itemDetails;
  const MenuUpdate = useSelector((state) => state.menuUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = MenuUpdate;

  const dispatch = useDispatch();
  useEffect(() => {
        if (successUpdate) {
           history('/menulist');
        }
        if (!item || item._id !== id || successUpdate) {
            dispatch({ type: MENU_UPDATE_RESET });
      dispatch(detailsItem(id));
    } else {
      setName(item.name);
      setPrice(item.price);
      setImage(item.image);
      setCategory(item.category);
      setDescription(item.description);
    }
  }, [item, dispatch, id,successUpdate,history]);
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
        updateMenu({
          _id: id,
          name,
          price,
          image,
          category,
          description,
        })
      );
  };
  const [loadingUpload, setLoadingUpload] = useState(false);
  const [errorUpload, setErrorUpload] = useState('');

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const bodyFormData = new FormData();
    bodyFormData.append('image', file);
    setLoadingUpload(true);
    try {
      const { data } = await Axios.post('/api/uploads', bodyFormData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${userInfo.token}`,
        },
      });
      var data2= data.replace("/frontend\\public","");
      setImage(data2);
      setLoadingUpload(false);
    } catch (error) {
      setErrorUpload(error.message);
      setLoadingUpload(false);
    }
  };
  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Edit Dish: {name}</h1>
        </div>
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <>
            <div>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="price">Price</label>
              <input
                id="price"
                type="text"
                placeholder="Enter price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="image">Image</label>
              <input
                readOnly
                id="image"
                type="text"
                placeholder="Enter image"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="imageFile">Image File</label>
              <input
                type="file"
                id="imageFile"
                label="Choose Image"
                onChange={uploadFileHandler}
              ></input>
              {loadingUpload && <div>loading...</div>}
              {errorUpload && (
                <MessageBox variant="danger">{errorUpload}</MessageBox>
              )}
            </div>
            <div>
              <label htmlFor="category">Category</label>
              <input
                id="category"
                type="text"
                placeholder="Enter category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                rows="3"
                type="text"
                placeholder="Enter description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            <div>
              <label></label>
              <button className="primary" type="submit">
                Update
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  );
}
export default Menuedit