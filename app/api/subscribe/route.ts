import { NextResponse } from "next/server"
import { getSupabaseAdmin } from "@/lib/supabase"

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Valid email is required" },
        { status: 400 }
      )
    }

    // Insert new subscriber (using admin client to bypass RLS)
    const supabaseAdmin = getSupabaseAdmin()
    const { error } = await supabaseAdmin.from("waitlist").insert({
      email: email.toLowerCase(),
      source: "landing_page",
    })

    if (error) {
      // Duplicate email - already subscribed (this is fine)
      if (error.code === "23505") {
        return NextResponse.json(
          { message: "You're already on the list!", alreadySubscribed: true },
          { status: 200 }
        )
      }
      console.error("Supabase error:", error)
      return NextResponse.json(
        { error: "Failed to subscribe" },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { message: "Successfully subscribed" },
      { status: 200 }
    )
  } catch (error) {
    console.error("Subscribe error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
