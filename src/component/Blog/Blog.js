import React from "react";
import "./Blog.css";

const SmartText = ({ text, length = 40 }) => {
  const [showLess, setShowLess] = React.useState(true);

  if (text.length < length) {
    return <p>{text}</p>;
  }

  return (
    <div className="bg">
      <p
        dangerouslySetInnerHTML={{
          __html: showLess ? `${text.slice(0, length)}...` : text,
        }}
      ></p>
      <a
        style={{ color: "green", cursor: "pointer" }}
        onClick={() => setShowLess(!showLess)}
      >
        Read {showLess ? "More" : "Less"}
      </a>
    </div>
  );
};

// const htmlText = "<strong>How To Create React App </strong><br><br>"+
// "To use React in production, you need npm which is included with Node.js.<br><br>"+
// "It sets up your development environment so that you can use the latest JavaScript features, provides a nice developer experience, and optimizes your app for production. You’ll need to have Node >= 14.0.0 and npm >= 5.6 on your machine. To create a project, run: "+
// "<br>npx create-react-app my-react-app"

function Blog() {
  return (
    <div className="Blog">
      <h3>Blogs</h3>
      <div className="card">
        <SmartText
          text={
            "How To Create React App" +
            "hello" +
            "To get an overview of what React is, you can write React code directly in HTML." +
            "To get an overview of what React is, you can write React code directly in HTML."
            + "To get an overview of what React is, you can write React code directly in HTML."
            + "To get an overview of what React is, you can write React code directly in HTML."
          }
        />
        <br />
        <br />
        {/* <SmartText text={htmlText} /><br/>
        <SmartText text={htmlText} /><br/>
        <SmartText text={htmlText} /><br/>
        <SmartText text={htmlText} />
        <SmartText text={htmlText} />
        <SmartText text={htmlText} />
        <SmartText text={htmlText} /> */}
      </div>
    </div>
  );
}

export default Blog;
