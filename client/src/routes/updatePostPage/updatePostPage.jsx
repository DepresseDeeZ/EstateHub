import { useState, useEffect } from "react";
import "./updatePostPage.scss";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import apiRequest from "../../lib/apiRequest";
import UploadWidget from "../../components/uploadWidget/UploadWidget";
import { useNavigate, useParams } from "react-router-dom";

const UpdatePostPage = () => {
  const [value, setValue] = useState("");
  const [images, setImages] = useState([]);
  const [postData, setPostData] = useState(null); // State for storing fetched post data
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const { id } = useParams(); // Assuming 'id' is passed as a route parameter

  // Fetch the post details when the component mounts
  useEffect(() => {
    const fetchPostData = async () => {
      try {
        const res = await apiRequest.get(`/posts/${id}`);
        setPostData(res.data); // Assuming the data is in 'data' field
        setValue(res.data.description); // Set description (rich text editor)
        setImages(res.data.images); // Set images
      } catch (err) {
        console.log("Error fetching post data:", err);
        setError("Failed to load post data.");
      }
    };
    fetchPostData();
  }, [id]);

  // Handle form submission (update post)
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const inputs = Object.fromEntries(formData);

    try {
      const res = await apiRequest.put(`/posts/${id}`, {
        postData: {
          title: inputs.title,
          price: parseInt(inputs.price),
          address: inputs.address,
          city: inputs.city,
          bedroom: parseInt(inputs.bedroom),
          bathroom: parseInt(inputs.bathroom),
          type: inputs.type,
          property: inputs.property,
          latitude: inputs.latitude,
          longitude: inputs.longitude,
          images: images, // Keep the updated images
        },
        postDetail: {
          desc: value, // Updated description
          utilities: inputs.utilities,
          pet: inputs.pet,
          income: inputs.income,
          size: parseInt(inputs.size),
          school: parseInt(inputs.school),
          bus: parseInt(inputs.bus),
          restaurant: parseInt(inputs.restaurant),
        },
      });

      navigate(`/posts/${res.data.id}`); // Redirect to the updated post page
    } catch (err) {
      console.log(err);
      setError("Failed to update post.");
    }
  };

  if (!postData) return <div>Loading...</div>; // Handle loading state

  return (
    <div className="newPostPage">
      <div className="formContainer">
        <h1>Edit Post</h1>
        <div className="wrapper">
          <form onSubmit={handleSubmit}>
            <div className="item">
              <label htmlFor="title">Title</label>
              <input
                id="title"
                name="title"
                type="text"
                defaultValue={postData.title} // Pre-fill with existing data
              />
            </div>
            <div className="item">
              <label htmlFor="price">Price</label>
              <input
                id="price"
                name="price"
                type="number"
                defaultValue={postData.price} // Pre-fill with existing data
              />
            </div>
            <div className="item">
              <label htmlFor="address">Address</label>
              <input
                id="address"
                name="address"
                type="text"
                defaultValue={postData.address} // Pre-fill with existing data
              />
            </div>
            <div className="item description">
              <label htmlFor="desc">Description</label>
              <ReactQuill theme="snow" onChange={setValue} value={value} />
            </div>
            <div className="item">
              <label htmlFor="city">City</label>
              <input
                id="city"
                name="city"
                type="text"
                defaultValue={postData.city} // Pre-fill with existing data
              />
            </div>
            <div className="item">
              <label htmlFor="bedroom">Bedroom Number</label>
              <input
                min={1}
                id="bedroom"
                name="bedroom"
                type="number"
                defaultValue={postData.bedroom} // Pre-fill with existing data
              />
            </div>
            <div className="item">
              <label htmlFor="bathroom">Bathroom Number</label>
              <input
                min={1}
                id="bathroom"
                name="bathroom"
                type="number"
                defaultValue={postData.bathroom} // Pre-fill with existing data
              />
            </div>
            <div className="item">
              <label htmlFor="latitude">Latitude</label>
              <input
                id="latitude"
                name="latitude"
                type="text"
                defaultValue={postData.latitude} // Pre-fill with existing data
              />
            </div>
            <div className="item">
              <label htmlFor="longitude">Longitude</label>
              <input
                id="longitude"
                name="longitude"
                type="text"
                defaultValue={postData.longitude} // Pre-fill with existing data
              />
            </div>
            <div className="item">
              <label htmlFor="type">Type</label>
              <select name="type" defaultValue={postData.type}>
                <option value="rent">Rent</option>
                <option value="buy">Buy</option>
              </select>
            </div>
            <div className="item">
              <label htmlFor="property">Property</label>
              <select name="property" defaultValue={postData.property}>
                <option value="apartment">Apartment</option>
                <option value="house">House</option>
                <option value="condo">Condo</option>
                <option value="land">Land</option>
              </select>
            </div>

            {/* Other form fields remain the same */}

            <button className="sendButton">Update</button>
            {error && <span>{error}</span>}
          </form>
        </div>
      </div>
      <div className="sideContainer">
        {images.map((image, index) => (
          <img src={image} key={index} alt="" />
        ))}
        <UploadWidget
          uwConfig={{
            cloudName: "dvigd3hvc",
            uploadPreset: "estatehub",
            multiple: true,
            maxImageFileSize: 2000000,
            folder: "posts",
          }}
          setState={setImages}
        />
      </div>
    </div>
  );
};

export default UpdatePostPage;
