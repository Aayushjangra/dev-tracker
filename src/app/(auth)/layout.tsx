"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from 'next/navigation';

interface AuthLayoutProps {
  children: React.ReactNode;
}



const SignInLayout = ({ children }: AuthLayoutProps) => {

  const pathname = usePathname();
const isSignIn = pathname === "/sign-in"

  return (
    <div className="bg-neutral-100 min-h-screen">
      <div className="mx-auto max-w-screen-2xl p-4">
        <nav className="flex justify-between items-center">
          <h2 className="text-2xl text-blue-700 font-semibold">DevTracker</h2>

          <Button asChild variant="secondary">
            <Link href={isSignIn ? "/sign-up" : "/sign-in"}>
          {pathname ==="/sign-in" ? "Sign Up" : "Login"}
          </Link>
            </Button>
        </nav>
        <div className="flex flex-col items-center justify-center pt-4 md:pt-14">
        {children}

        </div>
        
      </div>
    </div>
  );
};

export default SignInLayout;
