import { readFileSync } from 'fs';
import { join } from 'path';

export async function GET() {
  try {
    // Read the PDF from the attachment
    const pdfBuffer = readFileSync(
      join(process.cwd(), 'public', 'manua.pdf')
    );

    return new Response(pdfBuffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'inline; filename="Daidai操作マニュアル.pdf"',
      },
    });
  } catch (error) {
    console.error('Error serving PDF:', error);
    return new Response('PDF not found', { status: 404 });
  }
}
