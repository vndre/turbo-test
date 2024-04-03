'use client'

import styles from "./page.module.css";
import { Button } from "@repo/ui";

export default function Page(): JSX.Element {
  return (
    <main className={styles.main}>
      <Button color="failure" onClick={() => {}}>
        Click me
      </Button>
    </main>
  );
}
