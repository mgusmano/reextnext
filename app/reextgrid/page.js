"use client";
import ReExt from '@gusmano/reext';
import { useState, useEffect } from 'react';
export default function ReExtGrid() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const doAsync = async () => {
      await import('./BigDataStore.js');
      setReady(true);
    };
    doAsync();
  }, []);

  const onSelect = (grid, selected) => {
    var row = selected.data;
    alert(JSON.stringify(row))
  };

  if (!ready) {
    return <div>Loading...</div>;
  } else {  
    return (
      <div className="zcol">

        <ReExt xtype='logosmall' style={{ height: 50, margin: '5px' }} />

        <ReExt xtype='grid'
          style={{ padding: 10 }}
          onSelect={onSelect}
          config={{
            title: 'Big Data / Infinite Grid - 50,000 rows',
            store: { type: 'virtualforum' },
            grouped: false,
            columns: [
              { text: 'First Name', width: 100, dataIndex: 'firstName' },
              { text: 'Last Name', width: 100, dataIndex: 'lastName' },
              { text: 'Title', width: 200, dataIndex: 'title' },
              { text: 'Address', flex: 1, dataIndex: 'address' },
              { text: 'Company', flex: 1, dataIndex: 'company' }]

          }}
        />

      </div>);
  }

}