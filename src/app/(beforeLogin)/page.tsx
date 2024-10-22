import styles from '@/app/page.module.css'; // css module
import Image from 'next/image';
import zLogo from '@/public/zlogo.png';
import Link from 'next/link';

export default function Main() {
  return (
    <>
      <div className={styles.left}>
        <Image src={zLogo} alt="logo" />
      </div>
      <div className={styles.right}>
        <h1>지금 일어나고 있는 일</h1>
        <h2>지금 가입하세요.</h2>
        <Link href="/i/flow/signup" className={styles.signup}>
          계정 만들기
        </Link>
        <h3>이미 트위터에 가입하셨나요?</h3>
        {/* 링크를 통해 i/flow/login 으로 처음 넘어갈 때는 인터셉팅 라우트가 경로를 가로채서 인터셉팅 라우트의 경로로 이동된다. 새로고침 하면 원래의 i/flow/login 경로로 이동한다. */}
        <Link href="i/flow/login" className={styles.login}>
          로그인
        </Link>
      </div>
    </>
  );
}
