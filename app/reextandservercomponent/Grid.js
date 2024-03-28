"use client";
import ReExt from '@gusmano/reext';
import { useState, useEffect } from 'react';
export default function Grid({ people }) {
  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', border: '0px solid green' }}>
      <ReExt xtype='logosmall' style={{ height: 50, margin: '5px' }}/>

      <ReExt xtype='grid'
        style={{ padding: 10 }}
        config={{
          title: 'People',
          store: {
            data: people,
          },
          columns: [
            { text: 'Person ID', width: 100, dataIndex: 'personId' },
            { text: 'First', flex: 1, dataIndex: 'personFirstName' },
            { text: 'Last', flex: 1, dataIndex: 'personLastName' },
          ]
        }} />
    </div>
  );
}