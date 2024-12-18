import { REGEXP_ONLY_DIGITS } from "input-otp";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "../ui/input-otp";
import { cn } from "@/lib/utils";

interface OTPProps extends React.HTMLAttributes<HTMLDivElement> {
  token: (value: string) => void;
}

export const OTP = ({ token, className, ...props }: OTPProps) => {
  return (
    <div className={cn("flex items-center justify-center h-screen")} {...props}>
      <InputOTP
        maxLength={6}
        pattern={REGEXP_ONLY_DIGITS}
        onChange={(value) => token(value)}
      >
        <InputOTPGroup className="gap-4">
          {Array.from({ length: 6 }).map((_, i) => {
            return (
              <InputOTPSlot
                key={i}
                index={i}
                className={cn("border-gray-400 border rounded-none", className)}
              />
            );
          })}
        </InputOTPGroup>
      </InputOTP>
    </div>
  );
};
