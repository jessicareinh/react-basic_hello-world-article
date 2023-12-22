import React from "react";
import "./styles.css";

export default function App() {
  return (<div className="App">
    <HelloWorldArticle />
  </div>
  );
}

function HelloWorldArticle() {
  return (<article>
    <h1>Hello World.</h1>
    <p>This is a paragraph hallo hallo</p>
  </article>
  );
}