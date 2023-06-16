import { useEffect } from "react";
import Player from "../components/description/Player";
import VideoDescription from "../components/description/VideoDescription";
import RelatedVideo from "../components/list/RelatedVideoList";
import { useDispatch, useSelector } from "react-redux";
import {fetchVideo} from "../features/video/videoSlice";
import { useParams } from "react-router-dom";
import Loading from "../components/UI/Loading";

export default function Video() {
  //Get the parameter from URL
  const { videoId } = useParams(); //from App Router Path


  //Get the single Video
  const { video, isError, isLoading, error } = useSelector(
    (state) => state.video
  );

  //Get the dispatch
  const dispatch = useDispatch();

  //dispatch the extra createAsyncThunk method
  useEffect(() => {dispatch(fetchVideo(videoId))},[videoId, dispatch]);

  // decide what to render
  let content = null;

  if (isLoading) content = <Loading />;
  if (!isLoading && error) content = <div className="col-span-12">{error}</div>;
  if (!isLoading && !isError && !video?.id)
    content = <div className="col-span-12">No Video Found</div>;

  if (!isLoading && !isError && video?.id)
    content = (
      <div className="grid grid-cols-3 gap-2 lg:gap-8">
        <div className="col-span-full w-full space-y-8 lg:col-span-2">
          {/* video player */}
          <Player video={video} />

          {/* video description */}

          <VideoDescription video={ video }/>
        </div>
        {/* related videos */}
        <RelatedVideo currentVideoId={video.id} tags={video.tags} />
      </div>
    );

  return (
    <section className="pt-6 pb-20">
      <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
        {content}
      </div>
    </section>
  );
}
