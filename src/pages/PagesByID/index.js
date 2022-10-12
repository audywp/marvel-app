import React, { useEffect } from "react";
import Tumb from "../../components/Card/Tumb";
import Loader from "../../components/Loader";
import { useGetData } from "../../helpers/request";

export default function PagesByID() {
  const query = new URLSearchParams(window.location.search);
  const id = query.get("reference");
  const from = query.get("from");
  const { data, loading, getData, dataOpsi, dataChar } = useGetData(
    `/${from}/${id}`,
    true,
    "creators"
  );

  const detailData = data?.data?.results?.[0] || {};
  const dataOpsional = dataOpsi?.data?.results || [];
  const dataCharacter = dataChar?.data?.results || [];
  console.log(dataCharacter);

  useEffect(() => {
    if (!data.data?.results?.length > 0) {
      getData();
    }
  }, [getData, data]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="bg-white">
      <div className="pt-6">
        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl h-96 lg:gap-x-8 lg:px-8">
          <div className="aspect-w-3 aspect-h-4 overflow-hidden rounded-lg lg:block">
            <img
              src={`${detailData?.thumbnail?.path}.${detailData?.thumbnail?.extension}`}
              alt="Two each of gray, white, and black shirts laying flat."
              className="h-full w-full object-contain object-center"
            />
          </div>
        </div>

        <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              {detailData.title}
            </h1>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8">
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900">
                  {detailData.description}
                </p>
              </div>
            </div>

            <div className="mt-10">
              <p className="text-gray-900 text-lg font-bold">Characters</p>

              <div className="mt-4 flex flex-wrap">
                {dataCharacter?.length > 0 ? (
                  dataCharacter?.map((val, idx) => {
                    return (
                      <Tumb
                        key={idx.toString()}
                        url={
                          val?.thumbnail?.path + "." + val?.thumbnail?.extension
                        }
                        title={val.name}
                      />
                    );
                  })
                ) : (
                  <p>Sorry, There is no data for Character</p>
                )}
              </div>
            </div>

            <div className="mt-10">
              <p className="text-gray-900 text-lg font-bold">Creators</p>

              <div className="mt-4 flex flex-wrap">
                {dataOpsional?.length > 0 ? (
                  dataOpsional?.map((val, idx) => {
                    return (
                      <Tumb
                        key={idx.toString()}
                        url={
                          val?.thumbnail?.path + "." + val?.thumbnail?.extension
                        }
                        title={val.fullName}
                      />
                    );
                  })
                ) : (
                  <p>Sorry, There is no data for Creators</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
