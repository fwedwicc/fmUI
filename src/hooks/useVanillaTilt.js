import { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';

const useVanillaTilt = (options) => {
  const tiltRef = useRef(null);

  useEffect(() => {
    const { current: tiltNode } = tiltRef;
    VanillaTilt.init(tiltNode, options);

    return () => {
      tiltNode.vanillaTilt.destroy();
    };
  }, [options]);

  return tiltRef;
};

export default useVanillaTilt;
