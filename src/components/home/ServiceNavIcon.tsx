import { Building2, HardHat, Sparkles, Store } from "lucide-react";
import type { ServiceId } from "./types";

const iconProps = {
  "aria-hidden": true,
  className: "service-nav-icon-svg",
  strokeWidth: 1.75,
};

export function ServiceNavIcon({ id }: { id: ServiceId }) {
  if (id === "post-build") return <HardHat {...iconProps} />;
  if (id === "glass") return <Store {...iconProps} />;
  if (id === "floors") return <Sparkles {...iconProps} />;
  return <Building2 {...iconProps} />;
}

