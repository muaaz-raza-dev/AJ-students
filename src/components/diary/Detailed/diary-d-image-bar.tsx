import { Button } from "@/shadcn/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@/shadcn/components/ui/dialog";
import { DialogDescription } from "@radix-ui/react-dialog";
import Image from "next/image";
import { ReactNode } from "react";
import { FaFileDownload } from "react-icons/fa";

export default function DiaryDImageBar({images}:{images:string[]}) {
  return (
    <div className='flex gap-4 py-4 w-full border-y flex-wrap'>
         {images.map(img=>{
        return <EachImageDialog src={img} key={img}>
        <Image
          src={img}
          width={100}
          height={100}
          alt="Image" 
          placeholder="blur"
          blurDataURL="/blurred.jpg" 
          className="rounded-md"
          />
      </EachImageDialog>
        })}
      
    </div>
  )
}

const EachImageDialog = ({
    children,
    src,
  }: {
    children: ReactNode;
    src: string;
  }) => {
    
      
    return (
      <Dialog>
        <DialogTrigger>{children}</DialogTrigger>
        <DialogContent className=" bg-white h-[60vh] w-[90vw]">
            <DialogDescription className="">
          <Image src={src} alt="image" width={400} height={400}  blurDataURL="/blurred.jpg" className="h-full aspect-square object-contain" priority placeholder="blur" />
            </DialogDescription>
        <DialogFooter>
            <a download href={src}>
            <Button className="flex gap-4 w-full ">
                <FaFileDownload/> Download 
            </Button>
            </a>
        </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  };
  