import fs from 'fs';
import path from 'path';
import { NextResponse, NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  const filePath = path.join(process.cwd(), 'public', 'gallery', 'metadata.json');
  const jsonData = fs.readFileSync(filePath, 'utf8');
  const data = JSON.parse(jsonData);

  if (searchParams.has("raw")) {
    return Response.json(data);
  } else {
    const jsonString = JSON.stringify(data, null, 2);
    return new NextResponse(jsonString);
  }
}
