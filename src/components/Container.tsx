import clsx from "clsx";

export const Container = ({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<"div">) => {
  return (
    <div
      className={clsx(
        "min-h-screen max-w-[1300px] mx-auto flex flex-col px-5",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
