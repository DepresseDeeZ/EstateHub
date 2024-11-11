import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import apiRequest from "../../lib/apiRequest";
import UploadWidget from "../../components/uploadWidget/UploadWidget";
import "./updatePostPage.scss";

function UpdatePostPage() {
  const { postId } = useParams();
  const [value, setValue] = useState("");
  const [images, setImages] = useState([]);
  const [error, setError] = useState("");
  const [postData, setPostData] = useState({});
  const navigate = useNavigate();

  // Fetch post data on mount
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await apiRequest.get(`/posts/${postId}`);
        setPostData(res.data);
        setValue(res.data.postDetail.desc);
        setImages(res.data.postData.images || []);
      } catch (err) {
        setError("Error loading post data");
      }
    };
    fetchPost();
  }, [postId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const inputs = Object.fromEntries(formData);

    try {
      await apiRequest.put(`/posts/${postId}`, {
        postData: {
          ...postData.postData,
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
          images: images,
        },
        postDetail: {
          desc: value,
          utilities: inputs.utilities,
          pet: inputs.pet,
          income: inputs.income,
          size: parseInt(inputs.size),
          school: parseInt(inputs.school),
          bus: parseInt(inputs.bus),
          restaurant: parseInt(inputs.restaurant),
        },
      });
      navigate(`/profile`); // Navigate back to profile after update
    } catch (err) {
      setError("Error updating post");
    }
  };

  return (
    <div className="updatePostPage">
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
                defaultValue={postData.title}
              />
            </div>
            {/* Add other form fields similar to your NewPostPage */}
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
            cloudName: "your-cloud-name",
            uploadPreset: "your-upload-preset",
            multiple: true,
            maxImageFileSize: 2000000,
            folder: "posts",
          }}
          setState={setImages}
        />
      </div>
    </div>
  );
}

export default UpdatePostPage;
