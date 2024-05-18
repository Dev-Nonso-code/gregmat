import React, { useState } from 'react'
import axios from 'axios';

const Cloud = () => {
    const endpoint = "http://localhost:5100/log/upload"
    const [myfile, setmyfile] = useState("");
    const [myimage, setmyImage] = useState(" ");
    const changeFile = (e) => {
        var myImage = e.target.files[0];
        var reader = new FileReader()
        reader.readAsDataURL(myImage)
        reader.onload = () => {
            setmyfile(reader.result);
        };
    };

    const upload = () => {
        const formData = new FormData();
        formData.append('file', myfile);
        axios.post(endpoint,{myfile})
            .then((result, err) => {
                console.log("check your sever");
                console.log(result);
                setmyImage(result.data.myImagelink)
            }).catch((err) => {
                console.log(err);
            })
    }

    return (
        <>
            <main>
                <div>
                    <input type="file" onChange={(e) => changeFile(e)} />
                </div>
                <div>
                    <button className='my-2 btn btn-info w-50' onClick={upload}>Upload</button>
                </div>
            </main>
            <div>
                <img src={myimage} alt="##" />
            </div>
        </>
    )
}

export default Cloud

