import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import Link from 'next/link';

function LanguageSwitcher() {
  const router = useRouter();
  return (
    <LanguageSwitcherStyled>
      <Link href={router.asPath} locale={'kr'}>
        <button className={router.locale === 'kr' ? 'is-active' : ''}>KR</button>
      </Link>
      <Link href={router.asPath} locale={'en'}>
        <button className={router.locale === 'en' ? 'is-active' : ''}>EN</button>
      </Link>
    </LanguageSwitcherStyled>
  );
}

const LanguageSwitcherStyled = styled.div`
  button.is-active {
    background: #000;
    color: #fff;
  }
`;

export default LanguageSwitcher;
