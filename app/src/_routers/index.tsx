import { OtpAuthentication } from "@/_features/auth/authecation-2FA/ui/page/otp-authentication";
import { Route, Routes } from "react-router-dom";
import { ManualAuthentication } from "../_features/auth/authecation-2FA/ui/page/manual-authentication";
import { QRCodeAuthentication } from "../_features/auth/authecation-2FA/ui/page/qr-code-authentication";
import { Login } from "../_features/auth/login/ui/page/login";
import { CreateStudent } from "../_features/student/ui/pages/create-student";
import { EditStudent } from "../_features/student/ui/pages/edit-student";
import { StudentList } from "../_features/student/ui/pages/students-list";
import { NotFound } from "../not-found";
import { AUTHENTICATION_2FA, PAGES_ROUTES } from "./paths";
import { PrivateRoute } from "./private-route";

export const Router = () => {
  return (
    <Routes>
      {/* public routes */}
      <Route path="/" element={<Login />} />
      <Route
        path={AUTHENTICATION_2FA.generateQrCodeAuthentication}
        element={<QRCodeAuthentication />}
      />
      <Route
        path={AUTHENTICATION_2FA.manualAuthentication}
        element={<ManualAuthentication />}
      />
      <Route
        path={AUTHENTICATION_2FA.otpAuthentication}
        element={<OtpAuthentication />}
      />

      {/* private routes */}
      <Route element={<PrivateRoute />}>
        <Route path={PAGES_ROUTES.student} element={<StudentList />} />
        <Route path={PAGES_ROUTES.createStudent} element={<CreateStudent />} />
        <Route path={PAGES_ROUTES.editStudent} element={<EditStudent />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
