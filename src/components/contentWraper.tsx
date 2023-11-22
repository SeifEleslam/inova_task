import { ReactNode } from "react";

export const ContentWraper = ({
  children,
  classes,
}: {
  children: ReactNode;
  classes?: String;
}) => {
  return (
    <div className={`${classes}`}>
      <div className={`max-w-content mx-auto px-8 sm:px-16`}>{children}</div>
    </div>
  );
};
