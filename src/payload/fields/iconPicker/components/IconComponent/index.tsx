import React, { lazy, Suspense } from "react";
import { LucideProps } from "lucide-react";
import dynamicIconImports from "lucide-react/dynamicIconImports";
import * as test from "lucide-static";

interface IIconComponent {
  icon: keyof typeof dynamicIconImports;
  size?: number;
}

export interface IconProps extends Omit<LucideProps, "ref"> {
  name: keyof typeof test;
}

const fallback = <div style={{ background: "#ddd", width: 24, height: 24 }} />;

export const IconComponent: React.FC<IIconComponent> = ({ icon, size }) => {
  const DynamicIconComponent = lazy(
    dynamicIconImports[icon as IconProps["name"]],
  );
  if (undefined === DynamicIconComponent) return <></>;

  return (
    <Suspense fallback={fallback}>
      <DynamicIconComponent size={size} color={"#000"} />
    </Suspense>
  );
};
