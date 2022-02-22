import React, { useState } from "react";

const docotors = [
  {
    name: "Dr. Hetu",
    degree : "MBBS",
    adress : "jk, flats ,near ellora ,vadodarat",
  },
  {
    name: "Dr. Zaid",
    degree : "MBBS",
    adress : "jk, flats ,near ellora ,vadodarat",
  },
  {
    name: "Dr. Roop",
    degree : "MBBS",
    adress : "jk, flats ,near ellora ,vadodarat",
  },
  {
    name: "Dr. Naitu",
    degree : "MBBS",
    adress : "jk, flats ,near ellora ,vadodarat",
  },
  {
    name: "Dr. Nati",
    degree : "MBBS",
    adress : "jk, flats ,near ellora ,vadodarat",
  },
  {
    name: "Dr. Natthu",
    degree : "MBBS",
    adress : "jk, flats ,near ellora ,vadodarat",
  },
  {
    name: "Dr. Hetu",
    degree : "MBBS",
    adress : "jk, flats ,near ellora ,vadodarat",
  },
  {
    name: "Dr. Zaid",
    degree : "MBBS",
    adress : "jk, flats ,near ellora ,vadodarat",
  },
  {
    name: "Dr. Roop",
    degree : "MBBS",
    adress : "jk, flats ,near ellora ,vadodarat",
  },
];
let PaymentDone = 0;
function BookAppointment(props) {
  const [selectedDoc, setSelectedDoc] = useState(-1);

  const Payment = ()=>{
      if(PaymentDone==1){
        props.setPayment(1);
        props.setBookedDoc(docotors[selectedDoc]);
      }
  }
  const NullorNot = ()=>{
      if(selectedDoc==-1){
          return(
              <div className="detail-box">
                  <h3>Nothing is selected</h3>
              </div>
          )
      }
      else{
          return(
              <div className="detail-box">
                  <div className="det-box">
                        <h2><span>Name : </span>{docotors[selectedDoc].name}</h2>
                  </div>
                  <div className="det-box">
                        <h2><span>Degree : </span>{docotors[selectedDoc].degree}</h2>
                  </div>
                  <div className="det-box">
                        <h2><span>Adress : </span>{docotors[selectedDoc].adress}</h2>
                  </div>
                  <div className="det-box but">
                        <button className="btn secondary" onClick={Payment}>Book Now</button>
                  </div>
              </div>
          )
      }
  }
  return (
    <div className="book-appointment">
      <div className="list-of-doc">
        <div className="top">
          <h1>List Of Doctors</h1>
        </div>
        <div className="search-bar">
          <input className="search" type="search" />
        </div>
        <div className="search-results">
          {docotors.map((res, index) => {
            return (
              <div className="item" id={`item{index}`} onClick={(e)=>{
                  setSelectedDoc(index);
              }}>
                <div className="left">
                  <h2>{res.name}</h2>
                </div>
                <div className="right">
                  <i class="fas fa-angle-right"></i>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="deatil-of-doc">
        <div className="top">
          <h1>Detail</h1>
        </div>
        {   
            NullorNot()
        }
      </div>
    </div>
  );
}

{
  /* <div className="item">
            <div className="left">
              <h2>Name</h2>
            </div>
            <div className="right">
              <i class="fas fa-angle-right"></i>
            </div>
          </div> */
}
export default BookAppointment;
