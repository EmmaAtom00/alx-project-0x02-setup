import { type PostModalProps } from "@/interfaces";
import React from "react";

function PostModal({
  title,
  content,
  submitAction,
  setTitle,
  setContent,
}: PostModalProps) {
  const [titleInput, setTitleInput] = React.useState(title || "");
  const [contentInput, setContentInput] = React.useState(content || "");
  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    setTitle(titleInput);
    setContent(contentInput);
    if (submitAction) {
      submitAction();
    }
  };
  return (
    <div>
      <form action="" onSubmit={submitForm}>
        <input
          type="text"
          placeholder="Title"
          value={titleInput}
          onChange={(e) => setTitleInput(e.target.value)}
        />
        <textarea
          placeholder="Content"
          value={contentInput}
          onChange={(e) => setContentInput(e.target.value)}
        ></textarea>
        <button type="submit">Post</button>
      </form>
    </div>
  );
}

export default PostModal;
