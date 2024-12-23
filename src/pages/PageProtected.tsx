import { Navigate, useParams } from "react-router";
import { PropsWithChildren } from "react";

export const PageProtected = ({ children }: PropsWithChildren) => {
  const { day } = useParams();
  const currentDay = new Date().getDate();
  const isLockedDay = currentDay < Number(day);
  if (isLockedDay) {
    return <Navigate to={"/"} />;
  }

  return children;
};
