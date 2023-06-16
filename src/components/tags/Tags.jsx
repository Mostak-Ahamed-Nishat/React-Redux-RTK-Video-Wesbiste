import { useEffect } from "react";
import Tag from "./Tag";

import { useDispatch, useSelector } from "react-redux";
import { fetchTags } from "../../features/tags/tagsSlice";
import Loading from "../UI/Loading";
export default function Tags() {
  const { tags, isError, isLoading, error } = useSelector(
    (state) => state.tags
  );
  const {id}=tags

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTags());
  }, [dispatch]);

  let content;

  if (isLoading) content = <Loading />;
  // eslint-disable-next-line no-unused-vars
  if (!isLoading && isError)
    content = <div className="col-span-12">{error}</div>;
  // eslint-disable-next-line no-unused-vars
  if (!isError && !isLoading && tags.length === 0)
    content = <div className="col-span-12">No Tags Found</div>;
  // eslint-disable-next-line no-unused-vars
  if (!isError && !isLoading)
    // eslint-disable-next-line no-unused-vars
    content = tags.map((tag) => <Tag key={id} tag={tag} />);

  return (
    <section>
      <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto">
        {content}
      </div>
    </section>
  );
}
