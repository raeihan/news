import React from "react";

const Button = ({ link }) => {
  return (
    <div className="mt-5"><a href={link} className="bg-black text-white py-2 px-4 rounded-md">
    Lihat Selengkapnya
  </a></div>
  );
};

export default Button;
