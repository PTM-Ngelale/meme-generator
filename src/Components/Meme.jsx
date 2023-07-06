import React from "react";
import memesData from "../memesData";

export default function Meme() {
  // const [memeImage, setMemeImage] = React.useState()

  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImages, setAllMemeImages] = React.useState(memesData);

  function getMemeImage() {
    const memesArray = allMemeImages.data.memes;
    const randomMeme = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomMeme].url;
    setMeme((prevState) => {
      return {
        ...prevState,
        randomImage: url,
      };
    });
  }

  function handleChange(event) {
    setMeme((prevState) => {
      return {
        ...prevState,
        [event.target.name]: event.target.value,
      };
    });
  }

  return (
    <main>
      <div className="form">
        <input
          type="text"
          className="form-left-input"
          placeholder="Top Text"
          onChange={handleChange}
          name="topText"
        />

        <input
          type="text"
          className="form-right-input"
          placeholder="Bottom Text"
          onChange={handleChange}
          name="bottomText"
        />

        <button className="form--button" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} className="meme--image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
