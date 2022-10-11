import React, { useEffect } from "react";
import { ThreeDots } from "react-loader-spinner";
import CardImage from "../../components/Card/Image";
import Loader from "../../components/Loader";
import { useGetData } from "../../helpers/request";

export default function Series() {
  const { data, loading, getData, loadMore, loadingLoadMore, isEnded } =
    useGetData("/series");

  useEffect(() => {
    if (!data.data?.results?.length > 0) {
      getData();
    }
  }, [getData, data]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <p className="text-2xl">Events</p>
      <div className="flex flex-wrap justify-center">
        {data?.data?.results.map((val, idx) => {
          return (
            <CardImage
              key={idx.toString()}
              from="series"
              refID={val.id}
              title={val.title}
              url={`${val.thumbnail.path}.${val.thumbnail.extension}`}
            />
          );
        })}
      </div>

      <div class="mb-10 flex justify-center items-center">
        {loadingLoadMore ? (
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="#4fa94d"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        ) : isEnded ? null : (
          <button
            onClick={loadMore}
            class="flex w-80 items-center justify-center rounded-md border border-transparent bg-blue-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg"
          >
            LOAD MORE
          </button>
        )}
      </div>
    </div>
  );
}
