module.exports = (data) => {
  const today = new Date();
  const return_prec = () => {
    return data.precription.map((res, index) => {
      if(res!=','){
        return `<h3>${res}</h3>`;
      }
      console.log(res);
    });
  };
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
      html {
        margin: 0;
      }
      body {
        width : 100%;
        height : 100%;
        margin: 0;
        -webkit-print-color-adjust: exact;
        display: flex;
        flex-direction: column;
      }
      .head{
        width : 90%;
        background : rgb(0, 148, 139);
        margin : 0;
        padding : 0;
        margin-left : 5%;
        margin-top : 10px;
        padding : 5px 0;
      }
      .head h1{
        margin : 0;
        padding : 0;
        color : rgb(255, 255, 255);
        font-family: sans-serif;
        font-size: 40px;
        margin-left: 45%;
      }
      .doc_detail{
          width: 90%;
          padding: 5px 0;
          background-color: rgb(0, 198, 187);
          margin: 10px 0;
          margin-left: 5%;
      }
      .doc_detail.user{
          margin-top: 20px;
      }
      h2{
        font-size: 16px;
        font-family: sans-serif;
        font-weight: 700;
        margin: 0;
        padding: 0;
        margin-top: 10px;
        margin-left: 10px;
      }
      h1{
          font-family: sans-serif;
          font-weight: 100;
          color: rgb(0, 198, 187);
          font-size: 20px;
          margin-left: 45%;
          margin-top: 50px;
          margin-bottom: 30px;
      }
      .prec{
          width: 90%;
          margin-left: 5%;
          height: fit-content;
          display: flex;
          flex-direction: column;
      }
      h3{
          margin: 0;
          padding: 0;
          margin-left: 10px;
          margin-top: 10px;
          font-family: sans-serif;
          font-style: oblique;
          font-weight: 100;
      }
      .end{
          width: 90%;
          margin-left: 5%;
          margin-top: 20px;
          border-top: 1px solid rgb(0, 198, 187);
          padding: 5px 0;
      }
      .end h1{
          margin: 0;
          margin-left: 40%;
          font-weight: 100;
          font-size: 20px;
          color: rgb(0, 198, 187);
          padding: 0;
          margin-top: 10px;
      }
      </style>
  </head>
  <body>
      <div class="head">
          <h1>DRUID</h1>
      </div>
      <div class="doc_detail">
        <h2>${data.docname}</h2>
        <h2 class="date">${today}</h2>
      </div>
      <h1>Prescription</h1>
      <div class="prec">
        ${return_prec()}
      </div>
      <div class="doc_detail user">
        <h2>${data.patientName}</h2>
        <h2>Age : ${data.age}</h2>
        <h2>Mobile : ${data.mobile}</h2>
      </div>
      <div class="end">
        <h1>Thank You For Using Druid</h1>
      </div>
  </body>
  </html>
        `;
};
