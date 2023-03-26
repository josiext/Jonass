import clsx from "clsx";

export const Container = ({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<"div">) => {
  return (
    <div
      className={clsx(
        "min-h-screen max-w-[1200px] mx-auto flex flex-col",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
