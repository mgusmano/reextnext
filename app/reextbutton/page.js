"use client";
import ReExt from "@gusmano/reext";

export default function Home() {
  return (
    <div className='zcol'>
      <ReExt xtype='logosmall' style={{ height: 50, margin: '5px' }} />
      <ReExt
        xtype="button"
        style={{ padding: 10, width: 100, height: 50 }}
        config={{ text: "Hello World" }}
        onTap={() => alert("Hello World")}
      />
    </div>
  );
}