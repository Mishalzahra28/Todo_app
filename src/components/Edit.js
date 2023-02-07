import "./edit.css";
function Edit(props) {
  return (
    <div>
      <input
        value={props.data}
        onChange={props.dataChangeHandler}
        className="inputField"
      />
      <button
        type="button"
        className="update_btn"
        onClick={props.updateHandler}
      >
        Update
      </button>
    </div>
  );
}

export default Edit;
