import React from "react";
export default function DotTitle({ dotTitle }) {


    return (
        <div style={{ display: "flex", alignItems: "center", columnGap: "10px" }}>
            <div style={{
                borderRadius: "30px",
                width: "5px",
                height: "5.38px",
                backgroundColor: "white",
                fontSize: "16px"
            }}></div>
            {dotTitle}
        </div>
    )
}