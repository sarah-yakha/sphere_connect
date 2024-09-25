import React, { useState } from "react";
import { AddPost } from "../AddPost/index.js";
import "./modal.scss";

export const Modal = () => {
  return <div className="modal">{<AddPost />}</div>;
};
