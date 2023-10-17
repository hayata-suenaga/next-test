"use client";

import { ClientSafeProvider, signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

type SignInOptionItemProps = {
  provider: ClientSafeProvider;
};

export default function SignInOptionItem({ provider }: SignInOptionItemProps) {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackURL") ?? "/";

  return (
    <button onClick={() => signIn(provider.id, { callbackUrl })}>
      Sign in with {provider.name}
    </button>
  );
}
