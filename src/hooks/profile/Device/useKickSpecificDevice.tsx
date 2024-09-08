import KickSpecificDevice from "@/api/Profile/Devices/kickSpecificDevice.api";
import React from "react";
import toast from "react-hot-toast";
import { useMutation } from "react-query";
import useFetchConnectedDevices from "./useFetchConnectedDevices";

export default function useKickSpecificDevice() {
    const {refetch} =useFetchConnectedDevices()
  return useMutation({
    mutationKey: "kick specific device",
    mutationFn: ({
      password,
      deviceIp,
    }: {
      password: string;
      deviceIp: string;
    }) => KickSpecificDevice(password, deviceIp),
    onSuccess() {
        toast.success("successfully logged out!")
        refetch()
    },
    onError({response:{data:{message}}}) {
        toast.error(message);
    },
  });
}
