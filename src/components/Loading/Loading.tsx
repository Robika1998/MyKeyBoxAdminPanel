import React from "react";

const Loading: React.FC = () => {
  const logo = "../src/assets/logo/logo-dark.png";
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="logo" style={{ height: "100px" }}>
        <img src={logo} alt="Logo" style={{ height: 200, width: 200 }} />
      </div>

      <div
        className="animate-spin border-8 border-t-8 border-blue-500 rounded-full border-t-transparent"
        style={{
          height: 250,
          width: 250,
          position: "absolute",
          display: "flex",
          marginTop: 90,
        }}
      ></div>
    </div>
  );
};

export default Loading;
