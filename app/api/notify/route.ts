import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(request: Request) {
  try {
    const { email, phone, apps } = await request.json();

    if (!email && !phone) {
      return NextResponse.json(
        { error: "Please provide an email or phone number." },
        { status: 400 }
      );
    }

    if (!Array.isArray(apps) || apps.length === 0) {
      return NextResponse.json(
        { error: "Please select at least one app." },
        { status: 400 }
      );
    }

    const { error } = await supabase.from("launch_interest").insert({
      email: email || null,
      phone: phone || null,
      apps,
    });

    if (error) {
      return NextResponse.json(
        { error: "Something went wrong. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Invalid request." },
      { status: 400 }
    );
  }
}
