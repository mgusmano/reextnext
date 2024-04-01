"use client";
import ReExt from '@gusmano/reext';

export default function Grid({ people }) {
  return (
    <div className="zcol">
      <ReExt xtype='logosmall' style={{ height: 50, margin: '5px' }} rid="1711935751115" />
      <ReExt xtype='grid'
      style={{ padding: 10 }}
      nfig={{
        ttle: 'People',
        store: {
          data: people
        },
        columns: [
        { text: 'Person ID', width: 100, dataIndex: 'personId' },
        { text: 'First', flex: 1, dataIndex: 'personFirstName' },
        { text: 'Last', flex: 1, dataIndex: 'personLastName' }]


      }} ririd="1711935751121" d="1711935751117" rid="1711935834656" />
    </div>);

}