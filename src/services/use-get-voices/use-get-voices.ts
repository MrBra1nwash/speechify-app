import { useEffect, useMemo } from "react";
import { Voice } from "../../types/voice";
import { useFetchData } from "../use-fetch-data/use-fetch-data";

export const useGetVoicesOptions = () => {
  const { data, fetchData } = useFetchData<Voice[]>({
    url: "v1/voices",
    method: "GET",
  });

  const options = useMemo(
    () =>
      (data || []).map((voice) => ({
        value: voice.id,
        label: voice.display_name,
      })),
    [data]
  );

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return options;
};
