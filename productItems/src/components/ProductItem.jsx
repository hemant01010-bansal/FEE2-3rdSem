import React from "react";
import { useState } from "react";

function ProductItem({ imgsrc, prodName, price, onDelete }) {

    return (
        <>
            <div style={{ width: "300px", height: 'auto', border: "0.1px solid black", borderRadius: "5px", boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1),10px 20px 20px rgba(0, 0, 0, 0.05)", padding: '8px' }}>
                <div style={{ display: "flex", justifyContent: 'center' }}>
                    <img src={imgsrc} style={{ width: "auto", maxWidth: "250px", height: "auto", maxHeight: '300px', borderRadius: "5px" }} />
                </div>
                <p style={{ fontSize: '30px' }}>{prodName}</p>
                <p style={{ fontWeight: '550' }}>{price}</p>
                <button onClick={onDelete} style={{ padding: '4px', border: '2px solid black', borderRadius: '5px' }}>Delete</button>
            </div>
        </>
    )
}

export default ProductItem;