import { type ReactNode } from "react";
import Menu from "./Menu/Menu";
import GotoTop from "./GotoTop/GotoTop";

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div className="vazir">
      <Menu />
      <GotoTop />
      {children}
    </div>
  );
};

export default Container;
