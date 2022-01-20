import React from "react";

export default function Add(props) {
  return (
    <form onSubmit={props.onSubmit} style={{ paddingLeft: 40, marginTop: 16 }}>
      <input
        type="text"
        value={props.value}
        onChange={props.onChange}
        placeholder="Add any task!"
      />
      <button type="submit">Add To Do</button>
    </form>
  );
}
