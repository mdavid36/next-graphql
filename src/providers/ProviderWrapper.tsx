import ReactQueryWrapper from "./ReactQueryWrapper";
import ApolloWrapper from "./ApolloWrapper";
import { ReactNode } from "react";
import ThemeWrapper from "./ThemeWrapper";

function ProviderWrapper({ children }: { children: ReactNode }) {
  return (
    <ThemeWrapper>
      <ApolloWrapper>
        <ReactQueryWrapper>{children}</ReactQueryWrapper>
      </ApolloWrapper>
    </ThemeWrapper>
  );
}
export default ProviderWrapper;
