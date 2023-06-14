import React from "react";
import RelatedVideoListItemSingle from "./RelatedVideoListItemSingle";

export default function RelatedVideo() {
  return (
    <>
      <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
        {/* single related video  */}
        <RelatedVideoListItemSingle />
      </div>
    </>
  );
}
