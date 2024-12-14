import { ReactNode } from "react";
import styles from "@/app/page.module.css";

type Props = { children: ReactNode; modal: ReactNode };

export default function Layout({ children, modal }: Props) {
  return (
    <div className={styles.container}>
      {children}
      {modal}
      {/* children 에는 page.tsx, modal 에는 @modal 패러렐 라우트가 들어가게 된다 */}
    </div>
  );
}

// 주소가 localhost:3000일 때는 children->page.tsx, modal->@modal/default.tsx
// 주소가 localhost:3000/i/flow/login 때는 children->i/flow/login/page.tsx, modal->@modal/i/flow/login/page.tsx
