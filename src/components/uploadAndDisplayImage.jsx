import React, { useState } from "react";

const UploadAndDisplayImage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageUpload = (event) => {
    setSelectedImage(event.target.files[0]);
  };

  return (
    <div>
      {selectedImage && (
        <div>
          <img
            alt="not found"
            width={"250px"}
            src={URL.createObjectURL(selectedImage)}
          />
          <br />
          <button
            onClick={() => setSelectedImage(null)}
            className="px-4 py-2 text-[#EDF5E1] bg-[#05386B] rounded hover:bg-[#042d56]"
          >
            Remove
          </button>
        </div>
      )}

      <br />
      <br />

      <input type="file" name="myImage" onChange={handleImageUpload} />
    </div>
  );
};

export default UploadAndDisplayImage;