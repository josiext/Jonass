export const Title = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="sm:py-15 mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
      <h2 className="text-center mt-1 text-4xl font-bold uppercase text-gray-900 sm:text-5xl sm:tracking-tight lg:text-5xl">
        {children}
      </h2>
    </div>
  );
};
