import { useState, useEffect } from "react";

export default function useDarkMode(prefersDark) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("isDark");
    stored ? setIsDark(stored === "true") : setIsDark(prefersDark);
  }, [prefersDark]);

  return [isDark, setIsDark];
}
