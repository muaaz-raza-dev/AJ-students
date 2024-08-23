
const CloudKey= process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD
async function UploadImageCloudinary  (Image:File) {
    if(!CloudKey) return null
    if(!Image) return null
    let form = new FormData()
    form.append("file",Image)
    form.append("upload_preset","AJ academic assets")
    form.append("cloud_name",CloudKey)
let response =await fetch(`https://api.cloudinary.com/v1_1/${CloudKey}/upload`,{
    method:"POST",
    body:form
})
let result = await response.json()
return result
}

export default UploadImageCloudinary