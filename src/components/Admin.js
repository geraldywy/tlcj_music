import React from "react"

const IMAGE_DIR = "../images/"
var fs = require('fs')

// to modify local content (within src)
const Admin = () => {
    var images = fs.readdir(IMAGE_DIR)
    return (
        <div>
            {images.map(img => 
                <img key={img} src={IMAGE_DIR + img} alt={IMAGE_DIR + img} style={{width: "300px"}} />
            )}
        </div>
    )
}

export default Admin;