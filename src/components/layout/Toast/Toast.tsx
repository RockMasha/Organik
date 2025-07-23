import { Toaster } from "sonner";

function Toast() {
  return (
    <Toaster
      position="bottom-right"
      toastOptions={{
        duration: 4000,
      }}
    />
  );
}

export default Toast;
