import React, { useEffect } from "react";
import RelatedVideoListItemSingle from "./RelatedVideoListItemSingle";
import { useDispatch, useSelector } from "react-redux";
import { fetchRelatedVideos } from "../../features/relatedVideos/relatedVideos";
import Loading from "../UI/Loading";

export default function RelatedVideo({ currentVideoId, tags }) {

  const { relatedVideos, isLoading, isError, error } = useSelector(
    (state) => state.relatedVideos
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRelatedVideos({tags,id:currentVideoId}))
  }, [currentVideoId, dispatch, tags]);

 // decide what to render
 let content = null;

 if (isLoading) content = <Loading/>
 if (!isLoading && error) content = <div className="col-span-12">{error}</div>;
 if (!isLoading && !isError && !relatedVideos?.id)
   content = <div className="col-span-12">No Related Video Found</div>;

 if (!isLoading && !isError && relatedVideos.length>0)
   content = relatedVideos.map(video=> <RelatedVideoListItemSingle key={video.id} video={video}/>)


  return (
    <>
      <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
        {/* single related video  */}
        {content}
      </div>
    </>
  );
}
