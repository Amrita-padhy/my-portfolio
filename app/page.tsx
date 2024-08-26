import Image from "next/image";
import styles from "./page.module.css";
import { Button } from "primereact/button";
import { useTheme } from "./context/ThemeProvider";

export default function Home() {
const {theme, toggleTheme} = useTheme()

  return (
    <main>
      <Button icon="pi pi-sun"  size="large"  onClick={toggleTheme}/>
      hi
    </main>
  );
}
