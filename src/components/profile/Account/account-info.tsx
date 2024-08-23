import React from "react";
import AccountInfoLabelInputWrapper from "./account-info-label-input-wrapper";
import AccountForm from "@/forms/account/account-form";
import AccountInfoName from "./account-info-name";
import AccountInfoEmail from "./account-info-email";
import AccountInfoPhotoUpload from "./account-info-photo-update";


export default function AccountInfo() {

  return (
    <AccountForm>
      <div className="flex flex-col gap-3 py-4">
        <AccountInfoLabelInputWrapper label="Profile photo" description="max size is 5 mb.">
      <AccountInfoPhotoUpload/>
        </AccountInfoLabelInputWrapper>
        <AccountInfoLabelInputWrapper
          label="Full Name"
          description="Update your first and last name ."
        >
          <AccountInfoName />
        </AccountInfoLabelInputWrapper>
        <AccountInfoLabelInputWrapper
          label="Email Address"
          description="Setup our email for account recovery."
        >
          <AccountInfoEmail />
        </AccountInfoLabelInputWrapper>
  
      </div>
    </AccountForm>
  );
}
