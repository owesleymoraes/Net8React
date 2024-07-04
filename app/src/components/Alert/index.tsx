import { Button } from "../Button";

interface AlertProps {
  message: string;
  title: string;
  titleButtonPrimary: string;
  titleButtonSecondary?: string;
  typeButton: "success" | "error";
  isConfirmDialog?: boolean;
  onClose?: () => void;
  onConfirm: () => void;
}

const Alert = ({
  message,
  title,
  typeButton,
  isConfirmDialog,
  titleButtonPrimary,
  titleButtonSecondary = "",
  onClose,
  onConfirm,
}: AlertProps) => {
  const className =
    typeButton === "success"
      ? "text-green-600 font-semibold"
      : "text-red-600 font-semibold";
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded-md shadow-lg w-96 h-40">
        <div className=" h-full flex flex-col justify-between">
          <div className="flex justify-between items-center">
            <h3 className={className}>{title}</h3>
          </div>
          <p className="mt-1 text-gray-600">{message}</p>
          <div className="flex justify-end mt-auto">
            <Button
              typeButton={isConfirmDialog ? "success" : `${typeButton}`}
              onClick={onConfirm}
            >
              {titleButtonPrimary}
            </Button>
            {isConfirmDialog && (
              <Button typeButton="error" onClick={onClose ? onClose : () => {}}>
                {titleButtonSecondary}
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alert;
