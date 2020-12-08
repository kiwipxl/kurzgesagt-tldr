import React from 'react';
import { useHistory } from 'react-router-dom';
// import logo from '../assets/logo.png';
import { VscGithubInverted } from 'react-icons/vsc';
import { IoArrowBack } from 'react-icons/io5';

const logo = '';

export default (props) => {
    const [expanded, setExpanded] = React.useState(true);
    const routerHistory = useHistory();

  function onScroll(ev) {
    setExpanded(expanded => {
        return window.pageYOffset < 100;
    })
  };

  React.useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function onClickBack() {
    routerHistory.goBack();
  }

  return (
    <div>
      <div className='header' style={{marginTop: expanded ? 0 : -70}}>
          {props.showBack &&
            <a onClick={onClickBack} className='header-back'>
              <IoArrowBack className='header-back-icon' />
            </a>
          }

          <a href='/' className='header-brand'>
              <img
                  className='header-logo'
                  src={logo}
                  alt='logo'
              />

              <span className='header-logo-text'>kurzgesagt-tldr</span>
          </a>

          <a href='https://github.com/kiwipxl/kurzgesagt-tldr' target='_blank' className='header-github'>
              <VscGithubInverted className='header-github-icon' />
          </a>
      </div>

      {props.children}
    </div>
  )
};