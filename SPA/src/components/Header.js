import React from 'react';
import { useRouter } from 'next/router';
import { VscGithubInverted } from 'react-icons/vsc';
import { IoArrowBack } from 'react-icons/io5';

const Component = (props) => {
  const [expanded, setExpanded] = React.useState(true);
  const router = useRouter();

  function onScroll(ev) {
    setExpanded((expanded) => {
      return window.pageYOffset < 100;
    });
  }

  React.useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function onClickBack() {
    if (props.backUrl) {
      router.push(props.backUrl);
    } else {
      router.back();
    }
  }

  return (
    <div>
      <div className="header" style={{ marginTop: expanded ? 0 : -70 }}>
        {props.showBack && (
          <a onClick={onClickBack} className="header-back">
            <IoArrowBack className="header-back-icon" />
          </a>
        )}

        <a href={router.basePath} className="header-brand">
          <img
            className="header-logo"
            src={'/kurzgesagt-tldr/logo.png'}
            alt="logo"
          />

          <span className="header-logo-text">kurzgesagt-tldr</span>
        </a>

        <a
          href="https://github.com/kiwipxl/kurzgesagt-tldr"
          target="_blank"
          className="header-github"
        >
          <VscGithubInverted className="header-github-icon" />
        </a>
      </div>

      {props.children}
    </div>
  );
};

export default Component;
