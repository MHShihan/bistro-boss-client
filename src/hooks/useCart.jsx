import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useCart = () => {
  const axiosInstance = useAxiosSecure();
  const { user } = useAuth();

  const getCartsData = async () => {
    const res = await axiosInstance.get(`/user/carts?email=${user?.email}`);
    return res.data;
  };

  //   queryFn: async () => {
  //     const res = await axiosInstance.get(`/user/carts?email=${user.email}`);
  //     return res.data;
  //   },

  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["cart", user?.email],
    queryFn: getCartsData,
  });

  return [cart, refetch];
};

export default useCart;