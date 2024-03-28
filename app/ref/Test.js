import React, { useRef, useEffect } from 'react';

export function Test(props) {
    const TestRef = useRef(null);
    useEffect(() => {
      (async () => {
        console.log('TestRef.currrent', TestRef.current)
      })();
    }, [])
    return (
      <div ref={TestRef}>
        test component2
      </div>
    );
  }
