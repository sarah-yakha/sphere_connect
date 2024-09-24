import React, { useState } from "react";
import { AddPost } from "../../pages/AddPost";
import "./modal.scss";

export const Modal = () => {
  return <div className="modal">{<AddPost />}</div>;
};
