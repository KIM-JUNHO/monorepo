import styled from '@emotion/styled';
import { useRouter } from 'next/router';

function LanguageSwitcher() {
  const router = useRouter();
  return (
    <LanguageSwitcherStyled>
      <button
        type="button"
        onClick={() => router.push(router.pathname, router.pathname, { locale: 'kr' })}
        className={router.locale === 'kr' ? 'is-active' : ''}
      >
        KR
      </button>
      <button
        type="button"
        onClick={() => router.push(router.pathname, router.pathname, { locale: 'en' })}
        className={router.locale === 'en' ? 'is-active' : ''}
      >
        EN
      </button>
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
