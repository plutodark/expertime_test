import React from 'react';
import T from 'prop-types';
import Desktop from './desktop';

const Header = ({ isMobile, isWhite }) => {
  const renderMobile = () => (
    <div className='header--mobile'>

    </div>
  );
  return isMobile ? renderMobile() : <Desktop isWhite={isWhite} />;
};

Header.defaultProps = {
  isMobile: false,
};
Header.propTypes = {
  isMobile: T.bool,
}

export default Header;
