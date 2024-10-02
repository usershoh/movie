import { useQuery } from "@tanstack/react-query";
import { useAxios } from "../useAxios";

export const useQueryHandler = ({ pathname, url }) => {
  const axios = useAxios();
  return useQuery({
    queryKey: [pathname],
    queryFn: () =>
      axios({ url })
        .then((res) => res.data)
        .catch((error) => console.log(error)),

    refetchOnWindowFocus: false,
    keepPreviousData: false,
  });
};
