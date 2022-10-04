import React from 'react';
import Boys from '../assets/boys_pic.jpeg'
import Girls from '../assets/girls_pic.jpeg'
import Choir from '../assets/choir_pic.jpeg'
import Boys2 from '../assets/boys_pic2.jpeg'
import Girls2 from '../assets/girls_pic2.jpeg'
import Blue1 from '../assets/luminisblue1.jpg'
import Blue2 from '../assets/luminisblue2.jpg'
import Blue3 from '../assets/luminisblue3.jpg'
import Luminis from '../assets/Luminis Choir.png'
import '../App.css'


const Gallery = () => {

    const fullImgBox = document.getElementById("fullImgBox")
    const fullImg = document.getElementById("fullImg")

    function closeImg() {
        document.body.classList.remove("fullImg")
    }

    function openFullImg(pic) {
        //origionally set on none so we set to flex to show
        fullImgBox.style.display = "block";
        fullImg.src = pic;
        console.log("clicked")
    }



    return (
        <div>
            <section id="gallery">
                <div className="container">
                    <div className="row">
                        <h4>Gallery</h4>
                        <div className="full-img" id="fullImgBox">
                            <img src={Choir} id="fullImg" />
                            <span onclick={() => closeImg()}>X</span>
                        </div>
                        <div className="img__collection">
                            <img className="gallery__img" src={Choir} onClick={() => openFullImg()} />
                            <img className="gallery__img" src={Girls} onClick={() => openFullImg(this.src)} />
                            <img className="gallery__img" src={Boys} onClick={() => openFullImg(this.src)} />
                            <img className="gallery__img" src={Blue1} onClick={() => openFullImg(this.src)} />
                            <img className="gallery__img" src={Blue2} onClick={() => openFullImg(this.src)} />
                            <img className="gallery__img" src={Blue3} onClick={() => openFullImg(this.src)} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Gallery;
