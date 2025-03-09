import React from "react";

export default function Button({ width, height, cursor = "pointer", backColor = "#FF00AE", text, onClick, fontSize, borderRadius, boxshadow = "0px 8px 40px 0px rgba(255, 0, 174, 0.5), inset 0px 0px 10px 1px rgba(255, 255, 255, 0), 0px 0px 0px 1px rgb(255, 0, 174)" }) {
    return (
        <div style={{ zIndex: "1" }}>
            <div
                onClick={onClick}
                style={{
                    width: width,
                    height: height,
                    backgroundColor: backColor,
                    boxShadow: boxshadow,

                    cursor: cursor,
                    fontSize: fontSize,
                    borderRadius: borderRadius,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontWeight: "500"
                }}>
                {text}
            </div>
        </div>
    )
}