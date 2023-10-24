import 'react-fancybox/lib/fancybox.css';

import React, { useEffect, useRef } from 'react';
import { ReactFancyBox as NativeFancybox } from 'react-fancybox';

function Fancybox(props) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    const delegate = props.delegate || '[data-fancybox]';
    const options = props.options || {};

    const fancyboxInstance = new NativeFancybox();

    // Initialize the fancybox instance with options
    fancyboxInstance.bind(container, delegate, options);

    return () => {
      // Unbind the fancybox instance
      fancyboxInstance.unbind(container);
    };
  }, [props.delegate, props.options]);

  return <div ref={containerRef}>{props.children}</div>;
}

export default Fancybox;
