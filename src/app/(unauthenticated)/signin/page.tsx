import { getProviders } from "next-auth/react";
import SignInOptionItem from "./SignInOptionItem";

export default async function SignIn() {
  const providers = (await getProviders()) ?? [];

  return (
    <>
      {Object.values(providers).map((provider) => (
        <SignInOptionItem key={provider.id} provider={provider} />
      ))}
    </>
  );
}
