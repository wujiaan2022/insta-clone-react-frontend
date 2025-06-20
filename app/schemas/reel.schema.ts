// app/schemas/reel.schema.ts
import { z } from "zod";

export const reelSchema = z.object({
  id: z.number(),
  video_url: z.string().url(),
  caption: z.string(),
  user_id: z.number(),
  created_at: z.string().datetime(), // or just z.string() if not ISO
});

export const reelArraySchema = z.array(reelSchema);

export type Reel = z.infer<typeof reelSchema>;
