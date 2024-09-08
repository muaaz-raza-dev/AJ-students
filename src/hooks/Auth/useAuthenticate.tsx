"use client";
import Authenticate from "@/api/Auth/authenticate.api";
import { useAppDispatch, useAppSelector } from "@/context/redux-hook";
import { RedcInsertPayload } from "@/context/Slices/auth-slice";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Cookies from "js-cookie";

import { useQuery } from "react-query";
const CookieKey = process.env.NEXT_PUBLIC_COOKIE_KEY || "";
const useAuthenticate = () => {
  const userSessionCookie = Cookies.get(CookieKey)
  const router = useRouter();
  const dispatch = useAppDispatch();
  return useQuery({
    queryKey: ["Authenticate"],
    queryFn: () => userSessionCookie && Authenticate(),
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 60,
    onSuccess(data) {
      if(data){
        const {payload,success,otherAccounts} = data
        if(success){dispatch(RedcInsertPayload({ Info:payload, isLogined: true,otherAccounts }));}
      }
    },
    onError({
      response: {
        data: { message },
      },
    }) {
      dispatch(RedcInsertPayload({ isLogined: false }));
      Cookies.remove(CookieKey);
      toast.error(message);
      router.push("/auth/login");
    },
  });
};
export default useAuthenticate;
