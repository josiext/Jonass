export const Title = ({
  children,
  ...props
}: React.ComponentPropsWithoutRef<"span">) => {
  return (
    <span {...props}>
      <h2 className="inline-block text-4xl font-semibold pb-1 border-b-4 border-neutral-900 mb-20">
        {children}
      </h2>
    </span>
  );
};
