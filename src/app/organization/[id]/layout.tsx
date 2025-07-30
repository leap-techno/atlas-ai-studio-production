import MessageBodyWrapper from "@/components/message-body-wrapper";
import React from "react";

interface SingleOrganizationProps {
  children: Readonly<React.ReactNode>;
}

function SingleOrganization({ children }: SingleOrganizationProps) {
  return (
    <>
      <MessageBodyWrapper>{children}</MessageBodyWrapper>
    </>
  );
}

export default SingleOrganization;
