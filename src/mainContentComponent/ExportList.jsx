import React from "react";

function ExportList() {
  return (
    <form action="">
      <div className="firstCol">
        <label htmlFor="">Subject</label>
        <input type="text" />
        <label htmlFor="">List</label>
        <select name="" id="">
          <option value="">I dont know</option>
        </select>
        <label htmlFor="">Email</label>
        <input type="email" />
        <label htmlFor="">Phone</label>
        <input type="text" />
        <label htmlFor="">Message</label>
        <textarea name="" id="" cols="30" rows="10">
          type your message here
        </textarea>
      </div>
      <div className="btns">
        <a href="index.js">
          <button>Cancel</button>
        </a>
        <input type="submit" value="Submit" />
      </div>
    </form>
  );
}

export default ExportList;
