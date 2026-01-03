import { type ReactNode } from "react";
import Menu from "./Menu/Menu";
import GotoTop from "./GotoTop/GotoTop";
import Icon from "./Icon/Icon";

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div className="vazir">
      <Icon />

      <GotoTop />
      {children}
    </div>
  );
};

export default Container;
