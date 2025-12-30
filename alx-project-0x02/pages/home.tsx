import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";
import React from "react";

function home() {
    const [title, setTitle] = React.useState("Home Page");
    const [content, setContent] = React.useState("This is the home page of our Next.js application.");
    const [displaModal, setDisplayModal] = React.useState(false);
    const toggleModal = ({ title, content }: { title: string; content: string }) => {
        setDisplayModal(!displaModal);
        setTitle(title);
        setContent(content);
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
                <PostModal title={title} content={content} submitAction={toggleModal} />
            </div>
        )} 
    </div>
  );
}

export default home;
