import React from "react";
import AccountInfoLabelInputWrapper from "../Account/account-info-label-input-wrapper";
import { Input } from "@/shadcn/components/ui/input";
import PasswordUpdateCurrentPass from "./password-update-current-pass";
import { Controller, useFormContext } from "react-hook-form";
import { IpasswordReset } from "@/types/Ipassword-reset";

export default function PasswordUpdateInputs() {
  const { control,watch } = useFormContext<IpasswordReset>();
  const newPassword =watch("New")
  function PasswordStrengthValidator(val:string=newPassword){
    if (!val||val.length<8) return null
    else {
      const state = {lowerCase:/[a-z]/.test(val),upperCase:/[A-Z]/.test(val),numbers:/[0-9]/.test(val),symbols:/[!@#$%^&*]/.test(val)}
      const checkLen = Object.values(state).filter(v=>v===true).length -1
      const checksValues:{[key:string]:{label:string,color:string}} = {'0':{label:'Very Weak',color:'text-destructive'},'1':{label:'Weak',color:'text-destructive'},
      '2':{label:'Strong',color:'text-green-500'},'3':{label:"Perfect",color:"text-green-600"}
    }
return (
  <b className={checksValues[checkLen] ? checksValues[checkLen].color : ''}>
        Passowrd Strength : {checksValues[checkLen] ? checksValues[checkLen].label : ''}
  </b>
);
  }
  }
  return (
    <>
    <PasswordUpdateCurrentPass/>
      <AccountInfoLabelInputWrapper
        pClassName="!flex-col !items-start gap-2"
        label="New Password"
        description="Type your new password."
      >
        <Controller name="New" control={control} rules={{required:"Required",minLength:{value:8,message:"Password atleast contain 8 characters."}}} render={({field,fieldState})=>{
          return<>
           <Input {...field} type="password" placeholder="New Password" />
           {fieldState.error && 
           <p className="text-destructive text-xs">{fieldState.error.message}</p>
           }
          </>
        }}>
        </Controller>
      </AccountInfoLabelInputWrapper>
      <div className="flex hFont text-sm py-2 ">
     {PasswordStrengthValidator()}
       </div>
      <AccountInfoLabelInputWrapper
        pClassName="!flex-col !items-start gap-2"
        label="New Password"
        description="Re-write new password."
      >
        <Controller name="confirm" control={control} rules={{required:"Confirmation is required.",
           validate: (value) => value === newPassword || 'Passwords do not match',
        }} render={({field,fieldState})=>{
          return<>
           <Input {...field} type="password" placeholder="Confirm New Password" />
           {fieldState.error && <p className="text-destructive text-xs">{fieldState.error.message}</p>
           }
          </>
        }}>
        </Controller>
      </AccountInfoLabelInputWrapper>
    </>
  );

}
