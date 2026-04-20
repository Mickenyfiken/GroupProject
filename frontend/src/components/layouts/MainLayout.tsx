import type { ReactNode } from "react";
import { useInactivityLogout, useTokenRefresh } from "../../hooks/authHooks";

const MainLayout = ({ children }: { children?: ReactNode }) => {
  useInactivityLogout();
  useTokenRefresh();

  return (
    <div className="min-h-screen min-w-screen grid grid-cols-12">
      {children}
    </div>
  );
};

export default MainLayout;
