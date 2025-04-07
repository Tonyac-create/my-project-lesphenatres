import * as React from 'react';

interface EmailTemplateProps {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  lastName,
  email,
  phone,
  message,
}) => (
  <div style={{
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    color: '#333',
  }}>
    <h1 style={{
      color: '#C00A32',
      borderBottom: '2px solid #C00A32',
      paddingBottom: '10px',
    }}>
      Nouveau message - Les Phénâtres
    </h1>
    
    <div style={{ marginTop: '20px' }}>
      <h2 style={{ color: '#666' }}>Informations du contact :</h2>
      <p><strong>Nom complet :</strong> {firstName} {lastName}</p>
      <p><strong>Email :</strong> {email}</p>
      <p><strong>Téléphone :</strong> {phone || 'Non renseigné'}</p>
    </div>

    <div style={{ 
      marginTop: '20px',
      backgroundColor: '#f5f5f5',
      padding: '15px',
      borderRadius: '5px',
    }}>
      <h2 style={{ color: '#666' }}>Message :</h2>
      <p style={{ whiteSpace: 'pre-wrap' }}>{message}</p>
    </div>

    <div style={{
      marginTop: '30px',
      borderTop: '1px solid #eee',
      paddingTop: '20px',
      fontSize: '14px',
      color: '#666',
    }}>
      <p>Message envoyé depuis le formulaire de contact du site Les Phénâtres</p>
    </div>
  </div>
);