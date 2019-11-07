import React from "react";

const NasaCard = props => {
  return (
    <div>
      <div>
        {props.Info.media_type === "video" ? (
          <iframe
            title="video of something"
            width="1080"
            height="720"
            alt="space stuff"
            src={props.Info.url}
          />
        ) : (
          <img src={props.Info.url} alt="a pic" />
        )}
      </div>

      <div>
        <p>{props.Info.date}</p>
        <h1>{props.Info.title}</h1>
        <p> {props.Info.explanation}</p>
      </div>
    </div>
  );
};
export default NasaCard;
