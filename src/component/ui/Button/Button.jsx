export function Button({ className = "", ...delegated }) {
  return (
    <>
      <button
        className={`${StyleSheet.button} ${className}`}
        {...delegated}
      ></button>
    </>
  );
}

Button.propTypes;
