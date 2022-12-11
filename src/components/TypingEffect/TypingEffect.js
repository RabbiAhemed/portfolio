import React from "react";
import ReactTypingEffect from "react-typing-effect";

const TypingEffect = () => {
  return (
    <>
      <ReactTypingEffect
        text={[
          "FRONT-END DEVELOPER",
          "REACT JS DEVELOPER",
          "MERN STACK DEVELOPER",
        ]}
      />

      <br />

      {/* <ReactTypingEffect
        text={["Md. Rabbi", "Ahemed"]}
        cursorRenderer={(cursor) => <h1>{cursor}</h1>}
        displayTextRenderer={(text, i) => {
          return (
            <h1>
              {text.split("").map((char, i) => {
                const key = `${i}`;
                return (
                  <span
                    key={key}
                    style={i % 2 === 0 ? { color: "magenta" } : {}}
                  >
                    {char}
                  </span>
                );
              })}
            </h1>
          );
        }}
      /> */}
    </>
  );
};
export default TypingEffect;
