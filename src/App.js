import { useState } from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import "./app.css";
import Form from "./Components/Form";
import PostListProvider from "./Store/Posts-Store";
import CardList from "./Components/CardList";

function App() {
  const [selectedTab , setSelectedTab] = useState("Home");
  return (
    <PostListProvider>
      <div className="app-container">
      <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
      <div className="content">
      <Header />
      {selectedTab === "Home" ? <CardList/>: <Form/>}
      <Footer />  
      </div>
      </div>
    </PostListProvider>
  );
}

export default App;
