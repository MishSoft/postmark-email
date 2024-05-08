import { client } from "@/postmark";

export async function POST(request) {
  const res = await request.json();
  const { subject, body } = res;
  console.log({ subject, body });

  client.sendEmail({
    From: "",
    To: "",
    Subject: "",
    TextBody: body,
  });

  return Response.json({ res });
}
