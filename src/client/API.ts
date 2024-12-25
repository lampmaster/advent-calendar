import { supabase } from "./client.ts";
import { getUnknownName } from "./utils.ts";

export type Wish = {
  id: number;
  message: string;
  approved: boolean;
  created_at: string;
  name: string;
};

export const addWish = async (message: string, name: string | undefined) => {
  const userName = name || getUnknownName();

  const { data, error } = await supabase
    .from("wishes")
    .insert([{ message, name: userName }])
    .select();

  if (error) {
    console.error("Error on sending wishes", error);
    return { success: false };
  }
  return { success: true, data };
};

export const getApprovedWishes = async () => {
  const { data, error } = await supabase
    .from("wishes")
    .select("*")
    .eq("approved", true)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Ошибка получения пожеланий:", error);
    return [];
  }

  return data;
};
