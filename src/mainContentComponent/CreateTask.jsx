import React from "react";

function CreateTask() {
  return (
    <form action="self" className="form">
      <div className="firstCol">
        <label htmlFor="">Name</label>
        <input type="text" />
        <label htmlFor="">Priority</label>
        <select name="" id="">
          <option value="HIGH">HIGH</option>
          <option value="MID">MID</option>
          <option value="LOW">LOW</option>
        </select>
        <label htmlFor="">Status</label>
        <select>
          <option value="toStart">To Start</option>
          <option value="ongoing">Ongoing</option>
          <option value="done">Done</option>
          <option value="overdue">Overdue</option>
        </select>
        <label htmlFor="">Start Date</label>
        <input type="date" />
        <label htmlFor="">Due Date</label>
        <input type="date" />
        <label htmlFor="">Group</label>
        <input type="text" name="" id="" />
        <label htmlFor="">Category</label>
        <input type="text" name="" id="" />
      </div>
      <div className="secondCol">
        <label htmlFor="">Recurring Task</label>
        <input type="checkbox" />
        <label htmlFor="">Frequency</label>
        <select name="" id="">
          <option value="">Daily</option>
          <option value="">Weekly</option>
          <option value="">Fortnightly</option>
          <option value="">Monthly</option>
        </select>
        <label htmlFor="">End Date</label>
        <input type="date" />
        <label htmlFor="">Description</label>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="type your description here"
        />
        <a href="index.js">
          <button>Cancel</button>
        </a>
        <input type="submit" value="Submit" />
      </div>
    </form>
  );
}

export default CreateTask;
