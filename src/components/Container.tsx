import clsx from "clsx";

export const Container = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={clsx(
        "mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8",
        className
      )}
    >
      {children}
    </div>
  );
};
