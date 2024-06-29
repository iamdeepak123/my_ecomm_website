import React, { useState } from 'react'

const Myimage = ({ imgs = [{ url: "" }] }) => {

    const[photo, setPhoto] = useState(imgs[0]);

    // console.log(imgs)
    return (
        <>
            <div className="singleproduct_images">
                <div className="row_img">
                    {
                        imgs.map((curelem, index) => {
                            return (
                                <img src={curelem.url} alt={curelem.filename} key={index} onClick={()=> setPhoto(curelem)}/>
                            )
                        }

                        )}
                </div>

                <div className="row_1_img">
                    <img src={photo.url} alt={photo.filename} />
                </div>


            </div>

        </>
    )
}

export default Myimage