import { db } from "~/server/db";
import { posts } from '~/server/db/schema';
import { NextResponse } from "next/server";
import { z } from "zod";
//import {string} from zod

const contentSchema = z.object({
    content: z.string().min(1, "Content cannot be empty").regex(/^\S+$/, "Content cannot contain spaces"),
  });
  