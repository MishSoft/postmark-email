import { client } from "@/postmark";

export async function POST(request) {
  const res = await request.json();
  const { name, age } = res;
  console.log({ subject, body });

  client.sendEmailWithTemplate({
    TemplateId: "35850248",
    From: "",
    To: "",
    TemplateModel: {
      name: name,
      age: age,
    },
  });

  return Response.json({ res });
}
