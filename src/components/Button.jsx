import PropTypes from "prop-types";

function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
}) {
  return <button>{children}</button>;
}

//prop-types for prop validation
Button.propTypes = {
  checkVariation: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) + //if primary is undefined, this gives 0 else 1
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger);

    if (count > 1) {
      throw new Error(
        "Only one of primary,secondary,succes,warning and danger can be true"
      );
    }
  },
};

export default Button;
