import React, { useState } from "react";
import { CloudinaryContext, Image, Transformation } from "cloudinary-react";
//import React, { useState } from "react";

const Cloudinaryc = () => {
  const [image, setImage] = useState(null);

  const handleImageUpload = async (event) => {
    console.log("ok");
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "rmd7vv26"); // replace with your upload preset

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/djabzrlh1/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();
      setImage(data.url);
      console.log(data);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <div>
      <h1>Image Upload with Cloudinary</h1>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      {image && (
        <div>
          <h2>Uploaded Image:</h2>
          <CloudinaryContext cloudName="djabzrlh1">
            <Image publicId={image}>
              <Transformation width="300" height="200" crop="fill" />
            </Image>
          </CloudinaryContext>
        </div>
      )}
    </div>
  );
};

export default Cloudinaryc;
