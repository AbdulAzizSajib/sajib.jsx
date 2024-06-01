import useTheme from "../Hooks/useTheme";
import SliderToggle from "./SliderToggle";

const Example = () => {
  const { theme } = useTheme();

  return (
    <div
      className={`grid  place-content-center px-4 transition-colors ${
        theme === "light" ? "bg-white" : "bg-slate-900"
      }`}
    >
      <SliderToggle />
    </div>
  );
};

export default Example;
