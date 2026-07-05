interface StepCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function StepCard({
  icon,
  title,
  description,
}: StepCardProps) {
  return (
    // - `p-6 sm:p-8` se mobile par padding tight and clean ho jayegi.
    // - `sm:hover:...` transitions ko sirf desktop ke liye bounds kiya hai taakay mobile touch pr sticky hover ka issue na aaye.
    <div className="group rounded-2xl border border-cyan-500/20 bg-[#0b1220] p-6 transition-all duration-500 sm:p-8 sm:hover:-translate-y-2 sm:hover:border-cyan-400 sm:hover:shadow-[0_0_40px_rgba(34,211,238,0.20)]">
      
      {/* Icon Wrapper */}
      {/* group-hover:scale-110 se icon smoothly desktop par pop karega */}
      <div className="mb-4 text-cyan-400 transition-transform duration-300 group-hover:scale-110 sm:mb-5">
        {icon}
      </div>

      {/* Card Title */}
      {/* Mobile par heading `text-xl` aur desktop par `sm:text-2xl` set ki hai */}
      <h3 className="mb-2 text-xl font-bold text-white sm:mb-3 sm:text-2xl">
        {title}
      </h3>

      {/* Card Description */}
      {/* Description text size choti screens ke liye `text-sm` kiya hai readability behtar karne ke liye */}
      <p className="text-sm leading-6 text-gray-400 sm:text-base sm:leading-7">
        {description}
      </p>
      
    </div>
  );
}