import React, { useRef, useEffect, forwardRef } from 'react';

// export const Test = forwardRef((props, ref) => {
//     console.log('Test ref', ref)
//     useEffect(() => {
//         (async () => {
//             console.log('TestRef.current', ref.current)
//         })();
//     }, [])

//     return (
//         <div ref={ref}>
//             test component
//         </div>
//     );
// });

export function Test(props) {
    const TestRef = useRef(null);
    useEffect(() => {
      (async () => {
        console.log('TestRef.currrent', TestRef.current)
      })();
    }, [])
    return (
      <div ref={TestRef}>
        test component
      </div>
    );
  }
