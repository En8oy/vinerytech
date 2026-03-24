import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const prerender = false;

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
  try {
    const formData = await request.formData();

    // Extract form fields
    const name = formData.get('name')?.toString() || '';
    const email = formData.get('email')?.toString() || '';
    const company = formData.get('company')?.toString() || 'No especificada';
    const phone = formData.get('phone')?.toString() || 'No proporcionado';
    const serviceType = formData.get('service_type')?.toString() || '';
    const technologies = formData.get('technologies')?.toString() || 'No especificadas';
    const timelineText = formData.get('timeline_text')?.toString() || '';
    const budgetText = formData.get('budget_text')?.toString() || '';
    const description = formData.get('description')?.toString() || 'Sin descripción adicional';

    // Validate required fields
    if (!name || !email || !serviceType) {
      return new Response(
        JSON.stringify({
          success: false,
          message: 'Por favor completa los campos requeridos (nombre, email, tipo de servicio)',
        }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({
          success: false,
          message: 'Por favor ingresa un email válido',
        }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Build email HTML
    const emailHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nuevo Lead - VineryDev</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f4f5;">
  <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
    <!-- Header -->
    <div style="background: linear-gradient(135deg, #4f46e5 0%, #1e3a8a 100%); padding: 30px; border-radius: 12px 12px 0 0; text-align: center;">
      <h1 style="color: white; margin: 0; font-size: 24px;">🚀 Nuevo Lead</h1>
      <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">${serviceType}</p>
    </div>

    <!-- Content -->
    <div style="background-color: white; padding: 30px; border-radius: 0 0 12px 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">

      <!-- Contact Info -->
      <div style="margin-bottom: 25px;">
        <h2 style="color: #1e293b; font-size: 16px; margin: 0 0 15px 0; padding-bottom: 10px; border-bottom: 2px solid #e2e8f0;">
          📋 Información de Contacto
        </h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; color: #64748b; width: 120px;">Nombre:</td>
            <td style="padding: 8px 0; color: #1e293b; font-weight: 500;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #64748b;">Email:</td>
            <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #4f46e5; text-decoration: none;">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #64748b;">Empresa:</td>
            <td style="padding: 8px 0; color: #1e293b;">${company}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #64748b;">Teléfono:</td>
            <td style="padding: 8px 0;"><a href="tel:${phone}" style="color: #4f46e5; text-decoration: none;">${phone}</a></td>
          </tr>
        </table>
      </div>

      <!-- Project Details -->
      <div style="margin-bottom: 25px;">
        <h2 style="color: #1e293b; font-size: 16px; margin: 0 0 15px 0; padding-bottom: 10px; border-bottom: 2px solid #e2e8f0;">
          💼 Detalles del Proyecto
        </h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; color: #64748b; width: 120px;">Servicio:</td>
            <td style="padding: 8px 0; color: #1e293b; font-weight: 500;">${serviceType}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #64748b; vertical-align: top;">Tecnologías:</td>
            <td style="padding: 8px 0; color: #1e293b;">${technologies}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #64748b;">Timeline:</td>
            <td style="padding: 8px 0;">
              <span style="background-color: #dbeafe; color: #1e40af; padding: 4px 12px; border-radius: 20px; font-size: 13px;">${timelineText}</span>
            </td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #64748b;">Presupuesto:</td>
            <td style="padding: 8px 0;">
              <span style="background-color: #dcfce7; color: #166534; padding: 4px 12px; border-radius: 20px; font-size: 13px; font-weight: 600;">${budgetText}</span>
            </td>
          </tr>
        </table>
      </div>

      <!-- Description -->
      <div style="margin-bottom: 25px;">
        <h2 style="color: #1e293b; font-size: 16px; margin: 0 0 15px 0; padding-bottom: 10px; border-bottom: 2px solid #e2e8f0;">
          📝 Descripción del Proyecto
        </h2>
        <div style="background-color: #f8fafc; padding: 15px; border-radius: 8px; border-left: 4px solid #4f46e5;">
          <p style="margin: 0; color: #475569; line-height: 1.6; white-space: pre-wrap;">${description}</p>
        </div>
      </div>

      <!-- Quick Actions -->
      <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; text-align: center;">
        <p style="margin: 0 0 15px 0; color: #64748b; font-size: 14px;">Acciones rápidas:</p>
        <a href="mailto:${email}?subject=Re: Consulta VineryDev - ${serviceType}" style="display: inline-block; background-color: #4f46e5; color: white; padding: 10px 20px; border-radius: 6px; text-decoration: none; font-weight: 500; margin: 0 5px;">
          Responder Email
        </a>
        ${
          phone !== 'No proporcionado'
            ? `
        <a href="https://wa.me/${phone.replace(/[^0-9]/g, '')}" style="display: inline-block; background-color: #22c55e; color: white; padding: 10px 20px; border-radius: 6px; text-decoration: none; font-weight: 500; margin: 0 5px;">
          WhatsApp
        </a>
        `
            : ''
        }
      </div>
    </div>

    <!-- Footer -->
    <div style="text-align: center; padding: 20px; color: #94a3b8; font-size: 12px;">
      <p style="margin: 0;">Este email fue enviado desde el formulario de contacto de VineryDev</p>
      <p style="margin: 5px 0 0 0;">${new Date().toLocaleString('es-MX', { timeZone: 'America/Mexico_City' })}</p>
    </div>
  </div>
</body>
</html>
    `;

    // Send email with Resend
    const { data, error } = await resend.emails.send({
      from: 'VineryDev <onboarding@resend.dev>',
      to: [import.meta.env.CONTACT_EMAIL || 'vinerydev@gmail.com'],
      replyTo: email,
      subject: `🚀 Nuevo Lead: ${serviceType} - ${name}`,
      html: emailHtml,
    });

    if (error) {
      console.error('Resend error:', error);
      return new Response(
        JSON.stringify({
          success: false,
          message: 'Error al enviar el mensaje. Por favor intenta de nuevo.',
        }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: '¡Mensaje enviado correctamente!',
        id: data?.id,
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Server error:', error);
    return new Response(
      JSON.stringify({
        success: false,
        message: 'Error del servidor. Por favor intenta de nuevo más tarde.',
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
