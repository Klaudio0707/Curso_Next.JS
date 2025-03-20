
import styles from "./page.module.css";
import Link from "next/link";
export default function Home() {
  return (
    <div className={styles.page}>
      <h1>Principal</h1>
      <h1>Página Inicial</h1>
      <Link href="/about">Ir para Sobre Nós</Link>
      <Link href="/contact">Ir para Contato</Link>

    </div>
  );
}
