import React from 'react';

export default function Footer() {
    return (
      <div className="zrow" style={{ height: 30, borderTop: '1px solid #337ab7', alignItems: 'center' }}>
        <div className="zrow" style={{ margin: '0 0 0 10px', alignItems: 'center' }}><div>React: {React.version}</div><div style={{margin:'0 0 0 20px'}}>Next.js: {next.version}</div></div>
      </div>
    );
  }
  