import { z } from "zod";

export const overviewSchema = z.object({
  id: z.number(),
  name: z.string(),
  value: z.number(),
});

export type OverviewType = z.infer<typeof overviewSchema>;
