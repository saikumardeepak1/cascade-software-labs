import * as React from "react";

export interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  number: string;
  subtitle?: string;
  title: string;
  body: string;
}

const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, number, subtitle, title, body, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`group [perspective:1000px] ${className || ""}`}
        {...props}
      >
        <div className="relative h-full rounded-[32px] bg-black shadow-2xl transition-all duration-500 ease-in-out [transform-style:preserve-3d] group-hover:[box-shadow:rgba(0,0,0,0.3)_30px_50px_25px_-40px,rgba(0,0,0,0.1)_0px_25px_30px_0px] group-hover:[transform:rotate3d(1,1,0,15deg)]">

          {/* Text content */}
          <div className="absolute inset-0 flex flex-col justify-between p-10 [transform-style:preserve-3d] [transform:translate3d(0,0,26px)]">
            <p
              className="text-[13px] font-medium tabular-nums text-white/30"
            >
              {number}{subtitle && <span> — {subtitle}</span>}
            </p>
            <div>
              <h3
                className="mb-3 text-[clamp(1.25rem,2vw,1.75rem)] font-semibold leading-tight tracking-[-0.015em] text-white"
              >
                {title}
              </h3>
              <p className="text-[17px] text-white/55" style={{ lineHeight: 1.42 }}>
                {body}
              </p>
            </div>
          </div>

          {/* Decorative circles */}
          <div className="absolute top-0 right-0 [transform-style:preserve-3d]">
            {[
              { size: "140px", pos: "8px", z: "20px", delay: "0s" },
              { size: "110px", pos: "12px", z: "40px", delay: "0.4s" },
              { size: "80px", pos: "20px", z: "60px", delay: "0.8s" },
            ].map((circle, index) => (
              <div
                key={index}
                className="absolute aspect-square rounded-full bg-white/[0.04] transition-all duration-500 ease-in-out"
                style={{
                  width: circle.size,
                  top: circle.pos,
                  right: circle.pos,
                  transform: `translate3d(0, 0, ${circle.z})`,
                  transitionDelay: circle.delay,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
);

GlassCard.displayName = "GlassCard";

export default GlassCard;
