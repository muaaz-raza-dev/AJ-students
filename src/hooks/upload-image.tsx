import UploadImageCloudinary from '@/utils/UploadImageCloudinary'
import  { useState } from 'react'
import toast from 'react-hot-toast'

export default function useUploadImage() {
 const [isLoading,setLoading] =useState(false)
 const [Error,setError]=useState("")
 const upload = (Image:File,cb:(url:string)=>any)=>{
    setLoading(true)
    UploadImageCloudinary(Image).then((data)=>{
    if(data==null){
        toast.error("Profile updated successfully!")
        setError("Failed to upload image")
        return
    }        
    else {
        cb(data?.url)
    }
    }

).finally(()=>setLoading(false))
}
return {upload,isLoading,Error}   
 
}
