import { type CardProps } from "@/interfaces";
import React from "react";

function Card({ title, content }: CardProps) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
}

export default Card;
