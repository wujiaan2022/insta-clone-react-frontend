// app/components/ReelGridItem.tsx
import type { Reel } from "~/schemas/reel.schema";

interface Props {
  reel: Reel;
}

export default function ReelGridItem({ reel }: Props) {
  return (
    <div className="rounded overflow-hidden shadow-md">
      <video
        src={reel.video_url}
        controls
        className="w-full h-auto max-h-[300px] object-cover"
      />
      <p className="mt-2 text-sm text-gray-600 px-2">{reel.caption}</p>
    </div>
  );
}
