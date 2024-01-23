import { IButton } from "@/lib/interfaces";

const Button = ({ message, type }: IButton) => {
  return (
    <button className={type === "hollow" ? "hollow-btn" : "round-btn"}>
      {message}
    </button>
  );
};

export default Button;
