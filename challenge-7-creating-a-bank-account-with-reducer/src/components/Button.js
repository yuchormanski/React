function Button({ dispatch, type, status, children, payload }) {
  return (
    <button
      className="btn"
      onClick={() => dispatch({ type: type, payload: payload })}
      disabled={status}
    >
      {children}
    </button>
  );
}

export default Button;
