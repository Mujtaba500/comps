import PropTypes from "prop-types";
import classNames from "classnames";
import { twMerge } from "tailwind-merge";

function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  onClick,
}) {
  const classes = twMerge(
    classNames("flex items-center px-3 py-1.5 border", {
      "border-blue-500 bg-blue-500 text-white": primary,
      "border-gray-900 bg-gray-900 text-white": secondary,
      "border-green-500 bg-green-500 text-white": success,
      "border-yellow-500 bg-yellow-500 text-white": warning,
      "border-red-500 bg-red-500 text-white": danger,
      "rounded-full": rounded,
      "bg-white": outline,
      "text-blue-500": outline && primary,
      "text-gray-900": outline && secondary,
      "text-green-500": outline && success,
      "text-yellow-400": outline && warning,
      "text-red-500": outline && danger,
    })
  );

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
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
