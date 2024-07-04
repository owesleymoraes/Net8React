interface LoaderProps {
  isOpen: boolean;
}

export const Loader = ({ isOpen = false }: LoaderProps) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className=" w-16 h-16 border-t-4 border-b-4 border-blue-500 rounded-full animate-spin"></div>
        </div>
      )}
    </>
  );
};
