import React from 'react';

export default function Success() {
  return (
    <div className="success-container">
      <p className="success-title">Thank you for your purchase!</p>
      <p className="success-message">
        We truly appreciate your business. If you have any questions or concerns, please don't hesitate to contact us at{' '}
        <a href="mailto:orders@example.com" className="success-link">orders@example.com</a>.
      </p>
    </div>
  );
}
