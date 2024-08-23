import Image from "next/image";

export default function PasswordPresentation() {
  return  <div className=" ">
    <div className="center">
      <Image
        src={"/security-art.svg"}
        width={200}
        height={200}
        alt="200"
      />
    </div>
    <p className="text-muted-foreground pr-4 leading-tight text-center">
      Choose strong password to help you keep your account secure.
    </p>
  
  </div>

}
