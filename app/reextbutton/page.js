"use client";
import ReExt from "@gusmano/reext";

export default function Home() {
  return (
    <div>
      <ReExt xtype='logosmall' style={{ height: 90, margin: '5px' }} />
      <ReExt
        xtype="button"
        style={{ padding: 10, width: 100 }}
        config={{ text: "Hello World" }}
        onTap={() => alert("Hello World")}
      />
    </div>
  );
}