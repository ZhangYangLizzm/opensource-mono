import { z } from 'zod';

export const chartNameSchema = z.enum(['bar', 'pie', 'dot']);
