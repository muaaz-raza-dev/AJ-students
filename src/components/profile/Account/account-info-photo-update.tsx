"use client";
import { IbasicInfo } from "@/types/Icredits";
import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { useDropzone } from "react-dropzone"
import { Button } from "@/shadcn/components/ui/button";
import RequestLoading from "@/components/Loader/request-loading";
import Image from "next/image";
import useUploadImage from "@/hooks/upload-image";
import useResetPhoto from "@/hooks/profile/Account/useResetPhoto";

export default function AccountInfoPhotoUpload() {
  const {watch,setValue,reset} =useFormContext<IbasicInfo>()
  const photo = watch("photo")
  const [{sample,changes,file,error},setImg]  = useState<{file:File|null;sample:string,error?:string;changes:boolean}>({sample:photo,file:null,changes:false})
  const {isLoading:isUploading,mutate} = useResetPhoto(reset)
  const {isLoading,upload,Error} =useUploadImage()
  let { getRootProps, getInputProps } = useDropzone({
    maxSize: 1024 * 1024 * 5,
    multiple: false,
    accept: { "image/*": [".png", ".jpg", ".jpeg"] },
    onError(error) {
      console.log(error)
      setImg((e) => ({ ...e, error: error.message }));
    },
    onDrop(acceptedFiles) {
      if (acceptedFiles.length) {
        let sample = URL.createObjectURL(acceptedFiles[0]);
        setImg((e) => ({ ...e, file: acceptedFiles[0], sample ,changes:true }));
      }
    },
  });

  useEffect(() => {setImg(p=>({...p,sample:photo}))}, [photo])

  const handleUpload = ()=>{
    const onUpload=(url:string)=>{
      mutate(url)
      setValue("photo",url)
      setImg((e) => ({...e, error:"",changes:false,}));
    }
    if(file) upload(file,onUpload)
  }
  return (
      <div className="min-w-[60%] flex  gap-4 justify-between items-center">
        <div className="flex items-center gap-3">
        <div
          {...getRootProps({
            className: ` dropzone h-20 max-md:h-16 rounded-full aspect-square   border-2 center `,
          })}
          >
          <input {...getInputProps({ type: "image" })} />
          <Image
            src={sample || "/sample.png"}
            width={60}
            height={60}
            alt="photo"
            className="w-full shadow rounded-full h-full object-cover"
            />
        </div>
          {Error||error && <div className="text-red-500 text-sm">{error||Error}</div>}
            </div>
        
        {changes&&
        <div className="flex gap-3 text-sm">
          <Button
            type="button"
            variant={"secondary"}
            onClick={() =>
              setImg((e) =>({ ...e, sample: photo, file: null ,changes:false }))
            }
          >
            Cancel
          </Button>
          <Button
          variant={"default"}
            onClick={handleUpload}
            disabled={isUploading||isLoading}
            type="button"
            >
              {isUploading||isLoading? 
              <RequestLoading size="16" stroke="2" />
              :
             " Upload"
            }
          </Button>

        </div>
          }

        </div>

  );
}
