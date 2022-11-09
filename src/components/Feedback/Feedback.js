import React from "react";

const Feedback = () => {
  return (
    <>
      <section id="Feedback"  class="d-flex flex-row">

        <div className='col-6 p-5'>
        <img alt="Qries" src="https://content3.jdmagicbox.com/comp/service_catalogue/language-therapy-011pxx11.xx11.210709154945.y3g2-2ci2d06.jpg" style={{height:400  }}
       />
        </div>

        <form method="Post" action="submit" className="col-6 ">
        <h4 className="m-5">Send us your feedback</h4>
          <div class="form-floating mb-3 m-5">
            <input
              type="text"
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">What was the reason for your visit ?</label>
          </div>
          <div class="form-floating m-5">
            <input
              type="password"
              class="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label for="floatingPassword">Do you have any suggestion to make our website better ?</label>
          </div>
          <button type="button" class="btn btn-primary mx-5">Submit</button>
        </form>
      </section>
    </>
  );
};

export default Feedback;