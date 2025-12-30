import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";
import React from "react";

function home() {
    const [title, setTitle] = React.useState("Home Page");
    const [content, setContent] = React.useState("This is the home page of our Next.js application.");
    const [displaModal, setDisplayModal] = React.useState(false);
    const toggleModal = () => {
        setDisplayModal(!displaModal);
    }
  return (
    <div>
      <h1>Home</h1>
      <Card
        title={title}
        content={content}
      />
        <button onClick={() => setDisplayModal(!displaModal)}>Toggle Modal</button>
        {displaModal && (
            <div>
                <PostModal title={title} content={content} submitAction={toggleModal} setTitle={setTitle} setContent={setContent} />
            </div>
        )} 
    </div>
  );
}

export default home;
