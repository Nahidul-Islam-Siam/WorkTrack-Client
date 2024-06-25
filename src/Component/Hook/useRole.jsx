
import { useQuery } from "@tanstack/react-query";
// import { axiosSecure } from "./useAxiosSecure";
import useAuth from "./UseAuth";
import { axiosPublic } from "./useAxiosPublic";

const useRole = () => {
  const { user,loading } = useAuth();

  const { data: role, isLoading } = useQuery({
    queryKey: ["role",user?.email],
    enabled:!loading && !!user?.email,
    queryFn: async () => {
      const { data } = await axiosPublic(`/user/${user?.email}`);
      return data.role;
    },
  });

  // fetch user info using logged in email
  return [role,isLoading];
};

export default useRole;
