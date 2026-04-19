import { useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import { logOut } from "../api/authApi";

const TIMEOUT_MS = 2 * 60 * 1000; // 2 min

export const useInactivityLogout = () => {
  const timer = useRef<number>(undefined);
  const navigate = useNavigate();

  useEffect(() => {
    const resetTimer = () => {
      clearTimeout(timer.current);
      timer.current = setTimeout(async () => {
        await logOut();
        navigate("/login");
      }, TIMEOUT_MS);
    };

    const events = ["mousemove", "keydown", "click", "scroll"];
    events.forEach((e) => window.addEventListener(e, resetTimer));
    resetTimer();

    return () => {
      clearTimeout(timer.current);
      events.forEach((e) => window.removeEventListener(e, resetTimer));
    };
  }, [navigate]);
};
