import type { ReactNode } from "react";
import { useInactivityLogout } from "../../hooks/authHooks";


const MainLayout = ({ children }: { children?: ReactNode }) => {
  useInactivityLogout();

  return (
    <div className="min-h-screen min-w-screen grid grid-cols-12">
      {children}
    </div>
  );
};

export default MainLayout;
