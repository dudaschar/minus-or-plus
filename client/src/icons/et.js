import React from 'react';
import PropTypes from 'prop-types';

export const EtIcon = ({ width, height }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width={width}
    height={height}
  >
    <path
      d="M487.226 231.226C487.226 358.928 356.338 512 256 512S24.774 358.928 24.774 231.226 128.298 0 256 0s231.226 103.523 231.226 231.226z"
      fill="#c9c6ca"
    />
    <path
      d="M256 423.226c-19.46 0-37.282-7.234-48.887-19.847a10.325 10.325 0 01.605-14.589c4.194-3.847 10.734-3.589 14.589.605 7.597 8.258 20.194 13.185 33.694 13.185s26.097-4.927 33.694-13.185c3.855-4.194 10.403-4.452 14.589-.605a10.325 10.325 0 01.605 14.589c-11.607 12.613-29.429 19.847-48.889 19.847z"
      fill="#6e5a64"
    />
    <path
      d="M305.548 495.484c-100.338 0-231.226-161.33-231.226-289.032 0-80.667 41.334-151.65 103.951-193.022-89.459 31.93-153.5 117.368-153.5 217.796C24.774 358.928 155.662 512 256 512c20.459 0 42.186-6.45 63.817-17.665-4.806.685-9.58 1.149-14.269 1.149z"
      fill="#b7b2b8"
    />
    <path
      d="M172.464 337.709c-31.589 4.625-60.946-17.233-65.571-48.822l-7.178-49.026c-4.625-31.589 17.233-60.946 48.822-65.571 31.589-4.625 60.946 17.233 65.571 48.822l7.178 49.026c4.625 31.589-17.233 60.946-48.822 65.571z"
      fill="#6e5a64"
    />
    <path
      d="M194.584 317.778c-31.589 4.625-60.946-17.233-65.571-48.822l-11.653-79.585c-13.292 12.505-20.49 31.063-17.646 50.49l7.178 49.026c4.625 31.589 33.983 53.447 65.571 48.822 17.081-2.501 31.267-12.267 40.009-25.673-5.476 2.796-11.466 4.802-17.888 5.742z"
      fill="#5a4650"
    />
    <path
      d="M339.536 337.709c-31.589-4.625-53.447-33.982-48.822-65.571l7.178-49.026c4.625-31.589 33.982-53.447 65.571-48.822s53.447 33.982 48.822 65.571l-7.178 49.026c-4.625 31.589-33.982 53.448-65.571 48.822z"
      fill="#6e5a64"
    />
    <path
      d="M366.442 324.957c-31.589-4.625-53.447-33.983-48.822-65.571l11.653-79.585c-16.319 8.17-28.535 23.885-31.38 43.312l-7.178 49.026c-4.625 31.589 17.233 60.946 48.822 65.571 17.081 2.501 33.471-2.788 45.69-13.125-6.049 1.107-12.363 1.312-18.785.372z"
      fill="#5a4650"
    />
  </svg>
);

EtIcon.defaultProps = {
  width: '40px',
  height: '40px',
};

EtIcon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
};