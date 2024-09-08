"use client";
import React from "react";
import EachConnectedDeviceComponent from "./each-device";
import Skeleton from "react-loading-skeleton";
import useFetchConnectedDevices from "@/hooks/profile/Device/useFetchConnectedDevices";

export default function ConnectedDevicesList() {
  const { isLoading, data } = useFetchConnectedDevices();
  if (isLoading) return <LoadingSkeleton/>;
  const list = data?.payload;
  return (
    <section className="flex flex-col gap-4 ">
      {list?.length == 0 &&
      <h1 className="text-xl font-bold text-muted-foreground center py-5">No more Connected Devices </h1>
      }
      {
        list?.map(device=><EachConnectedDeviceComponent key={device.ip} data={device} />)
      }
   
    </section>
  );
}

const LoadingSkeleton = () => {
  return (
    <main>
      <Skeleton height={80} />
      <Skeleton height={80} />
      <Skeleton height={80} />
    </main>
  );
};
