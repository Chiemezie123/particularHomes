import { cn } from "@/utils/helper";



function Spinner({ color }: { color?: string }) {
  return (
    <div className="relative h-4 w-4">
      <div
        className={cn(
          "inline-block h-4 w-4 animate-spin rounded-full border-t-2 border-[inherit]",
          color && `border-${color}`,
        )}
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}
export { Spinner };
