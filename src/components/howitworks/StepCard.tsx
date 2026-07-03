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
    <div className="rounded-2xl border border-cyan-500/20 bg-[#0b1220] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(34,211,238,0.20)]">
      <div className="mb-5 text-cyan-400">
        {icon}
      </div>

      <h3 className="mb-3 text-2xl font-bold text-white">
        {title}
      </h3>

      <p className="text-gray-400">
        {description}
      </p>
    </div>
  );
}