import React, { useEffect, useRef } from 'react';

const MicroFrontend = ({ name, host }) => {
  const scriptId = `micro-frontend-script-${name}`;
  const containerRef = useRef(null);

  useEffect(() => {
    const renderMicroFrontend = () => {
      window[`render${name}`](`${name}-container`, window.history);
    };

    if (document.getElementById(scriptId)) {
      renderMicroFrontend();
      return;
    }

    fetch(`${host}/asset-manifest.json`)
      .then(res => res.json())
      .then(manifest => {
        const script = document.createElement('script');
        script.id = scriptId;
        script.crossOrigin = '';
        script.src = `${host}${manifest.files['main.js']}`;
        script.onload = renderMicroFrontend;
        document.head.appendChild(script);
      });

    return () => {
      window[`unmount${name}`] && window[`unmount${name}`](`${name}-container`);
    };
  }, [name, host]);

  return <main id={`${name}-container`} ref={containerRef} />;
};

export default MicroFrontend;