import type { ServiceId } from "./types";

export function ServiceNavIcon({ id }: { id: ServiceId }) {
  const iconProps = {
    width: 20,
    height: 20,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.45,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  if (id === "post-build") {
    return (
      <svg {...iconProps}>
        <path d="M4 17.5h16" />
        <path d="M6 17.5V10l2.7-2.3h6.6L18 10v7.5" />
        <path d="M10.7 7.7V5.4h2.6v2.3" />
        <path d="M8.8 12.3h6.4" />
      </svg>
    );
  }

  if (id === "maintenance") {
    return (
      <svg {...iconProps}>
        <path d="M6 18h12" />
        <path d="M8.2 18V10.6l1.8-2h4L15.8 10.6V18" />
        <path d="M10.2 12.1h3.6" />
        <path d="M5.1 8.3h13.8" />
      </svg>
    );
  }

  if (id === "floors") {
    return (
      <svg {...iconProps}>
        <rect x="5.2" y="5.2" width="13.6" height="13.6" rx="2.4" />
        <path d="M8.2 8.9h7.6M8.2 12h7.6M8.2 15.1h7.6" />
        <path d="M12 5.2v13.6" />
      </svg>
    );
  }

  return (
    <svg {...iconProps}>
      <path d="M4.5 16.8h15" />
      <path d="M6.7 16.8V9.6L9 7.4h6l2.3 2.2v7.2" />
      <path d="M9.3 11.8h5.4" />
      <path d="M10.2 7.4 12 5.8l1.8 1.6" />
    </svg>
  );
}

