import VideoGridItem from "./VideoGridItem";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchVideos } from "../../features/videos/videosSlice";
import Loading from "../UI/Loading";
export default function Grid() {
  const dispatch = useDispatch();

  const { videos, isLoading, isError, error } = useSelector((state) => {
    return state.videos;
  });

  const { tags, search } = useSelector((state) => state.filter);

  useEffect(() => {
    dispatch(fetchVideos({ tags, search }));
  }, [dispatch, search, tags]);

  let content;
  if (isLoading) content = <Loading />;
  // eslint-disable-next-line no-unused-vars
  if (!isLoading && isError)
    content = <div className="col-span-12">{error}</div>;
  // eslint-disable-next-line no-unused-vars
  if (!isError && !isLoading && videos.length === 0)
    content = <div className="col-span-12">No Videos Found</div>;
  // eslint-disable-next-line no-unused-vars
  if (!isError && !isLoading)
    // eslint-disable-next-line no-unused-vars
    content = videos.map((video) => (
      <VideoGridItem key={video.id} video={video} />
    ));
  return (
    <>
      {/* Video Grid  */}
      <section className="pt-12">
        <section className="pt-12">
          <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
            {content}
          </div>
        </section>
      </section>
    </>
  );
}
