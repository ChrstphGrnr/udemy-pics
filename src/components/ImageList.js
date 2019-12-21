import React from 'react'


const ImageList = (props) => {
   return props.map((image) => {
        return <img src={image.url.regular}/>
    })
}

export default ImageList