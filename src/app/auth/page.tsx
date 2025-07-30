import Image from "next/image";
import React from "react";
import LoginForm from "./components/login-form";

function AuthenticationPage() {
  return (
    <div className="grid lg:grid-cols-[1fr_1fr] min-h-svh">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="#" className="flex items-center gap-2 font-medium">
            <div className="bg-primary text-primary-foreground flex size-8 items-center justify-center rounded-md">
              <Image
                src="/images/atlas-ai-full.png"
                alt="Image"
                width={241}
                height={241}
                className="absolute size-8 dark:brightness-[0.2] dark:grayscale"
              />
            </div>
            Atlas AI Studio.
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
        </div>
      </div>
      <div className="bg-muted relative hidden lg:block">
        <Image
          src="/images/auth_cover.png"
          alt="Image"
          width={1280}
          height={720}
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}

export default AuthenticationPage;
