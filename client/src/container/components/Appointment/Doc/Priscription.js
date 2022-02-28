import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../../style/Priscription.scss";
import { saveAs } from "file-saver";
import firebase from "firebase";
import { storage } from "../../../Firebase";

function Priscription(props) {
  const [url,setUrl]=useState("")
  useEffect(()=>{
    console.log(url)
  },[url])
  const uploadToStorage = (imageURL) =>{
    const storageRef = firebase.storage().ref('prescription.pdf');
    getFileBlob(imageURL, blob =>{
      console.log(blob)
       storageRef.put(blob).on(
        "state_changed",
        (snap) => {
          let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
          // setProgress(percentage);
        },
        (err) => {
          console.log(err)
        },
        async () => {
          const url = await storageRef.getDownloadURL();
          setUrl(url);
        }
      );
   })
}
  var getFileBlob = function (url, cb) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.responseType = "blob";
    xhr.addEventListener('load', function() {
      cb(xhr.response);
    });
    xhr.send();
  };
  const getPdf = async () => {
    await axios.get("/get-pdf", { responseType: "blob" }).then((res) => {
      const newPdf = new Blob([res.data], {
        type: "application/pdf",
      });
      // saveAs(newPdf,'newPdf.pdf');
      const fileURL = URL.createObjectURL(newPdf);
      uploadToStorage(fileURL)
      const pdfWindow = window.open();
      pdfWindow.location.href = fileURL;
    });
  };
  let detail = props.detail;
  const [priscription, setPriscription] = useState([]);
  const [input, setInput] = useState("");
  return (
    <div className="main-prescription" id="main-prescription">
      <div className="priscription-box">
        <div className="head">
          <h1>Add Priscription</h1>
        </div>
        <form
          className="input-area"
          onSubmit={(e) => {
            e.preventDefault();
            console.log(priscription);
            if (input.trim() != "") {
              setPriscription([...priscription, input]);
              setInput("");
            }
          }}
        >
          <input
            type="text"
            placeholder="type here..."
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
          <button type="submit" className="btn primary">
            Add
          </button>
        </form>
        <div className="search-results">
          {priscription.map((res, index) => {
            return (
              <div className="item" id={`priscription-${index + 1}`}>
                <div className="left">
                  <h2>{res}</h2>
                </div>
                <div className="right">
                  <i
                    class="fas fa-minus-circle"
                    onClick={() => {
                      let arr = priscription;
                      arr.splice(index, 1);
                      setPriscription(arr);
                    }}
                  ></i>
                </div>
              </div>
            );
          })}
        </div>
        <div className="det-box but">
          <button
            className="btn secondary"
            onClick={() => {
              document.getElementById("main-prescription").style.opacity = "0";
              document.getElementById("main-prescription").style.zIndex = "-1";
            }}
          >
            Cancel
          </button>
          <button
            className="btn primary"
            onClick={async () => {
              detail.precription = priscription;
              console.log(detail);
              props.setLoad(1);
              await axios.post("/generate-pdf", detail).then(async () => {
                window.alert("Pdf updated");
              });
              props.setLoad(0);
            }}
          >
            Submit
          </button>
          <button className="btn primary" onClick={getPdf}>
            Show PDF
          </button>
        </div>
      </div>
    </div>
  );
}

export default Priscription;
