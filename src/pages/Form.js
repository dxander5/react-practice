import { useState, Fragment, useEffect, useRef } from "react";
export default function Form() {
  // const [formEnviado, setFormEnviado] = useState(false);
  const [display, setDisplay] = useState("d-none");
  const formRef = useRef(null);
  function submit(e) {
    e.preventDefault();
    formRef.current.reset();
    // console.log(formRef.current);
    console.log("enviando");
    setDisplay("d-block");
    // setFormEnviado(true);
  }

  function onClick() {
    console.log("click");
    setDisplay("d-none");
  }

  // useEffect(() => {
  //   if (display === "d-flex") {
  //     setTimeout(() => {
  //       setDisplay("d-none");
  //     }, 3000);
  //   }
  // }, [display]);
  return (
    <Fragment>
      <form
        action="https://formsubmit.co/jonhpred8@gmail.com"
        method="POST"
        onSubmit={submit}
        target="__blank"
        ref={formRef}
      >
        <input type="email" name="email" placeholder="Email Address" />
        <input type="text" name="name" placeholder="name" />
        <input type="text" name="subject" placeholder="subject" />
        <input type="text" name="comments" placeholder="comments" />
        <input type="submit" value="Submit" />
        {/* <input type="hidden" name="_next" value="" /> */}
        <input type="hidden" name="_captcha" value="false" />
      </form>
      <div className={`alert alert-warning alert-dismissible fade show ${display}`} role="alert">
        <strong>Holy guacamole!</strong> You should check in on some of those
        fields below.
        <button
          type="button"
          className="btn-close"
          onClick={onClick}
          // data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
      <h1>HAHAHAH</h1>
    </Fragment>
  );
}
