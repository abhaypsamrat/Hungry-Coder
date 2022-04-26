import React from "react";
import "./Blog.css";

const SmartText = ({ text, length = 100 }) => {
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
        href="#/"
        style={{ color: "green", cursor: "pointer",textDecoration: 'none' }}
        onClick={() => setShowLess(!showLess)}
      >
        Read {showLess ? "More" : "Less"}
      </a>
    </div>
  );
};

// Blog Section

const Blog1 =
  "<strong>How To Create React App</strong><br>" +
  "To use React in production, you need npm which is included with Node.js.<br>" +
  "It sets up your development environment so that you can use the latest JavaScript features, provides a nice developer experience, and optimizes your app for production. You’ll need to have Node >= 14.0.0 and npm >= 5.6 on your machine. To create a project," +
  "<br>run: npx create-react-app my-react-app";
  const Blog2 =
  "<strong>Add Router in your React App</strong><br>" +
  "Most modern React projects manage their dependencies using a package manager like npm or Yarn. To add React Router to an existing project, the first thing you should do is install the necessary dependencies with the tool of your choice:"+
  "<br>For npm run: npm install react-router-dom@6"+
  "<br>For yarn run: yarn add react-router-dom@6";
const Blog3 =
  "<strong>How To Create Next App</strong><br>" +
  "First, let’s make sure that your development environment is ready.<br>" +
  "If you don’t have Node.js installed, install it. You’ll need Node.js version 10.13 or later." +
  "<br>run:npx create-next-app@latest";

const Blog4 =
  "<strong>Upgrade Router version in your React App</strong><br>" +
"We are using react-router-dom v.5 or lower versions in our projects, we going to update router version, with the simple npm comment “npm install react-router-dom@6”- which ensures that you are going to install v.6, also we can “npm install react-router-dom@latest” – which will always give you the very latest version."+
  "<br>For npm run: npm install react-router-dom@latest";
const Blog5 =
  "<strong>Remove Router in your React App</strong><br>" +
"If you no longer need to use a package in your code, we recommend uninstalling it and removing it from your project's dependencies.<br>To remove Router package from your node_modules directory, on the command line, use the uninstall command. Include the scope if the package is scoped."+
  "<br>For npm run: npm uninstall react-router-dom";

function Blog() {
  return (
    <div className="Blog">
      <h3>Blogs</h3>
      <div className="style">
        <div className="card">
          <SmartText text={Blog1} />
          <br />
        </div>
        <div className="card">
          <SmartText text={Blog2} />
          <br />
        </div>
        <div className="card">
          <SmartText text={Blog3} />
          <br />
        </div>
        <div className="card">
          <SmartText text={Blog4} />
          <br />
        </div>
        <div className="card">
          <SmartText text={Blog5} />
          <br />
        </div>
      </div>
    </div>
  );
}

export default Blog;
