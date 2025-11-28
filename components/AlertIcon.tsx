import { CheckIcon, ErrorIcon } from "@/components/Icons"

export type AlertType = "success" | "error"

export const alertStyles: Record<AlertType, string> = {
  success: "text-teal-500",
  error: "text-red-500"
}

type AlertIconProps = {
  type: AlertType
}

export default function AlertIcon({ type }: AlertIconProps) {
  return (
    <div role="alert" aria-live="polite" className={`flex items-center ${alertStyles[type]}`}>
      {type === "success" ? <CheckIcon /> : <ErrorIcon />}
    </div>
  )
}

// IF MORE ALERTS

// import { ReactElement } from "react";
// import { CheckIcon, ErrorIcon, WarningIcon, InfoIcon } from "@/components/Icons";

// export type AlertType = "success" | "error" | "warning" | "info";

// export const alertStyles: Record<AlertType, string> = {
//   success: "text-teal-500",
//   error: "text-red-500",
//   warning: "text-yellow-500",
//   info: "text-blue-500",
// };

// // Function that creates element when called
// //
// // ❌ Pre-rendered - same instance reused
// // const icon = <CheckIcon />;
// // <div>{icon}</div>  // render 1
// // <div>{icon}</div>  // render 2 - SAME object

// // ✅ Function - fresh instances
// // const Icon = () => <CheckIcon />;
// // <div><Icon /></div>  // render 1 - NEW object
// // <div><Icon /></div>  // render 2 - NEW object

// const alertIcons: Record<AlertType, () => ReactElement> = {
//   success: () => <CheckIcon />,
//   error: () => <ErrorIcon />,
//   warning: () => <WarningIcon />,
//   info: () => <InfoIcon />,
// };

// type AlertIconProps = {
//   type: AlertType;
// };

// export default function AlertIcon({ type }: AlertIconProps) {
//   const Icon = alertIcons[type];

//   return (
//     <div role="alert" className={`flex items-center ${alertStyles[type]}`}>
//       <Icon /> // Creates a NEW element each render
//     </div>
//   );
// }
