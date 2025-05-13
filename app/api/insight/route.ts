export async function POST(req: Request) {
  const { journal } = await req.json();

  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': process.env.CLAUDE_API_KEY!,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model: 'claude-3-opus-20240229',
      max_tokens: 300,
      messages: [
        {
          role: 'user',
          content: `Provide spiritual insight based on this journal entry: ${journal}`,
        },
      ],
    }),
  });

  const data = await response.json();
  return Response.json({ insight: data?.content?.[0]?.text || 'Insight unavailable.' });
}
