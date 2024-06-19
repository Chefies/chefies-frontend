import { HTMLProps } from "react";

export default function Step({
  image,
  description,
  className,
  ...props
}: HTMLProps<HTMLDivElement> & { image: string; description?: string }) {
  return (
    <div
      {...props}
      className={
        "flex flex-col gap-4 items-center justify-center w-[33vw] md:w-[20vw] " +
        className
      }
    >
      <img src={image} className="w-[50vw] md:w-[10vw]" />
      {description && (
        <p className="text-center text-xl font-bold">{description}</p>
      )}
    </div>
  );
}
