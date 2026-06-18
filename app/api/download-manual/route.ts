const PDF_URL = 'https://blobs.vusercontent.net/blob/Daidai_%E6%93%8D%E4%BD%9C%E3%83%9E%E3%83%8B%E3%83%A5%E3%82%A2%E3%83%AB_v101-ITaF4wFxKEuMqmppR3WD2sicLuDaX7.pdf';

export async function GET() {
  try {
    const response = await fetch(PDF_URL);
    
    if (!response.ok) {
      console.error('Failed to fetch PDF from source');
      return new Response('PDF not found', { status: 404 });
    }

    const pdfBuffer = await response.arrayBuffer();

    const filename = 'Daidai操作マニュアル.pdf';
    const encodedFilename = encodeURIComponent(filename);
    
    return new Response(pdfBuffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="${encodedFilename}"; filename*=UTF-8''${encodedFilename}`,
      },
    });
  } catch (error) {
    console.error('Error serving PDF:', error);
    return new Response('PDF not found', { status: 404 });
  }
}
